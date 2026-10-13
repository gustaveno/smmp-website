/**
 * Semua warna memakai token dari globals.css (--background, --primary,
 * --accent, --border, dst.) sehingga otomatis mengikuti mode terang/gelap.
 */
export default function LoadingPage() {
  const lines = [
    { width: '100%', height: '2px', delay: '0s' },
    { width: '72%', height: '1px', delay: '0.12s' },
    { width: '88%', height: '1px', delay: '0.24s' },
    { width: '40%', height: '6px', delay: '0.36s', accent: true },
    { width: '95%', height: '1px', delay: '0.52s' },
    { width: '60%', height: '1px', delay: '0.64s' },
    { width: '80%', height: '1px', delay: '0.76s' },
    { width: '30%', height: '4px', delay: '0.90s', accent: true },
    { width: '90%', height: '1px', delay: '1.04s' },
    { width: '50%', height: '1px', delay: '1.16s' },
    { width: '75%', height: '1px', delay: '1.28s' },
    { width: '100%', height: '2px', delay: '1.42s' },
  ];

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-background/95 text-foreground"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at 50% 30%, color-mix(in oklab, var(--primary) 14%, var(--background)) 0%, rgba(255,255,255,0.02) 30%, var(--background) 70%)',
      }}
    >
      <span className="sr-only">Loading…</span>

      {/* Double-line frame */}
      <div className="absolute inset-6 sm:inset-8 md:inset-12 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 border border-border" />
        <div className="absolute inset-[3px] border border-border/50" />

        {/* Corner accents */}
        {[
          { top: 0, left: 0 },
          { top: 0, right: 0 },
          { bottom: 0, left: 0 },
          { bottom: 0, right: 0 },
        ].map((pos, i) => (
          <div
            key={i}
            className="loading-anim loading-dot absolute w-2 h-2 rounded-full bg-accent"
            style={{
              ...pos,
              translate: '-50% -50%',
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Animated lines */}
      <div
        className="relative z-10 flex flex-col items-center gap-[14px] w-[200px] sm:w-[280px] md:w-[340px]"
        aria-hidden="true"
      >
        {lines.map((line, i) => (
          <div
            key={i}
            className={`loading-anim loading-line rounded-full ${line.accent ? 'bg-accent' : 'bg-primary'}`}
            style={{
              width: line.width,
              height: line.height,
              animationDelay: line.delay,
            }}
          />
        ))}
      </div>

      {/* Bottom progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary/15 overflow-hidden" aria-hidden="true">
        <div className="loading-anim loading-progress h-full bg-primary" />
      </div>

      <style>{`
        .loading-line {
          animation: loading-line 3.2s ease-in-out infinite both;
          transform-origin: center;
        }
        .loading-dot {
          animation: loading-dot 1.6s ease-in-out infinite both;
        }
        .loading-progress {
          animation: loading-progress 3.2s cubic-bezier(0.22, 1, 0.36, 1) infinite;
          transform-origin: left center;
        }
        @keyframes loading-line {
          0%   { transform: scaleX(0); opacity: 0; }
          30%  { transform: scaleX(1); opacity: 1; }
          85%  { transform: scaleX(1); opacity: 1; }
          100% { transform: scaleX(1); opacity: 0; }
        }
        @keyframes loading-dot {
          0%, 100% { opacity: 0.35; }
          50%      { opacity: 1; }
        }
        @keyframes loading-progress {
          0%   { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .loading-anim {
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}