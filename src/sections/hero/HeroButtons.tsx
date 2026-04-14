import data from '@/data';

const HeroButtons = () => {
  return (
    <div className="mb-[72px] flex flex-col md:flex-row items-center gap-[14px]">
      <a
        href={data.cta.freeAccessLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          type="button"
          className="cursor-pointer rounded-[9px] border-0 bg-blue-600 px-9 py-[15px] text-base font-bold tracking-[-0.2px] text-white shadow-[0_0_32px_rgba(37,99,235,0.45)] transition-all duration-150 hover:bg-blue-500 hover:shadow-[0_0_48px_rgba(59,130,246,0.6)]"
        >
          Free Access →
        </button>
      </a>
      <a
        href={data.cta.personalDemoLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          type="button"
          className="cursor-pointer rounded-[9px] border border-slate-400/25 bg-transparent px-7 py-[15px] text-[15px] font-medium text-slate-400 transition-all duration-150 hover:border-slate-400/50 hover:text-slate-200"
        >
          Personal Demo
        </button>
      </a>
    </div>
  );
};

export default HeroButtons;
