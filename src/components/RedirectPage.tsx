'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const REDIRECT_URL = 'https://low-ops.ai';
// The boot sequence is self-paced; nothing auto-redirects — the visitor
// launches via the button once the agent reports ready.
const BOOT_MS = 4700;

// Brand palette sampled from low-ops.ai
const COLORS = {
  bg0: '#05101f',
  bg1: '#0a0d14',
  panel: 'rgba(13, 24, 41, 0.72)',
  border: 'rgba(76, 128, 255, 0.22)',
  text: '#e5e7eb',
  dim: '#90a1b9',
  blue: '#4c80ff',
  indigo: '#818cf8',
  mint: '#15d89d',
  green: '#28c840',
  amber: '#febc2e',
  red: '#ff5f57',
};

type LogLine = {
  /** ms after mount that this line starts revealing */
  at: number;
  /** leading glyph / status marker */
  marker: string;
  markerColor: string;
  text: string;
  detail?: string;
};

const PROMPT = '$ lowops agent --resume --target low-ops.ai';

const LOG: LogLine[] = [
  { at: 1150, marker: '◐', markerColor: COLORS.indigo, text: 'waking low-ops agent', detail: 'model: ops-4' },
  { at: 1750, marker: '✓', markerColor: COLORS.green, text: 'authenticated', detail: 'region: auto' },
  { at: 2350, marker: '✓', markerColor: COLORS.green, text: 'analyzing infrastructure', detail: '0 incidents' },
  { at: 2950, marker: '✓', markerColor: COLORS.green, text: 'reconciling desired state', detail: 'drift: none' },
  { at: 3550, marker: '✓', markerColor: COLORS.green, text: 'optimizing operations', detail: 'ops load ↓ 98%' },
  { at: 4200, marker: '✓', markerColor: COLORS.mint, text: 'agent ready', detail: 'awaiting launch' },
];

