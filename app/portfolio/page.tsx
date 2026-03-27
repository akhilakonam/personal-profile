const projects = [
  {
    title: "Project One",
    description: "A web app built with Next.js and TypeScript.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "#",
  },
  {
    title: "Project Two",
    description: "A REST API service with authentication and rate limiting.",
    tags: ["Node.js", "PostgreSQL", "Docker"],
    href: "#",
  },
  {
    title: "Project Three",
    description: "An open source tool for automating repetitive dev tasks.",
    tags: ["Python", "CLI", "Open Source"],
    href: "#",
  },
];

export default function Portfolio() {
  return (
    <div className="flex flex-col flex-1 bg-white font-sans dark:bg-black">
      <main className="mx-auto w-full max-w-3xl flex flex-col gap-10 py-32 px-16">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50">
          Portfolio
        </h1>
        <div className="flex flex-col gap-8">
          {projects.map(({ title, description, tags, href }) => (
            <a
              key={title}
              href={href}
              className="group flex flex-col gap-3 rounded-2xl border border-black/[.08] p-6 transition-colors hover:border-black/[.16] hover:bg-zinc-50 dark:border-white/[.08] dark:hover:border-white/[.16] dark:hover:bg-zinc-900"
            >
              <h2 className="text-lg font-semibold text-black group-hover:underline dark:text-zinc-50">
                {title}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
