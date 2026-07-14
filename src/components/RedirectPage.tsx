'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const SITE_URL = 'https://low-ops.ai';

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

type ScriptLine = {
  /** ms after mount that this line starts */
  at: number;
  /** typewriter reveal (developer input) vs instant print (agent output) */
  typed?: boolean;
  /** leading glyph: `$` command, `>` prompt, `✓`/`✻`/`➜` agent output */
  prefix: string;
  prefixColor: string;
  text: string;
  textColor?: string;
  /** dim suffix, shown once the line is complete */
  detail?: string;
};

const CHAR_MS = 34;

// The story: prompt Claude Code to build an app, then one more
// prompt deploys it to Low-Ops. Prompt → app → production.
const SCRIPT: ScriptLine[] = [
  { at: 250, typed: true, prefix: '$', prefixColor: COLORS.mint, text: 'claude', textColor: '#fff' },
  { at: 800, prefix: '✻', prefixColor: COLORS.indigo, text: 'Claude Code ready', detail: 'connected to your workspace' },
  { at: 1250, typed: true, prefix: '>', prefixColor: COLORS.blue, text: 'build me a plant tracking app', textColor: '#fff' },
  { at: 2550, prefix: '✓', prefixColor: COLORS.green, text: 'app scaffolded', detail: 'next.js · api · database' },
  { at: 3050, prefix: '✓', prefixColor: COLORS.green, text: 'ui + tests written', detail: '12/12 passing' },
  { at: 3550, typed: true, prefix: '>', prefixColor: COLORS.blue, text: 'deploy it to low-ops', textColor: '#fff' },
  { at: 4550, prefix: '✓', prefixColor: COLORS.green, text: 'deployed to your private cloud', detail: 'tls · autoscaling · zero ops' },
  { at: 5100, prefix: '➜', prefixColor: COLORS.mint, text: 'live at plants.low-ops.app', textColor: COLORS.mint, detail: 'prompt → production in 42s' },
];

// Demo length; the launch button takes over once the story has played.
const BOOT_MS = 5900;

const RedirectPage = () => {
  const [elapsed, setElapsed] = useState(0);
  const glowRef = useRef<HTMLDivElement | null>(null);

  const booted = elapsed >= BOOT_MS;
  const progress = Math.min(1, elapsed / BOOT_MS);

  const go = useCallback(() => {
    window.location.assign(SITE_URL);
  }, []);

  // One clock drives everything: typing, prints, and the progress bar.
  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const e = now - start;
      setElapsed(e);
      if (e < BOOT_MS + 50) raf = requestAnimationFrame(tick);
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

  // Caret lives on the most recently started line while the demo runs.
  const activeIdx = SCRIPT.reduce((acc, line, idx) => (elapsed >= line.at ? idx : acc), -1);

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
      <section style={styles.window} aria-label="From prompt to production with Low-Ops">
        <header style={styles.titlebar}>
          <span style={{ ...styles.dot, background: COLORS.red }} />
          <span style={{ ...styles.dot, background: COLORS.amber }} />
          <span style={{ ...styles.dot, background: COLORS.green }} />
          <span style={styles.titletext}>
            <span style={styles.wordmark}>Low-Ops</span>
            <span style={styles.titledim}>{' // prompt → production'}</span>
          </span>
          <span style={styles.live}>
            <span className="lo-pulse" style={styles.livedot} /> live
          </span>
        </header>

        <div style={styles.body}>
          <div style={styles.log}>
            {SCRIPT.map((line, idx) => {
              const started = elapsed >= line.at;
              const chars = !started
                ? 0
                : line.typed
                  ? Math.min(line.text.length, Math.floor((elapsed - line.at) / CHAR_MS))
                  : line.text.length;
              const complete = started && chars >= line.text.length;
              return (
                <div
                  key={idx}
                  style={{
                    ...styles.logline,
                    opacity: started ? 1 : 0,
                    transform: started ? 'none' : 'translateY(6px)',
                  }}
                >
                  <span style={{ color: line.prefixColor, width: 16, display: 'inline-block', flexShrink: 0 }}>
                    {line.prefix}
                  </span>
                  <span style={{ color: line.textColor ?? COLORS.text }}>
                    {line.text.slice(0, chars)}
                    {idx === activeIdx && !booted ? (
                      <span className="lo-caret" style={styles.caret} />
                    ) : null}
                  </span>
                  {line.detail && complete ? (
                    <span style={styles.detail}>· {line.detail}</span>
                  ) : null}
                </div>
              );
            })}
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
                agent at work · {Math.round(progress * 100)}%
              </span>
            </div>
          )}
        </footer>
      </section>
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
  caret: {
    display: 'inline-block',
    width: 8,
    height: 15,
    marginLeft: 2,
    background: COLORS.blue,
    transform: 'translateY(2px)',
    boxShadow: `0 0 8px ${COLORS.blue}`,
  },
  log: { minHeight: 214 },
  logline: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 8,
    transition: 'opacity 0.4s ease, transform 0.4s ease',
  },
  detail: { color: COLORS.dim, fontSize: 12.5, whiteSpace: 'nowrap' },
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
  @media (prefers-reduced-motion: reduce) {
    .lo-caret, .lo-pulse, .lo-node, .lo-cta-shine { animation: none !important; }
    .lo-cta { animation: lo-cta-in 0.3s ease both !important; }
  }
`;

export default RedirectPage;
