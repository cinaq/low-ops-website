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
          className="h-full w-full flex bg-primary-700"
        />
      </div>
      <div className="h-[70px] -rotate-5 -translate-x-[10px] -translate-y-[3px] w-full relative z-30">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="h-full w-full flex bg-primary-500"
        />
      </div>
      <div className="h-[70px] -rotate-5 -translate-x-[10px] -translate-y-[3px] w-full relative z-30">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.6, duration: 0.3 }}
          className="w-full h-full relative bg-primary-300 border-none"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-white h-[75px] w-[28%] absolute left-[23%] z-20"
          />
        </motion.div>
      </div>
      <div className="bg-white h-[600px] -rotate-5 translate-x-[-50px] -translate-y-[3px] w-full" />
    </div>
  );
};

export default HeroPattern;
