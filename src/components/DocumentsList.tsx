import { client } from "@/lib/sanity";
import DocumentListTemplate from "./DocumentsListTemplate";

export const revalidate = 1;


async function fetchDocuments() {
  const query = `
    *[_type == "documents"]{
      title,
      description,
      image{
        asset->{
          _id,
          url
        }
      },
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
      `
  ;
  const documents = client.fetch(query);
  return documents;
}

async function fetchCategories() {
  const query = `
    * [_type == 'category'] {
        title
      }
  `;
  const categories = client.fetch(query);
  return categories;
}

async function DocumentsList() {
  const documents = await fetchDocuments();
  const categories = await fetchCategories();
  return <DocumentListTemplate documents={documents} categories={categories} />;
}

export default DocumentsList;
