const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "REST APIs", "GraphQL"] },
  { category: "Tools", items: ["Git", "Docker", "VS Code", "Figma"] },
];

export default function Skills() {
  return (
    <div className="flex flex-col flex-1 bg-white font-sans dark:bg-black">
      <main className="mx-auto w-full max-w-3xl flex flex-col gap-10 py-32 px-16">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50">
          Skills
        </h1>
        <div className="flex flex-col gap-8">
          {skills.map(({ category, items }) => (
            <div key={category}>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-400">
                {category}
              </h2>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-black/[.08] px-4 py-1.5 text-sm font-medium text-zinc-700 dark:border-white/[.145] dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
