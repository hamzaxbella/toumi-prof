// components/HeroSection.tsx (Client Component)
"use client"; // Marking as a client-side component

import React, { useState } from "react";

interface Document {
  title: string;
  description: string;
  document: {
    asset: {
      url: string;
    };
  };
  category: {
    title: string;
  };
}

interface HeroSectionProps {
  documents: Document[]; // Accept documents as a prop from the server component
}

function HeroSection({ documents }: HeroSectionProps) {
  const [searchTerm, setSearchTerm] = useState<string>(""); // State for search input
  const [filteredDocuments, setFilteredDocuments] = useState<Document[]>([]); // State to store the filtered documents

  // Handle input change and filter documents
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    // Filter documents only if there's input
    if (searchValue) {
      const filtered = documents.filter(
        (doc) =>
          doc.title.toLowerCase().includes(searchValue) ||
          doc.document.asset.url.toLowerCase().includes(searchValue)
      );
      setFilteredDocuments(filtered);
    } else {
      setFilteredDocuments([]); // Clear the filtered results if search is empty
    }
  };

  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold">Learn And Enjoy</h1>
      <p className="mt-3 text-xl">
        Learn with us all course materials and documents...
      </p>

      <div className="mt-8 relative">
        <div className=" absolute left-1/2 z-30 shadow-lg -translate-x-1/2 w-2/3 lg:w-1/3 bg-white rounded-xl">
          {/* Search input */}
          <input
            type="text"
            className="w-full p-3 rounded-xl text-black focus:outline-none"
            placeholder="Search documents..."
            value={searchTerm}
            onChange={handleSearchChange} // Update search term
          />
          {/* Display filtered documents only if there's a search term */}
          {searchTerm && filteredDocuments.length > 0 && (
            <div className="mt-5 w-full">
              <ul className="mt-4 space-y-3">
                {filteredDocuments.map((doc) => (
                  <li
                    key={doc.title}
                    className="flex justify-between items-center  p-3 border-t border-gray-300"
                  >
                    <span className="text-lg text-black">{doc.title}</span>
                    {/* Download Button */}
                    <a
                      href={doc.document.asset.url}
                      download
                      className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700"
                    >
                      Download
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* No matching documents found */}
          {searchTerm && filteredDocuments.length === 0 && (
            <p className="my-5 text-lg text-gray-500">No matching documents found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
