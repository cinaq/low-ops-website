const GradientBg = () => {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-linear-to-b from-[#0A0D14] via-[#0B101B] to-[#090C12]" />
      <div
        aria-hidden="true"
        className="absolute -top-16 left-[8%] h-64 w-64 rounded-full bg-[#4C80FF]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-[9%] top-10 h-56 w-56 rounded-full bg-[#15D89D]/15 blur-3xl"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(76,128,255,0.26),transparent_42%),radial-gradient(circle_at_80%_14%,rgba(21,216,157,0.18),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(38,106,255,0.2),transparent_46%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(166,177,204,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(166,177,204,0.08)_1px,transparent_1px)] bg-size-[36px_36px] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_56%,rgba(0,0,0,0.45)_100%)]" />
    </div>
  );
};

export default GradientBg;
