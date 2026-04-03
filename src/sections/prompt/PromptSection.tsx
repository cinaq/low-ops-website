 'use client';

import { Button } from '@/components/ui/button';
import { motion, useReducedMotion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { FC, useEffect, useState } from 'react';

const PROMPTS = [
  'Create a new inventory management app',
  'Deploy my app securely',
];

const PromptSection: FC = () => {
  const [promptText, setPromptText] = useState('');
  const reduceMotion = useReducedMotion();

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
    <section className="relative flex w-full min-h-[calc(100vh-176px)] items-center overflow-hidden bg-[#0A0D14] py-10 md:py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D14] via-[#0B101B] to-[#090C12]" />
        <motion.div
          aria-hidden="true"
          className="absolute -top-16 left-[8%] h-64 w-64 rounded-full bg-[#4C80FF]/20 blur-3xl"
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -14, 0],
                  x: [0, 10, 0],
                  scale: [1, 1.06, 1],
                }
          }
          transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute right-[9%] top-10 h-56 w-56 rounded-full bg-[#15D89D]/15 blur-3xl"
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, 16, 0],
                  x: [0, -12, 0],
                }
          }
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(76,128,255,0.26),transparent_42%),radial-gradient(circle_at_80%_14%,rgba(21,216,157,0.18),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(38,106,255,0.2),transparent_46%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(166,177,204,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(166,177,204,0.08)_1px,transparent_1px)] bg-[size:36px_36px] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_56%,rgba(0,0,0,0.45)_100%)]" />
      </div>

      <div className="container relative z-10 w-full">
        <motion.div
          className="mx-auto mb-4 w-full max-w-4xl px-8 py-4 text-center md:mb-5 md:px-12 md:py-6"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-lg leading-relaxed text-[#D0D8E7] md:text-3xl">
            Secure private platform for app creators
          </p>
        </motion.div>
        <motion.div
          className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-[#303749] bg-[#0E1422]/95 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)] backdrop-blur md:rounded-3xl"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 26, scale: reduceMotion ? 1 : 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reduceMotion ? undefined : { y: -2 }}
        >
          <div className="border-b border-[#2A3142] bg-[#131B2A] px-4 py-3 md:px-5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <span className="text-xs font-medium tracking-[0.16em] text-[#8E9ABB] uppercase">
                
              </span>
            </div>
          </div>

          <div className="p-4 md:p-6">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#2A3550] bg-[#10192B] px-3 py-1 text-xs font-medium text-[#B8C5E2]">
              <Terminal className="h-3.5 w-3.5" />
              AI Agent
            </span>

            <div className="rounded-xl border border-[#2A3550] bg-[#0A1120] p-4 font-mono md:p-5">
              <div className="mb-2 text-xs text-[#6E7EA6]">~/workspace/low-ops</div>
              <div className="flex min-h-8 flex-wrap items-center gap-2 text-sm md:text-base">
                <span className="text-[#7AF7C4]">$</span>
                <span className="text-[#A2B4DA]"></span>
                <span className="text-[#DDE6FF]">{promptText}</span>
                <motion.span
                  aria-hidden="true"
                  className="inline-block h-4 w-2 animate-pulse rounded-[2px] bg-[#8EB1FF]"
                  animate={reduceMotion ? undefined : { opacity: [1, 0.25, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <a href="https://portal.app.low-ops.com" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="h-11 rounded-lg border border-[#3A4B72] bg-[#1A2742] px-6 font-medium text-[#E2EAFF] hover:bg-[#24365E]"
                >
                  Start now
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromptSection;
