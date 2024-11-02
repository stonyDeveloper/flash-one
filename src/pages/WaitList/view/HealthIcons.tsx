
import Heart from "../../../assets/heart.svg";
import Cross from "../../../assets/medical_cross.svg";

const HealthIcons = () => {
  return (
    <div className="w-full relative">
        <div className="w-fit absolute top-6 space-y-2 pl-6 lg:hidden">
          <img src={Heart} alt="heart" />
          <img src={Cross} alt="cross" />
          <img src={Heart} alt="heart" />
        </div>
        <div className="w-fit absolute top-6 space-y-2 right-0 pr-6 lg:hidden">
          <img src={Heart} alt="heart" />
          <img src={Cross} alt="cross" />
          <img src={Heart} alt="heart" />
        </div>
      </div>
  )
}

export default HealthIcons