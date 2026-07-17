'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const SITE_URL = 'https://low-ops.ai';

// Brand palette sampled from low-ops.ai, plus the golden-path gold
const COLORS = {
  bg0: '#05101f',
  bg1: '#0a0d14',
  sheet: 'rgba(9, 20, 38, 0.88)',
  line: 'rgba(76, 128, 255, 0.35)',
  lineDim: 'rgba(76, 128, 255, 0.14)',
  text: '#e5e7eb',
  dim: '#90a1b9',
  blue: '#4c80ff',
  indigo: '#818cf8',
  mint: '#15d89d',
  gold: '#ffd76a',
  goldDeep: '#f5a623',
  amber: '#febc2e',
  red: '#ff5f57',
};

// SVG sheet coordinate space
const VW = 900;
const VH = 520;

// The golden route across the drawing, left to right
const ROUTE_D =
  'M 55 320 C 140 320, 170 235, 260 235 C 335 235, 350 330, 440 330 C 520 330, 540 225, 620 225 C 700 225, 745 258, 800 258';

type Station = {
  frac: number;
  name: string;
  detail: string;
  tip: string;
};

const STATIONS: Station[] = [
  { frac: 0.05, name: 'PROMPT', detail: 'idea captured', tip: 'Your idea, captured as intent — the spark.' },
  { frac: 0.27, name: 'BUILD', detail: 'app + tests written', tip: 'Claude Code writes the app, api and tests.' },
  { frac: 0.5, name: 'SCAN', detail: '0 CVEs · 0 secrets', tip: 'Dependencies, secrets & policy checks — nothing ships unscanned.' },
  { frac: 0.73, name: 'SHIP', detail: 'tls · autoscale', tip: 'Deployed to your private cloud. Zero ops.' },
  { frac: 0.9, name: 'AUDIT', detail: 'trail signed', tip: 'Every change, deploy and access event recorded.' },
];

// Journey timeline: [ms, fraction of route covered] — dwells at each station,
// with a long hold at SCAN while the snowflake deploy gets rejected.
const KEYS: [number, number][] = [
  [0, 0],
  [500, 0.05],
  [900, 0.05],
  [1700, 0.27],
  [2100, 0.27],
  [2900, 0.5],
  [4300, 0.5],
  [5100, 0.73],
  [5500, 0.73],
  [6100, 0.9],
  [6400, 0.9],
  [7000, 1],
];
const JOURNEY_MS = 7000;
const SEAL_MS = 600;

const progressAt = (t: number) => {
  if (t <= 0) return 0;
  for (let i = 1; i < KEYS.length; i++) {
    if (t < KEYS[i][0]) {
      const [t0, p0] = KEYS[i - 1];
      const [t1, p1] = KEYS[i];
      const u = (t - t0) / (t1 - t0);
      const s = u * u * (3 - 2 * u);
      return p0 + (p1 - p0) * s;
    }
  }
  return 1;
};

const toSlug = (idea: string) =>
  idea
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/[\s-]+/g, '-')
    .slice(0, 24)
    .replace(/^-+|-+$/g, '') || 'my-app';

const IDEAS = ['plant tracker', 'invoice app', 'team wiki', 'crm for bakeries'];

type Phase = 'input' | 'journey' | 'done';
type Pt = { x: number; y: number };

