import React from 'react';
import SuccessIcon from "../assets/success-icon.svg"


interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#041C1E] p-6  shadow-lg w-80 text-center flex flex-col items-center justify-center  md:min-w-[440px] rounded-[24px]"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={SuccessIcon} alt="" />
        <p className='text-[#CFECED] text-[20px] font-[700] mt-6'>We've added you to our <br />
        waiting list!</p>
        <p className='text-[16px] font-[400] text-[#CFECED] mt-4'>We'll let you know when FlashOne Health is ready.</p>
        <button
          className="bg-[#13949A] w-full h-[40px] hover:bg-[#0F7B7D] text-white px-4 py-2 rounded-lg mt-10"
          onClick={onClose}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
