"use client";
import React, { useState } from "react";
import DocumentCard from "./DocumentCard";

interface DocumentAsset {
  _ref: string;
  _type: string;
  url: string;
}

interface Document {
  title: string;
  description: string;
  category: {
    title: string;
  };
  document: {
    _type: string;
    asset: DocumentAsset;
    url: string;
  };
  image: {
    asset: DocumentAsset;
    _type: string;
    url: string;
  };
}

interface Category {
  title: string;
}

interface DocumentListTemplateProps {
  documents: Document[];
  categories: Category[];
}

const DocumentListTemplate: React.FC<DocumentListTemplateProps> = ({
  documents,
  categories = [],
}) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [visibleDocumentCount, setVisibleDocumentCount] = useState<number>(6); // Control how many documents are visible

  // Handles the toggling of filter buttons
  const handleFilterButtonClick = (selectedCategory: string) => {
    if (selectedCategory === "All") {
      // If "All" is selected, clear all filters
      setSelectedFilters([]);
    } else if (selectedFilters.includes(selectedCategory)) {
      // Remove the category from filters if it's already selected
      setSelectedFilters(selectedFilters.filter((filter) => filter !== selectedCategory));
    } else {
      // Add the category to selected filters
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  // Filter the documents based on selected categories or show all if none are selected
  const filteredDocuments = selectedFilters.length
    ? documents.filter((doc) => selectedFilters.includes(doc.category.title))
    : documents;

  // Handle loading more documents
  const handleViewMoreDocuments = () => {
    setVisibleDocumentCount(visibleDocumentCount + 6); // Load 6 more documents when the button is clicked
  };

  return (
    <div id="cours" className="w-full">
      <h2 className="mb-4 text-center text-2xl font-semibold">Filter by Category</h2>

      {/* Category filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {/* "All" button */}
        <button
          onClick={() => handleFilterButtonClick("All")}
          className={`px-3 py-1 rounded ${
            selectedFilters.length === 0 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>

        {/* Display sorted categories */}
        {categories
          .slice() // Create a shallow copy of the array to avoid mutating the original
          .sort((a, b) => a.title.localeCompare(b.title)) // Sort categories by title
          .map((category) => (
            <button
              key={category.title}
              onClick={() => handleFilterButtonClick(category.title)}
              className={`px-3 py-1 rounded ${
                selectedFilters.includes(category.title) ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {category.title}
            </button>
          ))}
      </div>

      {/* Document Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {filteredDocuments.length > 0 ? (
          filteredDocuments.slice(0, visibleDocumentCount).map((doc) => (
            <DocumentCard
              key={doc.title}
              title={doc.title}
              description={doc.description}
              category={doc.category.title} // Using category title
              downloadUrl={doc.document.asset.url}
              image={doc.image.asset.url}
            />
          ))
        ) : (
          <p>No documents found for the selected categories.</p>
        )}
      </div>

      {/* View More button for loading more documents */}
      {visibleDocumentCount < filteredDocuments.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleViewMoreDocuments}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
          >
            View More Documents
          </button></div>
      )}
    </div>
  );
};

export default DocumentListTemplate;