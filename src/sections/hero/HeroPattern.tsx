import { motion } from 'framer-motion';

const HeroPattern = () => {
  return (
    <div className="flex flex-col absolute z-30 top-[-20px] left-0 w-[300%] translate-x-[-20%]">
      <div className="bg-white h-[600px] -rotate-5 translate-x-[-50px] -translate-y-[3px] w-full absolute top-5 z-10" />
      <div className="h-[70px] -rotate-5 -translate-x-[10px] -translate-y-[3px] w-full relative z-30">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.3 }}
          style={{ height: '100%', width: '100%', display: 'flex', backgroundColor: '#073E92' }}
        />
      </div>
      <div className="h-[70px] -rotate-5 -translate-x-[10px] -translate-y-[3px] w-full relative z-30">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ height: '100%', width: '100%', display: 'flex', backgroundColor: '#0B65F4' }}
        />
      </div>
      <div className="h-[70px] -rotate-5 -translate-x-[10px] -translate-y-[3px] w-full relative z-30">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.6, duration: 0.3 }}
          style={{ width: '100%', height: '100%', position: 'relative', backgroundColor: '#4D7FFF', border: 'none' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{ background: 'white', height: '70.1px', width: '28%', position: 'absolute', left: '23%', zIndex: 20 }}
          />
        </motion.div>
      </div>
      <div className="bg-white h-[600px] -rotate-5 translate-x-[-50px] -translate-y-[3px] w-full" />
    </div>
  );
};

export default HeroPattern;
