import AvatarGroup from "../../../../src/assets/_avatar group_.svg";

const JoinWaitlist = () => {
  return (
    <>
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
    </>
  )
}

export default JoinWaitlist