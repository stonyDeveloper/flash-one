
const NavigationLinks = () => {
  return (
    <div className="hidden lg:flex items-center text-[14px] font-[500] space-x-8 ">
      <a href="#" className="relative underline">
        Privacy Policy
      </a>
      <a href="#" className="relative before:absolute before:left-[-16px] before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-4 before:bg-gradient-to-b before:from-[rgba(6,106,111,0.1)] before:via-[rgba(206,210,212,0.5)] before:to-[rgba(6,106,111,0.1)] underline">
        Cookie Policy
      </a>
      <a href="#" className="relative before:absolute before:left-[-16px] before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-4 before:bg-gradient-to-b before:from-[rgba(6,106,111,0.1)] before:via-[rgba(206,210,212,0.5)] before:to-[rgba(6,106,111,0.1)] underline">
        Terms and Conditions
      </a>
    </div>
  );
};





export default NavigationLinks;