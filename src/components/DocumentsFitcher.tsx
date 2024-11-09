// components/DocumentsFetcher.tsx (Server Component)
import { client } from "@/lib/sanity";
import HeroSection from "./HeroSection"; // Import the client component

interface Document {
  id: string;
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

async function fetchDocuments() {
  const query = `
    *[_type == "documents"]{
      title,
      description,
      document{
        asset->{
          _id,
          url
        }
      },
      category->{
        title
      }
    }
  `;
  const documents: Document[] = await client.fetch(query);
  return documents;
}

async function DocumentsFetcher() {
  const documents = await fetchDocuments();

  // Pass the documents to the client component (HeroSection)
  return <HeroSection documents={documents} />;
}

export default DocumentsFetcher;
