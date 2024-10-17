import React from 'react';

type AvatarStackProps = {
  images: string[]; // Array of image URLs
};

const AvatarStack: React.FC<AvatarStackProps> = ({ images }) => {
  return (
    <div className="flex justify-center items-center  w-full">
      {/* Wrapping avatars inside a flex container to center them */}
      <div className="relative flex">
        {images.map((image, index) => (
          <div
            key={index}
            className="rounded-full border-[2px] border-white overflow-hidden"
            style={{
              zIndex: images.length - index,
              marginLeft: index === 0 ? 0 : '-10px', // Overlap each avatar slightly
              width: "40px", // Adjust for size of each avatar
              height: "40px",
            }}
          >
            <img
              src={image}
              alt={`Avatar ${index}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarStack;
