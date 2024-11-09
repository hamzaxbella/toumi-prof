import React from "react";
import Image from "next/image";

interface CardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imageUrl: any;
  name: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, name, description }) => {
  return name == "FPT" ? (
    <div className="bg-white relative overflow-hidden rounded-xl p-4 text-black flex flex-col items-center shadow-lg sm:p-6 md:p-8">
      <Image
        src={imageUrl}
        alt={name}
        width={1000}
        height={1000}
        className="absolute bottom-0 z-[0] left-0 w-full h-full object-cover"
      />
      <h3 className="z-10 text-lg sm:text-xl font-bold">{name}</h3>
      <p className="z-10 text-gray-600 mt-2 max-w-[75ch] text-center text-sm sm:text-base md:text-lg">
        {description}
      </p>
    </div>
  ) : (
    <div className="bg-white relative overflow-hidden rounded-xl p-4 text-black flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6 shadow-lg sm:p-6 md:p-8">
      <Image
        src={imageUrl}
        alt={name}
        width={1000}
        height={1000}
        className="rounded-xl w-48 h-48 object-cover sm:w-60 sm:h-60"
      />
      <div className="text-center sm:text-left">
        <h3 className="z-10 text-lg sm:text-xl font-bold">{name}</h3>
        <p className="z-10 text-gray-600 mt-2 text-sm sm:text-base md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
