import PDFViewer from "../components/PDFViewer";

export default function Resume() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-100 dark:bg-zinc-900">
      <div className="flex justify-end px-10 pt-8">
        <a
          href="/resume.pdf"
          download="Resume_Akhila_Konam.pdf"
          className="flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-300"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 1v9m0 0L5 7m3 3 3-3M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Download
        </a>
      </div>
      <div className="flex justify-center py-6 px-4">
        <PDFViewer file="/resume.pdf" />
      </div>
    </div>
  );
}
