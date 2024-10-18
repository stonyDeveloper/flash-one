import Logo from "./view/Logo";
import WaitListHeader from "./view/WaitListHeader";
import JoinWaitlist from "./view/JoinWaitlist";
import HealthIcons from "./view/HealthIcons";
import SocialMediaIcons from "./view/SocialMediaIcons";

const WaitList = () => {
  return (
    <div className="waitlist relative w-screen">
      <div className="grid place-items-center pt-10">
        <Logo />
      </div>

      <WaitListHeader />

      <JoinWaitlist />

      <HealthIcons />

      <SocialMediaIcons />

      <div className="footer text-[12px] font-[400] text-[#13949A] py-2 text-center border-t">
        © 2024, FlashOne Health. All Rights Reserved
      </div>
    </div>
  );
};

export default WaitList;
