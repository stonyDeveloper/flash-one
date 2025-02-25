import { motion } from "framer-motion";

const WaitListHeader = () => {
  const LEFT_SLIDE_VARIANT = {
    hidden: { opacity: 0, x: "-25vw" },
    visible: { opacity: 1, x: 0 }
  };

  const RIGHT_SLIDE_VARIANT = {
    hidden: { opacity: 0, x: "25vw", scaleX: -1 },  // Include scaleX in the animation
    visible: { opacity: 1, x: 0, scaleX: -1 }      // Maintain scaleX throughout
  };

  const FADE_IN_VARIANT = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <div className="flex items-center lg:justify-center gap-6 mt-[99px] lg:mt-[18px]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={LEFT_SLIDE_VARIANT}
        transition={{ duration: 1 }}
        className="w-full lg:w-[15%] h-[0.5px] bg-gradient-to-r from-[rgba(6,106,111,0.1)] via-[rgba(206,210,212,0.5)] to-[rgba(6,106,111,0.1)]"
      />

      <motion.p
        initial="hidden"
        animate="visible"
        variants={FADE_IN_VARIANT}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-[16px] lg:text-[20px] font-400 bg-text-gradient bg-clip-text text-transparent whitespace-nowrap"
      >
        Waitlist
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={RIGHT_SLIDE_VARIANT}
        transition={{ duration: 1 }}
        className="w-full lg:w-[15%] h-[0.5px] bg-gradient-to-r from-[rgba(6,106,111,0.1)] via-[rgba(206,210,212,0.5)] to-[rgba(6,106,111,0.1)]"
      />
    </div>
  );
};



export default WaitListHeader;