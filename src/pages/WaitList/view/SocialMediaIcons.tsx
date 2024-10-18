import Planet from "../../../assets/planet.png";
import X from "../../../assets/twitter.svg";
import Instagram from "../../../assets/instagram.svg";
import Linkedin from "../../../assets/linkedin.svg";
import Facebook from "../../../assets/facebook.svg";

const SocialMediaIcons = () => {
const media_icons = [X, Facebook, Linkedin, Instagram];

  return (
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
  )
}

export default SocialMediaIcons