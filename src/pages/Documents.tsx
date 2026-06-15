import React from "react";
import Navbar from "../components/Navbar";

const Documents = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 pt-20 pb-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Documents — Under construction</h1>
          <p className="text-gray-300 mb-6">This section is being prepared. To add your paper, place the PDF at <strong>/public/pranav/pranav-paper.pdf</strong> and I'll display it here.</p>
          <img src="/pranav/placeholder.jpg" alt="Under construction" className="mx-auto rounded shadow max-w-sm" />
        </div>
      </div>
    </>
  );
};

export default Documents;
