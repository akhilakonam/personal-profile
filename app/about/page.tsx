export default function About() {
  return (
    <div className="flex flex-col flex-1 bg-white font-sans dark:bg-black">
      <main className="mx-auto w-full max-w-3xl flex flex-col gap-8 py-32 px-16">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50">
          About Me
        </h1>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          I’m a frontend engineer with experience building large-scale, user-facing applications across edtech and enterprise platforms.
        </p>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Currently at Adobe, I work on AI-driven frontend systems and learner analytics, focusing on performance, scalability, and reusable architecture.
        </p>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          I enjoy solving complex product problems, collaborating closely with design, and building systems that are easy to scale and maintain.
        </p>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Outside of work, I explore creativity through art and crochet—bringing the same attention to detail and structure into everything I build.
        </p>
      </main>
    </div>
  );
}
