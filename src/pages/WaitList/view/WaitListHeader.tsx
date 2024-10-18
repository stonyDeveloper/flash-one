const WaitListHeader = () => {
  return (
    <div className="flex items-center gap-6 mt-20">
      <div className="w-full h-[0.5px] waitlist-line-left"></div>
      <p className="text-[16px] bg-text-gradient bg-clip-text text-transparent">
        Waitlist
      </p>
      <div className="w-full h-[0.5px] waitlist-line-right transform scale-x-[-1]"></div>
    </div>
  );
};

export default WaitListHeader;
