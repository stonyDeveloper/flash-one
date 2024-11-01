import { motion } from "framer-motion";

const WaitListHeader = () => {
  const LEFT_SLIDE_VARIANT = {
    hidden: { opacity: 0, x: "-25vw" }, // Slide from the left
    visible: { opacity: 1, x: 0 }, // Slide to the center
  };

  const RIGHT_SLIDE_VARIANT = {
    hidden: { opacity: 0, x: "25vw" }, // Slide from the right
    visible: { opacity: 1, x: 0 }, // Slide to the center
  };

  const FADE_IN_VARIANT = {
    hidden: { opacity: 0 }, // Initially hidden
    visible: { opacity: 1 }, // Fade in
  };

  return (
    <div className="flex items-center lg:justify-center gap-6 mt-[99px] lg:mt-[18px]">
      {/* Left Line Animation */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={LEFT_SLIDE_VARIANT}
        transition={{ duration: 1 }}
        className="w-full lg:w-[10%] h-[0.5px] waitlist-line-left"
      ></motion.div>

      {/* Waitlist Text Animation */}
      <motion.p
        initial="hidden"
        animate="visible"
        variants={FADE_IN_VARIANT}
        transition={{ duration: 1, delay: 0.5 }} // Add delay so text appears after lines start animating
        className="text-[16px] lg:text-[20px] font-400 bg-text-gradient bg-clip-text text-transparent"
      >
        Waitlist
      </motion.p>

      {/* Right Line Animation with Flip */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={RIGHT_SLIDE_VARIANT}
        transition={{ duration: 1 }}
        className="w-[100%] lg:w-[10%] h-[0.5px] waitlist-line-right"
        style={{ transform: "scaleX(-1)" }} // Apply flip here using inline style
      ></motion.div>
    </div>
  );
};

export default WaitListHeader;
