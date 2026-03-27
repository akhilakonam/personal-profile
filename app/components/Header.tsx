"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";

const links = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/hobbies", label: "Hobbies" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/resume", label: "Resume" },
];

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="w-full border-b border-black/[.08] bg-white dark:border-white/[.08] dark:bg-black">
        <div className="flex w-full items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
              className="cursor-pointer text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M3 5H19M3 11H19M3 17H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <Link
              href="/"
              className="text-base font-semibold text-black dark:text-zinc-50 ml-8"
            >
              My Profile
            </Link>
          </div>
          <nav className="flex items-center gap-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-1.5 rounded-xl text-base text-zinc-600 transition-all hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50 hover:bg-[linear-gradient(135deg,#b449bacc_0%,transparent_50%,#63ad77cc_100%)]"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
