// components/DocumentCard.tsx
import React from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

interface DocumentCardProps {
  title: string;
  description: string;
  category: string;
  downloadUrl: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
}

const DocumentCard: React.FC<DocumentCardProps> = ({
  title,
  description,
  category,
  downloadUrl,
  image
}) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-[250px] relative items-center gap-4 p-6 bg-white rounded-lg shadow-md">
      <div>
        <Image
          src={urlFor(image).url()}
          className="bg-gray-400 w-full lg:w-[200px] rounded-xl"
          width={150}
          height={150}
          alt="card-image"
        />
      </div>
      <span className="absolute right-5 top-2 inline-block px-2 py-1 mt-2 text-xs font-semibold text-white bg-blue-500 rounded">
        {category}
      </span>
      <div className="flex flex-col gap-6">
        <div className="flex-1 ">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm max-w-[70ch] text-gray-600">{description}</p>
        </div>
        <a
          href={downloadUrl}
          className="px-4 py-2 w-fit text-white bg-green-500 rounded hover:bg-green-600"
          download
        >
          Télécharger
        </a>
      </div>
    </div>
  );
};

export default DocumentCard;
