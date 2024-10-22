import LogoImage from "../../../assets/logo/logo.svg"
import { motion } from "framer-motion";

const Logo = ({fadeIn}: { fadeIn?: boolean }) => { // Updated prop type
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  return (
    <motion.div
    initial={fadeIn ? "hidden" : "visible"} // Conditional initial
      animate={fadeIn ? "visible" : "visible"} // Conditional animate
      transition={{ duration: 1 }}
      variants={variants1}
    
    className='logo-container'>
        <img src={LogoImage} alt="Logo" />
    </motion.div>
  )
}

export default Logo;