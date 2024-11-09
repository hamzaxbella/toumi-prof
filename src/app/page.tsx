// pages/index.js
import Head from "next/head";
import CardSection from "@/components/CardsSection";
import Navbar from "@/components/Navbar";
import DocumentsList from "@/components/DocumentsList";
import Footer from "@/components/Footer";
export const revalidate = 1;
import DocumentsFetcher from "@/components/DocumentsFitcher";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-500 to-cyan-600">
      <Head>
        <title>ToCoursMi</title>
      </Head>

      <Navbar />

      <main className="text-white">
        <DocumentsFetcher />
        <CardSection />
      </main>
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="mb-8 text-4xl font-bold text-center">ToCoursMi</h1>
        <DocumentsList />
      </div>
      <Footer />
    </div>
  );
}
