'use client';

import logsImage from '@/assets/logs.png';
import HeroButtons from '@/components/HeroButtons';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import Image from 'next/image';

const StartTrialSection = () => {
  return (
    <section className="pt-20 md:pt-28 bg-secondary" id="testimonials">
      <div className="container flex flex-col items-center gap-4">
        <SectionTitle description="Start your free trial" />
        <p className="text-center text-muted-foreground font-light">
          Join over 10+ companies who already use our platform to streamline
          their operations
        </p>

        <HeroButtons className="mb-6 md:mb-10" />

        <div className="w-full max-h-[150px] sm:max-h-[300px] md:max-h-[450px] overflow-hidden">
          <div className="flex flex-col items-center gap-4 border-2 md:border-6 border-black rounded-xl relative overflow-hidden w-full h-auto">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              style={{ width: '100%', height: '100%' }}
            >
              <Image
                src={logsImage}
                alt="low-ops-metrics"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartTrialSection;
