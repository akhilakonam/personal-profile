"use client";

import Link from "next/link";
import Image from "next/image";
import homeIcon from "@/assets/icons/home.svg";
import aboutIcon from "@/assets/icons/about.svg";
import skillsIcon from "@/assets/icons/skills.svg";
import hobbiesIcon from "@/assets/icons/hobbies.svg";
import portfolioIcon from "@/assets/icons/portfolio.svg";
import resumeIcon from "@/assets/icons/resume.svg";

const links = [
  { href: "/", label: "Home", icon: homeIcon },
  { href: "/about", label: "About", icon: aboutIcon },
  { href: "/skills", label: "Skills", icon: skillsIcon },
  { href: "/hobbies", label: "Hobbies", icon: hobbiesIcon },
  { href: "/portfolio", label: "Portfolio", icon: portfolioIcon },
  { href: "/resume", label: "Resume", icon: resumeIcon },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-zinc-950 border-r border-black/[.08] dark:border-white/[.08] transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/[.08] dark:border-white/[.08]">
          <span className="text-base font-semibold text-black dark:text-zinc-50">
            Navigation
          </span>
          <button
            onClick={onClose}
            aria-label="Close sidebar"
            className="cursor-pointer text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-1 p-4">
          {links.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-base text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-black dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
            >
              <Image
                src={icon}
                alt={label}
                width={18}
                height={18}
                className="invert dark:invert-0"
              />
              {label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