const RedirectPage = () => {
  const [phase, setPhase] = useState<Phase>('input');
  const [idea, setIdea] = useState('');
  const [slug, setSlug] = useState('my-app');
  const [elapsed, setElapsed] = useState(0);
  const [spark, setSpark] = useState<Pt | null>(null);
  const [stations, setStations] = useState<(Station & Pt)[]>([]);
  const [routeEnd, setRouteEnd] = useState<Pt>({ x: 800, y: 258 });
  const [pathLen, setPathLen] = useState(0);
  const [cursor, setCursor] = useState<(Pt & { label: string }) | null>(null);

  const pathRef = useRef<SVGPathElement | null>(null);
  const mainRef = useRef<HTMLElement | null>(null);

  const go = useCallback(() => {
    window.location.assign(SITE_URL);
  }, []);

  // Measure the route once: station anchors + endpoint + length.
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const L = path.getTotalLength();
    setPathLen(L);
    setStations(
      STATIONS.map((s) => {
        const p = path.getPointAtLength(s.frac * L);
        return { ...s, x: p.x, y: p.y };
      }),
    );
    const end = path.getPointAtLength(L);
    setRouteEnd({ x: end.x, y: end.y });
  }, []);

  const begin = useCallback((text: string) => {
    const chosen = text.trim() || IDEAS[0];
    setIdea(chosen);
    setSlug(toSlug(chosen));
    setElapsed(0);
    setPhase('journey');
  }, []);

  // One clock drives the spark, the golden stroke, and every gag.
  useEffect(() => {
    if (phase !== 'journey') return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const e = now - start;
      setElapsed(e);
      const path = pathRef.current;
      if (path && pathLen > 0) {
        const p = path.getPointAtLength(progressAt(e) * pathLen);
        setSpark({ x: p.x, y: p.y });
      }
      if (e >= JOURNEY_MS + SEAL_MS) {
        setPhase('done');
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase, pathLen]);

  const replay = useCallback(() => {
    setPhase('input');
    setElapsed(0);
    setSpark(null);
    setIdea('');
  }, []);

  // CAD-style crosshair follows the cursor.
  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const el = mainRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const lat = (51.2 + (1 - y / Math.max(1, r.height)) * 1.4).toFixed(2);
    const lon = (3.6 + (x / Math.max(1, r.width)) * 1.7).toFixed(2);
    setCursor({ x, y, label: `${lat}°N — ${lon}°E` });
  }, []);

  const progress =
    phase === 'input' ? 0 : phase === 'done' ? 1 : progressAt(elapsed);
  const arrived = phase === 'done' || elapsed >= JOURNEY_MS;

  // Snowflake-deploy gag near the SCAN gate
  const snow =
    phase !== 'journey'
      ? 'hidden'
      : elapsed < 2900
        ? 'hidden'
        : elapsed < 3500
          ? 'enter'
          : elapsed < 4300
            ? 'stamped'
            : 'fall';
  const scanPt = stations[2];

  const pct = (p: Pt) => ({ left: `${(p.x / VW) * 100}%`, top: `${(p.y / VH) * 100}%` });

  return (
    <main ref={mainRef} onMouseMove={onMouseMove} style={styles.root}>
      <style>{CSS}</style>

      {/* CAD crosshair */}
      {cursor ? (
        <div aria-hidden>
          <div style={{ ...styles.crossV, left: cursor.x }} />
          <div style={{ ...styles.crossH, top: cursor.y }} />
          <span style={{ ...styles.crossLabel, left: cursor.x + 12, top: cursor.y + 10 }}>
            {cursor.label}
          </span>
        </div>
      ) : null}

      {/* drawing sheet */}
      <section style={styles.sheet} aria-label="The Golden Path — from a spark of an idea to your own cloud">
        {/* corner registration marks */}
        <span style={{ ...styles.corner, top: 8, left: 8, borderWidth: '1px 0 0 1px' }} aria-hidden />
        <span style={{ ...styles.corner, top: 8, right: 8, borderWidth: '1px 1px 0 0' }} aria-hidden />
        <span style={{ ...styles.corner, bottom: 8, left: 8, borderWidth: '0 0 1px 1px' }} aria-hidden />
        <span style={{ ...styles.corner, bottom: 8, right: 8, borderWidth: '0 1px 1px 0' }} aria-hidden />

        <header style={styles.sheetHead}>
          <span style={styles.wordmark}>LOW-OPS</span>
          <span style={styles.headDim}>{' // the golden path'}</span>
          <span style={styles.live}>
            <span className="lo-pulse" style={styles.livedot} /> live
          </span>
        </header>

        <svg viewBox={`0 0 ${VW} ${VH}`} style={styles.svg} role="img">
          {/* survey route (dashed) + golden progress */}
          <path d={ROUTE_D} fill="none" stroke={COLORS.line} strokeWidth="1.5" strokeDasharray="7 7" />
          <path
            ref={pathRef}
            d={ROUTE_D}
            fill="none"
            stroke="url(#lo-gold)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray={pathLen || 1}
            strokeDashoffset={(pathLen || 1) * (1 - progress)}
            style={{ filter: 'drop-shadow(0 0 6px rgba(245,166,35,0.55))' }}
          />
          <defs>
            <linearGradient id="lo-gold" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={COLORS.goldDeep} />
              <stop offset="100%" stopColor={COLORS.gold} />
            </linearGradient>
          </defs>

          {/* private cloud boundary */}
          <g className={arrived ? 'lo-sealed' : ''}>
            <circle
              className="lo-boundary"
              cx={routeEnd.x}
              cy={routeEnd.y}
              r="62"
              fill={arrived ? 'rgba(21,216,157,0.06)' : 'none'}
              stroke={arrived ? COLORS.mint : COLORS.line}
              strokeWidth="1.5"
              strokeDasharray={arrived ? 'none' : '6 6'}
            />
            <text x={routeEnd.x} y={routeEnd.y - 74} textAnchor="middle" style={svgLabel(arrived ? COLORS.mint : COLORS.dim, 10)}>
              PRIVATE CLOUD
            </text>
            <text x={routeEnd.x} y={routeEnd.y + 82} textAnchor="middle" style={svgLabel(COLORS.dim, 8.5)}>
              YOUR INFRASTRUCTURE
            </text>
          </g>

          {/* stations */}
          {stations.map((s) => {
            const lit = progress >= s.frac - 0.002;
            const below = s.y < 280;
            const ly = below ? s.y + 32 : s.y - 38;
            return (
              <g key={s.name} className="lo-station">
                <title>{s.tip}</title>
                <circle
                  cx={s.x}
                  cy={s.y}
                  r="12"
                  fill={lit ? 'rgba(245,166,35,0.16)' : 'rgba(9,20,38,0.9)'}
                  stroke={lit ? COLORS.goldDeep : COLORS.line}
                  strokeWidth="1.5"
                  strokeDasharray={lit ? 'none' : '3 3'}
                  style={{ transition: 'all 0.35s ease' }}
                />
                <circle
                  cx={s.x}
                  cy={s.y}
                  r="4"
                  fill={lit ? COLORS.gold : COLORS.line}
                  style={{ transition: 'fill 0.35s ease', filter: lit ? 'drop-shadow(0 0 5px rgba(255,215,106,0.8))' : 'none' }}
                />
                <text x={s.x} y={ly} textAnchor="middle" style={svgLabel(lit ? COLORS.text : COLORS.dim, 11, 600)}>
                  {s.name}
                </text>
                <text
                  x={s.x}
                  y={ly + 14}
                  textAnchor="middle"
                  style={{ ...svgLabel(COLORS.dim, 9), opacity: lit ? 1 : 0, transition: 'opacity 0.4s ease 0.15s' }}
                >
                  {s.detail}
                </text>
              </g>
            );
          })}

          {/* the spark */}
          {spark && phase !== 'input' ? (
            <g aria-hidden>
              <circle cx={spark.x} cy={spark.y} r="11" fill="rgba(255,215,106,0.22)" />
              <circle cx={spark.x} cy={spark.y} r="4.5" fill={COLORS.gold} style={{ filter: 'drop-shadow(0 0 8px rgba(255,215,106,0.95))' }} />
            </g>
          ) : null}

          {/* title block */}
          <g aria-hidden>
            <rect x={630} y={442} width={258} height={66} fill="rgba(5,16,31,0.6)" stroke={COLORS.line} strokeWidth="1" />
            <line x1={630} y1={464} x2={888} y2={464} stroke={COLORS.lineDim} />
            <text x={640} y={457} style={svgLabel(COLORS.text, 9.5, 600)}>LOW-OPS — GOLDEN PATH SURVEY</text>
            <text x={640} y={480} style={svgLabel(COLORS.dim, 8.5)}>DRAWING № LO-2026 · REV. C — APPROVED</text>
            <text x={640} y={497} style={svgLabel(COLORS.dim, 8.5)}>51.91°N — 4.47°E · SCALE 1:1 · SHEET 1 OF 1</text>
          </g>
        </svg>

        {/* annotation while the spark travels */}
        {phase !== 'input' ? (
          <div style={styles.annotation}>
            <span style={{ color: COLORS.blue }}>&gt;</span> {idea}
            <span style={{ color: COLORS.dim }}> → {slug}.app.low-ops.com</span>
          </div>
        ) : null}

        {/* snowflake deploy gets rejected at the SCAN gate */}
        {scanPt && snow !== 'hidden' ? (
          <div
            aria-hidden
            style={{
              ...styles.snow,
              left: `${(scanPt.x / VW) * 100}%`,
              top: `${(scanPt.y / VH) * 100 - 9}%`,
              opacity: snow === 'enter' || snow === 'stamped' ? 1 : 0,
              transform:
                snow === 'enter' || snow === 'stamped'
                  ? 'translate(-50%, -100%)'
                  : snow === 'fall'
                    ? 'translate(-50%, 40px) rotate(24deg)'
                    : 'translate(-50%, -160%)',
            }}
          >
            ❄ snowflake-deploy
            {snow === 'stamped' || snow === 'fall' ? <span className="lo-stamp" style={styles.stamp}>REJECTED</span> : null}
          </div>
        ) : null}

        {/* prompt overlay */}
        {phase === 'input' ? (
          <div style={styles.promptWrap}>
            <div style={styles.promptCard} className="lo-rise-in">
              <p style={styles.promptKicker}>ROUTE SURVEY — NEW PAYLOAD</p>
              <h1 style={styles.promptTitle}>From a spark of an idea to your own cloud</h1>
              <form
                style={styles.promptForm}
                onSubmit={(e) => {
                  e.preventDefault();
                  begin(idea);
                }}
              >
                <span style={{ color: COLORS.gold }}>&gt;</span>
                <input
                  autoFocus
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  maxLength={40}
                  placeholder="build me a…"
                  aria-label="What should we build?"
                  style={styles.promptInput}
                />
                <button type="submit" aria-label="Survey the route" style={styles.promptGo}>
                  ▸
                </button>
              </form>
              <div style={styles.chips}>
                {IDEAS.map((s) => (
                  <button key={s} type="button" style={styles.chip} className="lo-chip" onClick={() => begin(s)}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {/* the shipped app pops open inside the boundary */}
        {arrived ? (
          <div style={{ ...styles.appWin, ...pct(routeEnd) }} className="lo-app-pop">
            <div style={styles.appBar}>
              <span style={{ ...styles.appDot, background: COLORS.red }} />
              <span style={{ ...styles.appDot, background: COLORS.amber }} />
              <span style={{ ...styles.appDot, background: '#28c840' }} />
              <span style={styles.appUrl}>{slug}.app.low-ops.com</span>
            </div>
            <div style={styles.appBody}>
              <p style={styles.appTitle}>{idea}</p>
              <span style={styles.appRow} />
              <span style={{ ...styles.appRow, width: '62%' }} />
              <span style={{ ...styles.appRow, width: '78%' }} />
              <p style={styles.appAudit}>
                <span style={{ color: COLORS.mint }}>● live</span> · build ✓ scan ✓ ship ✓ · audit № LO-8412
              </p>
            </div>
          </div>
        ) : null}
      </section>

      {/* footer strip under the sheet */}
      <footer style={styles.footer}>
        {phase === 'done' ? (
          <>
            <button type="button" onClick={replay} style={styles.replay} className="lo-chip">
              ↺ survey another idea
            </button>
            <button type="button" onClick={go} className="lo-cta" style={styles.cta}>
              <span className="lo-cta-shine" aria-hidden />
              <span style={styles.ctaLabel}>Launch low-ops.ai</span>
              <span aria-hidden style={styles.ctaArrow}>→</span>
            </button>
          </>
        ) : phase === 'journey' ? (
          <div style={styles.booting}>
            <div style={styles.progressTrack}>
              <div style={{ ...styles.progressBar, width: `${progress * 100}%` }} />
            </div>
            <span style={styles.bootingText}>
              golden path · {Math.round(progress * 100)}%
            </span>
          </div>
        ) : (
          <span style={styles.hint}>▸ type an idea — or pick one — and watch it take the golden path</span>
        )}
      </footer>
    </main>
  );
};

const svgLabel = (fill: string, size: number, weight = 400): React.CSSProperties => ({
  fill,
  fontSize: size,
  fontWeight: weight,
  letterSpacing: 0.8,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
});

const styles: Record<string, React.CSSProperties> = {
  root: {
    position: 'relative',
    minHeight: '100vh',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
    padding: '2rem 1rem',
    overflow: 'hidden',
    cursor: 'crosshair',
    background: `radial-gradient(1200px 800px at 50% -10%, #0e1f3a 0%, ${COLORS.bg0} 55%, ${COLORS.bg1} 100%)`,
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
    color: COLORS.text,
  },
  crossV: {
    position: 'absolute', top: 0, bottom: 0, width: 1,
    background: 'rgba(76,128,255,0.14)', pointerEvents: 'none', zIndex: 5,
  },
  crossH: {
    position: 'absolute', left: 0, right: 0, height: 1,
    background: 'rgba(76,128,255,0.14)', pointerEvents: 'none', zIndex: 5,
  },
  crossLabel: {
    position: 'absolute', fontSize: 10, color: 'rgba(144,161,185,0.65)',
    pointerEvents: 'none', zIndex: 5, whiteSpace: 'nowrap',
  },
  sheet: {
    position: 'relative',
    width: 'min(960px, 96vw)',
    borderRadius: 6,
    background: COLORS.sheet,
    border: `1px solid ${COLORS.line}`,
    boxShadow: '0 30px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)',
    backgroundImage:
      `linear-gradient(${COLORS.lineDim} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.lineDim} 1px, transparent 1px),` +
      `linear-gradient(rgba(76,128,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(76,128,255,0.05) 1px, transparent 1px)`,
    backgroundSize: '55px 55px, 55px 55px, 11px 11px, 11px 11px',
    overflow: 'hidden',
    animation: 'lo-rise 0.7s cubic-bezier(0.16,1,0.3,1) both',
  },
  corner: {
    position: 'absolute', width: 14, height: 14,
    borderStyle: 'solid', borderColor: 'rgba(76,128,255,0.6)', zIndex: 2,
  },
  sheetHead: {
    display: 'flex', alignItems: 'center',
    padding: '13px 20px 0', fontSize: 12.5, letterSpacing: 0.4,
  },
  wordmark: { color: '#fff', fontWeight: 600 },
  headDim: { color: COLORS.dim },
  live: {
    marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6,
    fontSize: 11, color: COLORS.mint, textTransform: 'uppercase', letterSpacing: 1,
  },
  livedot: { width: 7, height: 7, borderRadius: '50%', background: COLORS.mint, display: 'inline-block' },
  svg: { display: 'block', width: '100%', height: 'auto' },
  annotation: {
    position: 'absolute', top: 44, left: 20, fontSize: 12.5, color: COLORS.text,
    maxWidth: '70%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
  },
  snow: {
    position: 'absolute', fontSize: 11.5, color: '#b6c6e3',
    background: 'rgba(13,24,41,0.92)', border: '1px dashed rgba(144,161,185,0.5)',
    borderRadius: 6, padding: '5px 9px', whiteSpace: 'nowrap',
    transition: 'transform 0.5s ease, opacity 0.5s ease', zIndex: 3,
  },
  stamp: {
    position: 'absolute', top: -9, right: -20, color: COLORS.red,
    border: `2px solid ${COLORS.red}`, borderRadius: 3, padding: '1px 5px',
    fontSize: 10, fontWeight: 700, letterSpacing: 1.5, background: 'rgba(5,16,31,0.85)',
  },
  promptWrap: {
    position: 'absolute', inset: 0, display: 'flex',
    alignItems: 'center', justifyContent: 'center', zIndex: 4,
    background: 'radial-gradient(closest-side, rgba(5,16,31,0.55), transparent)',
  },
  promptCard: {
    width: 'min(480px, 88%)', padding: '26px 26px 22px',
    background: 'rgba(9,20,38,0.94)', border: `1px solid ${COLORS.line}`, borderRadius: 8,
    boxShadow: '0 18px 60px rgba(0,0,0,0.5)', textAlign: 'center',
  },
  promptKicker: { margin: 0, fontSize: 10, letterSpacing: 2, color: COLORS.dim },
  promptTitle: { margin: '10px 0 18px', fontSize: 19, lineHeight: 1.4, color: '#fff', fontWeight: 600 },
  promptForm: {
    display: 'flex', alignItems: 'center', gap: 10,
    border: `1px dashed rgba(255,215,106,0.5)`, borderRadius: 8, padding: '10px 12px',
    background: 'rgba(5,16,31,0.6)',
  },
  promptInput: {
    flex: 1, minWidth: 0, background: 'transparent', border: 'none', outline: 'none',
    color: '#fff', fontSize: 14.5, fontFamily: 'inherit', caretColor: COLORS.gold,
  },
  promptGo: {
    flexShrink: 0, cursor: 'pointer', width: 34, height: 30, borderRadius: 6,
    border: 'none', background: `linear-gradient(180deg, ${COLORS.gold}, ${COLORS.goldDeep})`,
    color: '#05101f', fontSize: 14, fontWeight: 700,
  },
  chips: { display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginTop: 16 },
  chip: {
    cursor: 'pointer', fontFamily: 'inherit', fontSize: 11.5, color: COLORS.dim,
    padding: '5px 11px', borderRadius: 999, background: 'transparent',
    border: '1px dashed rgba(144,161,185,0.4)', transition: 'all 0.15s ease',
  },
  appWin: {
    position: 'absolute', width: 235, maxWidth: '58vw',
    transform: 'translate(-104%, -122%)',
    background: 'rgba(13,24,41,0.97)', border: `1px solid ${COLORS.line}`, borderRadius: 8,
    boxShadow: '0 18px 50px rgba(0,0,0,0.6), 0 0 30px rgba(21,216,157,0.12)',
    overflow: 'hidden', zIndex: 3,
  },
  appBar: {
    display: 'flex', alignItems: 'center', gap: 5, padding: '7px 10px',
    borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(5,16,31,0.6)',
  },
  appDot: { width: 8, height: 8, borderRadius: '50%', display: 'inline-block' },
  appUrl: {
    marginLeft: 6, fontSize: 9.5, color: COLORS.mint, overflow: 'hidden',
    textOverflow: 'ellipsis', whiteSpace: 'nowrap',
  },
  appBody: { padding: '10px 12px 12px', display: 'flex', flexDirection: 'column', gap: 7 },
  appTitle: { margin: 0, fontSize: 12, color: '#fff', fontWeight: 600, textTransform: 'capitalize' },
  appRow: { display: 'block', height: 7, width: '90%', borderRadius: 4, background: 'rgba(76,128,255,0.22)' },
  appAudit: { margin: '4px 0 0', fontSize: 9, color: COLORS.dim },
  footer: {
    display: 'flex', alignItems: 'center', gap: 12,
    width: 'min(960px, 96vw)', minHeight: 52,
  },
  booting: { display: 'flex', alignItems: 'center', gap: 12, width: '100%' },
  progressTrack: {
    flex: 1, height: 4, borderRadius: 999,
    background: 'rgba(255,255,255,0.08)', overflow: 'hidden',
  },
  progressBar: {
    height: '100%', borderRadius: 999,
    background: `linear-gradient(90deg, ${COLORS.goldDeep}, ${COLORS.gold}, ${COLORS.mint})`,
    boxShadow: '0 0 12px rgba(245,166,35,0.7)', transition: 'width 0.12s linear',
  },
  bootingText: { flexShrink: 0, fontSize: 11.5, color: COLORS.dim, letterSpacing: 0.3 },
  hint: { width: '100%', textAlign: 'center', fontSize: 11.5, color: COLORS.dim, letterSpacing: 0.3 },
  replay: {
    flexShrink: 0, cursor: 'pointer', fontFamily: 'inherit', fontSize: 11.5,
    color: COLORS.dim, padding: '10px 14px', borderRadius: 8, background: 'transparent',
    border: '1px dashed rgba(144,161,185,0.4)', transition: 'all 0.15s ease',
  },
  cta: {
    position: 'relative', flex: 1, cursor: 'pointer', fontFamily: 'inherit',
    fontSize: 15, fontWeight: 600, color: '#fff', padding: '13px 18px', borderRadius: 10,
    border: '1px solid rgba(129,140,248,0.55)',
    background: `linear-gradient(180deg, ${COLORS.blue}, #2f5fe0)`,
    boxShadow: '0 10px 30px rgba(76,128,255,0.35), inset 0 1px 0 rgba(255,255,255,0.25)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    overflow: 'hidden', transition: 'transform 0.15s ease, box-shadow 0.15s ease',
  },
  ctaLabel: { position: 'relative', zIndex: 1 },
  ctaArrow: { position: 'relative', zIndex: 1, transition: 'transform 0.2s ease' },
};

const CSS = `
  @keyframes lo-rise {
    from { opacity: 0; transform: translateY(18px) scale(0.985); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes lo-pulse {
    0%   { box-shadow: 0 0 0 0 rgba(21,216,157,0.6); }
    70%  { box-shadow: 0 0 0 7px rgba(21,216,157,0); }
    100% { box-shadow: 0 0 0 0 rgba(21,216,157,0); }
  }
  @keyframes lo-cta-in {
    from { opacity: 0; transform: translateY(10px) scale(0.98); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes lo-cta-glow {
    0%,100% { box-shadow: 0 10px 30px rgba(76,128,255,0.30), inset 0 1px 0 rgba(255,255,255,0.25); }
    50%     { box-shadow: 0 10px 42px rgba(76,128,255,0.60), inset 0 1px 0 rgba(255,255,255,0.25); }
  }
  @keyframes lo-shine {
    0%   { transform: translateX(-140%) skewX(-18deg); }
    60%,100% { transform: translateX(260%) skewX(-18deg); }
  }
  @keyframes lo-stamp-in {
    from { opacity: 0; transform: scale(2.2) rotate(-18deg); }
    60%  { opacity: 1; transform: scale(0.92) rotate(-12deg); }
    to   { opacity: 1; transform: scale(1) rotate(-12deg); }
  }
  @keyframes lo-app-in {
    from { opacity: 0; transform: translate(-104%, -112%) scale(0.9); }
    to   { opacity: 1; transform: translate(-104%, -122%) scale(1); }
  }
  @keyframes lo-seal {
    0%   { filter: drop-shadow(0 0 0 rgba(21,216,157,0)); }
    50%  { filter: drop-shadow(0 0 14px rgba(21,216,157,0.8)); }
    100% { filter: drop-shadow(0 0 6px rgba(21,216,157,0.4)); }
  }
  .lo-pulse { animation: lo-pulse 1.8s ease-out infinite; }
  .lo-rise-in { animation: lo-rise 0.6s cubic-bezier(0.16,1,0.3,1) both; }
  .lo-stamp { animation: lo-stamp-in 0.35s cubic-bezier(0.16,1,0.3,1) both; }
  .lo-app-pop { animation: lo-app-in 0.5s cubic-bezier(0.16,1,0.3,1) both; }
  .lo-sealed .lo-boundary { animation: lo-seal 1.2s ease both; transition: stroke 0.4s ease, fill 0.4s ease; }
  .lo-station:hover circle:first-of-type { stroke: ${COLORS.gold}; }
  .lo-chip:hover { color: #fff; border-color: ${COLORS.gold}; }
  .lo-cta {
    animation: lo-cta-in 0.45s cubic-bezier(0.16,1,0.3,1) both,
               lo-cta-glow 2.6s ease-in-out 0.5s infinite;
  }
  .lo-cta:hover { transform: translateY(-2px); }
  .lo-cta:hover span:last-child { transform: translateX(4px); }
  .lo-cta:active { transform: translateY(0); }
  .lo-cta-shine {
    position: absolute;
    top: 0; left: 0;
    width: 45%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
    animation: lo-shine 2.8s ease-in-out 0.8s infinite;
    pointer-events: none;
  }
  input::placeholder { color: rgba(144,161,185,0.55); }
  @media (prefers-reduced-motion: reduce) {
    .lo-pulse, .lo-cta-shine { animation: none !important; }
    .lo-cta { animation: lo-cta-in 0.3s ease both !important; }
  }
`;

export default RedirectPage;
