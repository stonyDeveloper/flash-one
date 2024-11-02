import React from 'react';

const NavigationLinks = () => {
  // Method 1: Using pseudo-elements with gradient
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

// Method 2: Using separate divider elements
const NavigationLinksAlt = () => {
  return (
    <div className="hidden lg:flex items-center text-[14px] font-[500]">
      <a href="#">Privacy Policy</a>
      <div className="w-[1px] h-4 mx-4 bg-gradient-to-b from-[rgba(6,106,111,0.1)] via-[rgba(206,210,212,0.5)] to-[rgba(6,106,111,0.1)]" />
      <a href="#">Cookie Policy</a>
      <div className="w-[1px] h-4 mx-4 bg-gradient-to-b from-[rgba(6,106,111,0.1)] via-[rgba(206,210,212,0.5)] to-[rgba(6,106,111,0.1)]" />
      <a href="#">Terms and Conditions</a>
    </div>
  );
};

// Method 3: Using CSS Grid with gradient borders
const NavigationLinksGrid = () => {
  return (
    <div className="hidden lg:grid grid-flow-col auto-cols-max gap-4 text-[14px] font-[500]">
      {['Privacy Policy', 'Cookie Policy', 'Terms and Conditions'].map((text, index) => (
        <React.Fragment key={text}>
          <a href="#">{text}</a>
          {index < 2 && (
            <div className="w-[1px] h-4 self-center bg-gradient-to-b from-[rgba(6,106,111,0.1)] via-[rgba(206,210,212,0.5)] to-[rgba(6,106,111,0.1)]" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

// Choose one of the methods and export it
export default NavigationLinks;