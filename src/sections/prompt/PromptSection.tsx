 'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { FC, useEffect, useState } from 'react';

const PROMPTS = [
  'Create a new inventory management app',
  'Deploy my app securely',
];

const PromptSection: FC = () => {
  const [promptText, setPromptText] = useState('');

  useEffect(() => {
    let isCancelled = false;
    let timeoutId: number | null = null;
    let currentPromptIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    const step = () => {
      if (isCancelled) {
        return;
      }

      const currentPrompt = PROMPTS[currentPromptIndex];

      if (isDeleting) {
        currentCharIndex -= 1;
      } else {
        currentCharIndex += 1;
      }

      setPromptText(currentPrompt.slice(0, currentCharIndex));

      if (!isDeleting && currentCharIndex === currentPrompt.length) {
        isDeleting = true;
        timeoutId = window.setTimeout(step, 1200);
        return;
      }

      if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPromptIndex = (currentPromptIndex + 1) % PROMPTS.length;
      }

      timeoutId = window.setTimeout(step, isDeleting ? 35 : 65);
    };

    timeoutId = window.setTimeout(step, 250);

    return () => {
      isCancelled = true;
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <section className="relative flex w-full min-h-[calc(100vh-176px)] items-center overflow-hidden bg-[#F5FAFF] py-10 md:py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#EFF7FF] via-[#F5FAFF] to-[#FCFEFF]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(109,168,255,0.45),transparent_44%),radial-gradient(circle_at_80%_18%,rgba(82,128,255,0.4),transparent_46%),radial-gradient(circle_at_52%_100%,rgba(30,178,255,0.34),transparent_50%)]" />
        <div className="absolute -top-28 left-[18%] h-[24rem] w-[24rem] rounded-full bg-[#72B7FF]/30 blur-[120px]" />
        <div className="absolute -top-24 right-[16%] h-[22rem] w-[22rem] rounded-full bg-[#788BFF]/28 blur-[110px]" />
        <div className="absolute -bottom-28 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#3EC9FF]/22 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,95,224,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,95,224,0.08)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_62%,rgba(9,31,82,0.04)_100%)]" />
      </div>

      <div className="container relative z-10 w-full">
        <div className="mx-auto mb-4 w-full max-w-4xl px-8 py-4 text-center md:mb-5 md:px-12 md:py-6">
          <p className="text-lg leading-relaxed text-neutral-600 md:text-3xl">
            Low-Ops simplifies{' '}
            <span className="font-semibold text-[#1E5FE0]">provisioning</span>,{' '}
            <span className="font-semibold text-[#1E5FE0]">deployment</span>, and{' '}
            <span className="font-semibold text-[#1E5FE0]">management</span> of apps
            in your private cloud.
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-[#CFE0FF] bg-linear-to-r from-[#F7FAFF] via-white to-[#EEF5FF] p-4 shadow-[0_16px_50px_-24px_rgba(20,103,255,0.5)] md:rounded-3xl md:p-6">
          <div className="pointer-events-none absolute -left-10 -top-12 h-40 w-40 rounded-full bg-[#5A9BFF]/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-14 -right-6 h-40 w-40 rounded-full bg-[#2D75FF]/20 blur-3xl" />

          <div className="relative mb-3 flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#2D75FF]/10 text-[#2D75FF]">
              <Sparkles className="h-4 w-4" />
            </span>
          </div>

          <div className="relative flex flex-col gap-3 md:flex-row md:items-center">
            <Input
              value={promptText}
              readOnly
              aria-label="AI prompt"
              className="h-12 rounded-xl border-[#CFE0FF] bg-white pr-4 text-base shadow-none focus-visible:ring-[#2D75FF]"
            />
            <a href="https://portal.app.low-ops.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="h-12 rounded-xl px-6 md:shrink-0">
                Go
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromptSection;
