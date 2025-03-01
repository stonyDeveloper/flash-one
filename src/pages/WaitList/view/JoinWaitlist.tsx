import AvatarGroup from "../../../assets/_avatar_group_.webp";
import AvatarGroupDesktop from "../../../assets/_avatar_group_desktop.svg";
import { motion } from "framer-motion";
import Heart from "../../../assets/heart_desktop.svg";
import Cross from "../../../assets/medical_cross_desktop.svg";


const JoinWaitlist = () => {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  return (
    <div className="lg:w-fit lg:m-auto lg:relative">
      <div className="absolute bottom-0 left-[-80px] space-y-3 hidden lg:block">
      <img src={Heart} alt="heart" />
          <img src={Cross} alt="cross" />
          <img src={Heart} alt="heart" />
      </div>
      <div>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={variants1}
          className="text-[48px] lg:text-[64px] font-cabinet font-extrabold bg-text-gradient bg-clip-text text-transparent text-center z-50 mt-10 lg:mt-4"
        >
          WeCareAfrica Health
        </motion.div>

        <p className="text-center mx-auto mt-2 px-8 tracking-tighter lg:tracking-wider leading-[20px] bg-text-gradient bg-clip-text text-transparent font-[400] lg:hidden">
          Join our waitlist for exclusive access to top-tier health insurance
          plans for your family in Nigeria.
        </p>

        <p className="hidden lg:block text-center mx-auto mt-2 px-8 tracking-tighter leading-[20px] lg:leading-7 bg-text-gradient bg-clip-text text-transparent font-[400] text-[20px]">
          Join our waitlist for exclusive access to top-tier health insurance{" "}
          <br />
          plans for your family in Nigeria.
        </p>

        <div className="px-8 lg:px-4 mt-6 max-w-[2500px] m-auto lg:flex lg:gap-8 items-center ">
          <input
            className="waitlist-email-input w-full h-10 lg:h-12 rounded-lg outline-none px-4 text-[15px] font-[400] text-[#CFECED] placeholder:text-[#CFECED] placeholder:text-[14px] border border-[#13949A] lg:w-5/6"
            placeholder="Your Email Address"
            type="text"
          />

          <button className="bg-[#13949A] w-full text-white text-[14px] lg:text-[16px] font-[500] mt-4 lg:mt-0 h-10 lg:h-12 rounded-lg hover:bg-[#14666B] lg:w-2/6">
            Join Waitlist
          </button>
        </div>

        <div className="mt-4 flex justify-center lg:hidden">
          <img className="h-6" src={AvatarGroup} alt="" />
        </div>

        <p className="text-center mx-auto mt-2 px-8 tracking-tight leading-[18px] bg-text-gradient bg-clip-text text-transparent font-[400] lg:hidden">
          Join others in the diaspora already onboard!
        </p>

        <div className="hidden  m-auto lg:flex justify-center w-fit items-center gap-2 mt-4">
          <div>
            <img className="" src={AvatarGroupDesktop} alt="" />
          </div>

          <p className="text-center tracking-tight leading-[18px] bg-text-gradient bg-clip-text text-transparent font-[400] text-[18px] ">
            Join others in the diaspora already onboard!
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 right-[-80px] space-y-3 hidden lg:block">
      <img src={Heart} alt="heart" />
          <img src={Cross} alt="cross" />
          <img src={Heart} alt="heart" />
      </div>
    </div>
  );
};

export default JoinWaitlist;
