import Planet from "../../../assets/planet.png";
import DesktopPlanet from "../../../assets/planet_desktop.svg";
import InitialDesktopPlanet from "../../../assets/planet_initial_desktop.svg";
import X from "../../../assets/twitter.svg";
import Instagram from "../../../assets/instagram.svg";
import Linkedin from "../../../assets/linkedin.svg";
import Facebook from "../../../assets/facebook.svg";

const SocialMediaIcons = () => {
  const media_icons = [X, Facebook, Linkedin, Instagram];

  return (
    <div className="relative">
      {/* Mobile View */}
      <img className="animated-planet w-full lg:hidden" src={Planet} alt="Planet" />
      <img
        className="w-full animated-planet hidden lg:block"
        src={InitialDesktopPlanet}
        alt="Initial planet"
      />

      {/* Animated Planet for Desktop View */}
        {/* Initial Planet with animation */}

        {/* Social Media Icons */}
        <div className="absolute lg:top-60   inset-0 flex justify-center items-center -z-50">
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
  );
};

export default SocialMediaIcons;
