import Logo from "./view/Logo";
import BoxOne from "../../../src/assets/box_1.svg";
import AvatarOne from "../../../src/assets/avatar_1.jpg";
import AvatarTwo from "../../../src/assets/avata_2.jpg";
import AvatarThree from "../../../src/assets/avatar_3.png";
import AvatarGroup from "../../../src/assets/_avatar group_.svg";
import Heart from "../../../src/assets/heart.svg";
import Cross from "../../../src/assets/medical_cross.svg";
import Planet from "../../../src/assets/planet.png"

const WaitList = () => {
  return (
    <div className="waitlist h-screen relative w-screen overflow-hidden">
      <div className="grid place-items-center pt-10">
        <Logo />
      </div>

      <img className="mt-6" src={BoxOne} alt="" />

      <div className="flex items-center gap-6 mt-6">
        <div className="w-full h-[0.5px] waitlist-line-left"></div>
        <p className="text-[16px] bg-text-gradient bg-clip-text text-transparent">
          Waitlist
        </p>
        <div className="w-full h-[0.5px] waitlist-line-right transform scale-x-[-1]"></div>
      </div>
      <div className="grid place-items-center">
        <div className="line-with-circles w-[calc(100vw-1.9rem)]   z-50 mt-[54px]"></div>
      </div>

      <div className="text-[48px] font-cabinet font-extrabold bg-text-gradient bg-clip-text text-transparent text-center z-50">
        FlashOne Health
      </div>

      <div className="grid place-items-center">
        <div className="line-with-circles w-[calc(100vw-1.9rem)] z-50"></div>
      </div>

      <p className="text-center mx-auto mt-6 px-8 tracking-tight leading-[18px] bg-text-gradient bg-clip-text text-transparent font-[400]">
        Join our waitlist for exclusive access to top-tier health insurance
        plans for your family in Nigeria.
      </p>

      <div className="grid place-items-center mt-6">
        <div className="line-with-circles w-[calc(100vw-1.9rem)]   z-50"></div>
      </div>

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

      <p className="text-center mx-auto mt-4 px-8 tracking-tight leading-[18px] bg-text-gradient bg-clip-text text-transparent font-[400]">
        Join others in the diaspora already onboard!
      </p>

      <div className="grid place-items-center mt-2">
        <div className="line-with-circles w-[calc(100vw-1.9rem)]   z-50"></div>
      </div>

      <div className="pl-4">
        
        <div className="px-1 border-r w-fit">
          <img src={Heart} alt="heart" />
          <img src={Cross} alt="cross" />
        </div>
      </div>

      <img  className="w-full z-50" src={Planet} alt="" />

      <div className="absolute bottom-0 left-4  grid place-items-center h-screen z-10">
        <div className="h-[calc(100vh-3.125rem)] w-[0.5px] bg-custom-gradient"></div>
      </div>
      <div className="absolute bottom-0 right-4  grid place-items-center h-screen z-10">
        <div className="h-[calc(100vh-3.125rem)] w-[0.5px] bg-custom-gradient"></div> 
      </div>
    </div>
  );
};

export default WaitList;