const RedirectPage = () => {
  const [typed, setTyped] = useState('');
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const [booted, setBooted] = useState(false);
  const glowRef = useRef<HTMLDivElement | null>(null);

  const go = useCallback(() => {
    window.location.assign(REDIRECT_URL);
  }, []);

  // Typewriter for the command prompt (finishes ~1s in).
  useEffect(() => {
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(PROMPT.slice(0, i));
      if (i >= PROMPT.length) window.clearInterval(id);
    }, 34);
    return () => window.clearInterval(id);
  }, []);

  // Reveal boot log lines on schedule.
  useEffect(() => {
    const timers = LOG.map((line, idx) =>
      window.setTimeout(() => setVisibleLines((n) => Math.max(n, idx + 1)), line.at),
    );
    return () => timers.forEach(window.clearTimeout);
  }, []);

  // Progress bar tracks the boot sequence, then reveals the launch button.
  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / BOOT_MS);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setBooted(true);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Mouse-reactive glow behind the terminal.
  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const el = glowRef.current;
    if (!el) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 40;
    const y = (e.clientY / window.innerHeight - 0.5) * 40;
    el.style.transform = `translate(${x}px, ${y}px)`;
  }, []);

  const nodes = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        left: (i * 61.8) % 100,
        top: (i * 37.5) % 100,
        size: 1.5 + ((i * 7) % 5) * 0.6,
        delay: (i % 10) * 0.4,
        dur: 4 + (i % 6),
      })),
    [],
  );

  return (
    <main onMouseMove={onMouseMove} style={styles.root}>
      <style>{CSS}</style>

      {/* ambient layers */}
      <div style={styles.grid} aria-hidden />
      <div ref={glowRef} style={styles.glow} aria-hidden />
      <div style={styles.nodes} aria-hidden>
        {nodes.map((n, i) => (
          <span
            key={i}
            className="lo-node"
            style={{
              left: `${n.left}%`,
              top: `${n.top}%`,
              width: n.size,
              height: n.size,
              animationDelay: `${n.delay}s`,
              animationDuration: `${n.dur}s`,
            }}
          />
        ))}
      </div>
      <div style={styles.scan} aria-hidden />

      {/* terminal */}
      <section style={styles.window} aria-label="LowOps agent">
        <header style={styles.titlebar}>
          <span style={{ ...styles.dot, background: COLORS.red }} />
          <span style={{ ...styles.dot, background: COLORS.amber }} />
          <span style={{ ...styles.dot, background: COLORS.green }} />
          <span style={styles.titletext}>
            <span style={styles.wordmark}>Low-Ops</span>
            <span style={styles.titledim}>{' // autonomous ops agent'}</span>
          </span>
          <span style={styles.live}>
            <span className="lo-pulse" style={styles.livedot} /> live
          </span>
        </header>

        <div style={styles.body}>
          <div style={styles.cmdline}>
            <span style={{ color: COLORS.mint }}>➜</span>
            <span style={styles.cmd}>
              {typed}
              <span className="lo-caret" style={styles.caret} />
            </span>
          </div>

          <div style={styles.log}>
            {LOG.map((line, idx) => (
              <div
                key={idx}
                className="lo-line"
                style={{
                  ...styles.logline,
                  opacity: idx < visibleLines ? 1 : 0,
                  transform: idx < visibleLines ? 'none' : 'translateY(6px)',
                }}
              >
                <span style={{ color: line.markerColor, width: 16, display: 'inline-block' }}>
                  {line.marker}
                </span>
                <span style={{ color: COLORS.text }}>{line.text}</span>
                {line.detail ? (
                  <span style={styles.detail}>· {line.detail}</span>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <footer style={styles.footer}>
          {booted ? (
            <button
              type="button"
              onClick={go}
              className="lo-cta"
              style={styles.cta}
            >
              <span className="lo-cta-shine" aria-hidden />
              <span style={styles.ctaLabel}>Launch low-ops.ai</span>
              <span aria-hidden style={styles.ctaArrow}>→</span>
            </button>
          ) : (
            <div style={styles.booting}>
              <div style={styles.progressTrack}>
                <div style={{ ...styles.progressBar, width: `${progress * 100}%` }} />
              </div>
              <span style={styles.bootingText}>
                booting agent · {Math.round(progress * 100)}%
              </span>
            </div>
          )}
        </footer>
      </section>

      <a href={REDIRECT_URL} style={styles.fallback}>
        or continue directly to low-ops.ai
      </a>
    </main>
  );
};

const styles: Record<string, React.CSSProperties> = {
  root: {
    position: 'relative',
    minHeight: '100vh',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.25rem',
    padding: '2rem',
    overflow: 'hidden',
    background: `radial-gradient(1200px 800px at 50% -10%, #0e1f3a 0%, ${COLORS.bg0} 55%, ${COLORS.bg1} 100%)`,
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
    color: COLORS.text,
  },
  grid: {
    position: 'absolute',
    inset: 0,
    backgroundImage:
      'linear-gradient(rgba(76,128,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(76,128,255,0.06) 1px, transparent 1px)',
    backgroundSize: '44px 44px',
    maskImage: 'radial-gradient(circle at 50% 40%, black 0%, transparent 78%)',
    WebkitMaskImage: 'radial-gradient(circle at 50% 40%, black 0%, transparent 78%)',
  },
  glow: {
    position: 'absolute',
    width: 620,
    height: 620,
    borderRadius: '50%',
    background:
      'radial-gradient(circle, rgba(76,128,255,0.30) 0%, rgba(129,140,248,0.16) 40%, transparent 70%)',
    filter: 'blur(20px)',
    transition: 'transform 0.25s ease-out',
    pointerEvents: 'none',
  },
  nodes: { position: 'absolute', inset: 0, pointerEvents: 'none' },
  scan: {
    position: 'absolute',
    inset: 0,
    background:
      'repeating-linear-gradient(0deg, transparent 0, transparent 3px, rgba(255,255,255,0.015) 4px)',
    pointerEvents: 'none',
  },
  window: {
    position: 'relative',
    width: 'min(660px, 92vw)',
    borderRadius: 14,
    background: COLORS.panel,
    border: `1px solid ${COLORS.border}`,
    boxShadow:
      '0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.02), inset 0 1px 0 rgba(255,255,255,0.04)',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    overflow: 'hidden',
    animation: 'lo-rise 0.7s cubic-bezier(0.16,1,0.3,1) both',
  },
  titlebar: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '11px 14px',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    background: 'rgba(5,16,31,0.5)',
  },
  dot: { width: 12, height: 12, borderRadius: '50%', display: 'inline-block' },
  titletext: { marginLeft: 10, fontSize: 12.5, letterSpacing: 0.2 },
  wordmark: { color: '#fff', fontWeight: 600 },
  titledim: { color: COLORS.dim },
  live: {
    marginLeft: 'auto',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    fontSize: 11,
    color: COLORS.mint,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  livedot: { width: 7, height: 7, borderRadius: '50%', background: COLORS.mint, display: 'inline-block' },
  body: { padding: '18px 18px 8px', fontSize: 14, lineHeight: 1.9 },
  cmdline: { display: 'flex', gap: 8, alignItems: 'baseline', flexWrap: 'wrap' },
  cmd: { color: '#fff', wordBreak: 'break-word' },
  caret: {
    display: 'inline-block',
    width: 8,
    height: 15,
    marginLeft: 2,
    background: COLORS.blue,
    transform: 'translateY(2px)',
    boxShadow: `0 0 8px ${COLORS.blue}`,
  },
  log: { marginTop: 6, minHeight: 168 },
  logline: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 8,
    transition: 'opacity 0.4s ease, transform 0.4s ease',
  },
  detail: { color: COLORS.dim, fontSize: 12.5 },
  footer: {
    display: 'flex',
    alignItems: 'center',
    minHeight: 58,
    padding: '10px 16px 18px',
  },
  booting: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    width: '100%',
  },
  progressTrack: {
    flex: 1,
    height: 4,
    borderRadius: 999,
    background: 'rgba(255,255,255,0.08)',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 999,
    background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.indigo}, ${COLORS.mint})`,
    boxShadow: `0 0 12px ${COLORS.blue}`,
    transition: 'width 0.12s linear',
  },
  bootingText: {
    flexShrink: 0,
    fontSize: 11.5,
    color: COLORS.dim,
    letterSpacing: 0.3,
  },
  cta: {
    position: 'relative',
    width: '100%',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 15,
    fontWeight: 600,
    color: '#fff',
    padding: '13px 18px',
    borderRadius: 10,
    border: '1px solid rgba(129,140,248,0.55)',
    background: `linear-gradient(180deg, ${COLORS.blue}, #2f5fe0)`,
    boxShadow: `0 10px 30px rgba(76,128,255,0.35), inset 0 1px 0 rgba(255,255,255,0.25)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    overflow: 'hidden',
    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
  },
  ctaLabel: { position: 'relative', zIndex: 1 },
  ctaArrow: { position: 'relative', zIndex: 1, transition: 'transform 0.2s ease' },
  fallback: {
    position: 'relative',
    fontSize: 12,
    color: COLORS.dim,
    textDecoration: 'none',
    borderBottom: `1px dashed ${COLORS.dim}`,
    paddingBottom: 1,
  },
};

const CSS = `
  @keyframes lo-rise {
    from { opacity: 0; transform: translateY(18px) scale(0.985); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes lo-blink { 0%, 45% { opacity: 1; } 55%, 100% { opacity: 0; } }
  @keyframes lo-pulse {
    0%   { box-shadow: 0 0 0 0 rgba(21,216,157,0.6); }
    70%  { box-shadow: 0 0 0 7px rgba(21,216,157,0); }
    100% { box-shadow: 0 0 0 0 rgba(21,216,157,0); }
  }
  @keyframes lo-float {
    0%,100% { opacity: 0.15; transform: translateY(0); }
    50%     { opacity: 0.7;  transform: translateY(-10px); }
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
  .lo-caret { animation: lo-blink 1s steps(1) infinite; }
  .lo-pulse { animation: lo-pulse 1.8s ease-out infinite; }
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
  .lo-node {
    position: absolute;
    border-radius: 50%;
    background: #4c80ff;
    box-shadow: 0 0 6px #4c80ff;
    animation-name: lo-float;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
  main a:hover { color: #fff; border-color: #fff; }
  main button:hover { transform: translateY(-1px); border-color: #4c80ff !important; }
  main button:active { transform: translateY(0); }
  @media (prefers-reduced-motion: reduce) {
    .lo-caret, .lo-pulse, .lo-node, .lo-cta-shine { animation: none !important; }
    .lo-cta { animation: lo-cta-in 0.3s ease both !important; }
  }
`;

export default RedirectPage;
