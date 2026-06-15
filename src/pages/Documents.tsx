import React from "react";
import Navbar from "../components/Navbar";

const documents = [
  {
    id: "resume",
    title: "Resume",
    src: "/pranav/pranav-patil-resume.pdf",
    filename: "pranav-patil-resume.pdf",
  },
  {
    id: "paper",
    title: "Research Paper",
    src: "/pranav/pranav-paper.pdf",
    filename: "pranav-paper.pdf",
  },
];

const Documents = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 pt-20 pb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-6">Documents</h1>
          <p className="text-gray-300 mb-6">Here you can view and download important documents. To add your paper, place the PDF at <span className="font-mono">/public/pranav/pranav-paper.pdf</span>.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc) => (
              <div key={doc.id} className="bg-gray-800 rounded-lg shadow p-4">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-semibold text-white">{doc.title}</h2>
                  <a
                    href={doc.src}
                    className="text-sm text-primary underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open
                  </a>
                </div>
                <div className="w-full h-64 border border-gray-700 rounded overflow-hidden">
                  <iframe
                    src={doc.src}
                    className="w-full h-full"
                    frameBorder="0"
                    title={doc.title}
                  />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <a
                    href={doc.src}
                    download={doc.filename}
                    className="bg-primary text-white px-4 py-2 rounded"
                  >
                    Download
                  </a>
                  {doc.id === 'paper' && (
                    <span className="text-sm text-gray-400">If the paper doesn't appear, upload it to <strong>/public/pranav</strong>.</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Documents;
