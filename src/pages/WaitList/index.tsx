import Logo from "./view/Logo";
import WaitListHeader from "./view/WaitListHeader";
import JoinWaitlist from "./view/JoinWaitlist";
import HealthIcons from "./view/HealthIcons";
import SocialMediaIcons from "./view/SocialMediaIcons";
// dont forget to remove h-screen x
const WaitList = () => {
  return (
    <div className="waitlist relative min-h-screen"> 
      <div className="grid place-items-center pt-10 lg:hidden">
        <Logo fadeIn />
      </div>
      <div className="your-element hidden lg:grid  place-items-center py-6 border-t border-b mt-6">
        <Logo fadeIn />
      </div>



      <WaitListHeader />

      <JoinWaitlist />

      <HealthIcons />

      <SocialMediaIcons />

      <div className="footer text-[12px] lg:text-[14px] font-[400] lg:font-[500] text-[#13949A] py-2 lg:py-4 lg:pt-5 text-center border-t your-element bg-[#0E292B] -mt-[10px] lg:mt-[-15px] z-50">
        © 2024, FlashOne Health. All Rights Reserved
      </div>
    </div>
  );
};

export default WaitList;
