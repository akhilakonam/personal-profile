export default function Footer() {
  return (
    <footer className="w-full border-t border-black/[.08] bg-white dark:border-white/[.08] dark:bg-black">
      <div className="flex w-full items-center justify-between px-6 py-4">
        <p className="text-sm text-zinc-400">
          &copy; {new Date().getFullYear()} My Profile
        </p>
        <p className="text-sm text-zinc-400">Built with Next.js</p>
      </div>
    </footer>
  );
}
