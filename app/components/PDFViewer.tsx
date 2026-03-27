"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PDFViewer({ file }: { file: string }) {
  const [numPages, setNumPages] = useState<number>(0);

  return (
    <div className="flex flex-col items-center w-full">
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={
          <p className="text-zinc-400 py-16">Loading resume...</p>
        }
        error={
          <p className="text-zinc-400 py-16">Failed to load resume.</p>
        }
      >
        {Array.from({ length: numPages }, (_, i) => (
          <div key={i} className="mb-4 shadow-md">
            <Page
              pageNumber={i + 1}
              renderTextLayer
              renderAnnotationLayer
            />
          </div>
        ))}
      </Document>
    </div>
  );
}
