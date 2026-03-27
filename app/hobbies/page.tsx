const hobbies = [
  { name: "Photography", description: "Capturing moments and exploring visual storytelling." },
  { name: "Reading", description: "From technical books to fiction — always learning something new." },
  { name: "Hiking", description: "Getting outdoors and exploring nature trails." },
  { name: "Open Source", description: "Contributing to projects and building things in public." },
];

export default function Hobbies() {
  return (
    <div className="flex flex-col flex-1 bg-white font-sans dark:bg-black">
      <main className="mx-auto w-full max-w-3xl flex flex-col gap-10 py-32 px-16">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50">
          Hobbies
        </h1>
        <div className="flex flex-col gap-6">
          {hobbies.map(({ name, description }) => (
            <div key={name} className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold text-black dark:text-zinc-50">{name}</h2>
              <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
