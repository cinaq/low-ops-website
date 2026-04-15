const HeroTerminal = () => {
  return (
    <div className="w-full max-w-[820px] overflow-hidden rounded-[14px] border border-[rgba(59,130,246,0.18)] bg-[#0d1829] shadow-[0_0_100px_rgba(37,99,235,0.2),0_40px_80px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-[7px] border-b border-[rgba(59,130,246,0.12)] bg-[#0a1220] px-5 py-[13px]">
        <div className="h-3 w-3 shrink-0 rounded-full bg-[#ff5f57]"></div>
        <div className="h-3 w-3 shrink-0 rounded-full bg-[#febc2e]"></div>
        <div className="h-3 w-3 shrink-0 rounded-full bg-[#28c840]"></div>
        <span className="ml-3 flex-1 font-mono text-[11px] text-slate-700">
          ~/workspace/low-ops
        </span>
        <span className="inline-flex items-center gap-[5px] rounded border border-green-400/30 bg-[rgba(74,222,128,0.08)] px-2 py-0.5 font-mono text-[10px] text-green-400">
          <span className="h-[5px] w-[5px] shrink-0 animate-hero-pulse rounded-full bg-green-400"></span>
          MCP Active
        </span>
      </div>
      <div className="overflow-x-auto px-8 py-6 font-mono text-[13px] leading-[2.1] text-left">
        <div className="whitespace-nowrap">
          <span className="text-cyan-400">$ </span>
          <span className="text-slate-200">
            create and deploy inventory app called fairshare
          </span>
        </div>
        <div className="whitespace-nowrap">
          <span className="text-slate-700">
            &nbsp; ✦ Connecting to Low-Ops MCP...
          </span>
          <span className="text-green-400"> connected</span>
        </div>
        <div className="whitespace-nowrap">
          <span className="text-slate-700">&nbsp; ✦ Building image... </span>
          <span className="text-blue-400">layer cache hit 94%</span>
        </div>
        <div className="whitespace-nowrap">
          <span className="text-green-400">&nbsp; ✓ inventory-app</span>
          <span className="text-slate-700"> live in </span>
          <span className="text-slate-700"> → </span>
          <span className="text-cyan-400">
            https://inventory-app.low-ops.com
          </span>
        </div>
        <div className="whitespace-nowrap">&nbsp;</div>
        <div className="whitespace-nowrap">
          <span className="text-cyan-400">$ </span>
          <span className="inline-block h-[14px] w-[4px] animate-hero-blink align-middle bg-blue-500"></span>
        </div>
      </div>
    </div>
  );
};

export default HeroTerminal;
