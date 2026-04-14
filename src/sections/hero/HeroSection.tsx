'use client';

import Reveal from '@/components/animations/Reveal';
import GradientBg from '@/components/GradientBg';
import HeroTerminal from '@/components/HeroTerminal';
import { FC } from 'react';
import HeroButtons from './HeroButtons';

const HeroSection: FC = () => {
  return (
    <section className="relative flex w-full min-h-[calc(100vh-176px)] items-center overflow-hidden bg-[#0A0D14] py-10">
      <GradientBg />
      <div className="container relative z-10 w-full">
        <div className="relative z-2 mx-auto box-border flex max-w-[1100px] flex-col items-center pb-[90px] pt-[110px] text-center">
          <Reveal>
            <div className="mb-9 inline-flex items-center gap-2 rounded-full border border-[rgba(99,102,241,0.45)] bg-[rgba(99,102,241,0.1)] px-4 py-1.5 text-xs font-light md:font-medium tracking-wide text-indigo-300">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]" />
              Now with MCP &amp; Claude Plugin — AI-native ops
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mb-7 max-w-[860px] text-[60px] md:text-[90px] font-extrabold leading-15 md:leading-25 tracking-[0px]">
              <span className="text-slate-100">Secure private</span>
              <br />
              <span className="text-slate-100">platform for </span>
              <span className="text-blue-500">app </span>
              <span className="text-cyan-400">creators</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mb-11 max-w-[520px] text-lg font-normal leading-[1.7] text-slate-500">
              Deploy and manage your apps in your own private cloud. Built for
              teams who move fast and ship often.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <HeroButtons />
          </Reveal>

          <Reveal delay={0.4}>
            <HeroTerminal />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
