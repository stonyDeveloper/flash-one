import Logo from "./view/Logo";
import AvatarGroup from "../../../src/assets/_avatar group_.svg";
import Heart from "../../../src/assets/heart.svg";
import Cross from "../../../src/assets/medical_cross.svg";
import Planet from "../../../src/assets/planet.png";
import X from "../../../src/assets/twitter.svg";
import Instagram from "../../../src/assets/instagram.svg";
import Linkedin from "../../../src/assets/linkedin.svg";
import Facebook from "../../../src/assets/facebook.svg";

const media_icons = [X, Facebook, Linkedin, Instagram];

const WaitList = () => {
  return (
    <div className="waitlist relative w-screen">
      <div className="grid place-items-center pt-10">
        <Logo />
      </div>

      <div className="flex items-center gap-6 mt-20">
        <div className="w-full h-[0.5px] waitlist-line-left"></div>
        <p className="text-[16px] bg-text-gradient bg-clip-text text-transparent">
          Waitlist
        </p>
        <div className="w-full h-[0.5px] waitlist-line-right transform scale-x-[-1]"></div>
      </div>

      <div className="text-[48px] font-cabinet font-extrabold bg-text-gradient bg-clip-text text-transparent text-center z-50 mt-10">
        FlashOne Health
      </div>

      <p className="text-center mx-auto mt-2 px-8 tracking-tighter leading-[20px] bg-text-gradient bg-clip-text text-transparent font-[400]">
        Join our waitlist for exclusive access to top-tier health insurance
        plans for your family in Nigeria.
      </p>

      <div className="px-8 mt-6">
        <input
          className="waitlist-email-input w-full h-10 rounded-lg outline-none px-4 text-[14px] font-[400] text-[#CFECED] placeholder:text-[#CFECED] border border-[#13949A]"
          placeholder="Your Email Address"
          type="text"
        />

        <button className="bg-[#13949A] w-full text-white text-[14px] font-[500] mt-4 h-10 rounded-lg hover:bg-[#14666B]">
          Join Waitlist
        </button>
      </div>

      <div className="mt-4 flex justify-center">
        <img src={AvatarGroup} alt="" />
      </div>

      <p className="text-center mx-auto mt-2 px-8 tracking-tight leading-[18px] bg-text-gradient bg-clip-text text-transparent font-[400]">
        Join others in the diaspora already onboard!
      </p>

      <div className="w-full relative">
        <div className="w-fit absolute top-6 space-y-2 pl-6">
          <img src={Heart} alt="heart" />
          <img src={Cross} alt="cross" />
          <img src={Heart} alt="heart" />
        </div>
        <div className="w-fit absolute top-6 space-y-2 right-0 pr-6">
          <img src={Heart} alt="heart" />
          <img src={Cross} alt="cross" />
          <img src={Heart} alt="heart" />
        </div>
      </div>

      <div className="relative">
        <img className="w-full" src={Planet} alt="Planet" />
        <div className="absolute top-24 inset-0 flex justify-center items-center">
          <div className="flex gap-8">
            {media_icons.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Icon ${index + 1}`}
                className="w-8 h-8"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="footer text-[12px] font-[400] text-[#13949A] py-2 text-center border-t">
        © 2024, FlashOne Health. All Rights Reserved
      </div>
    </div>
  );
};

export default WaitList;
