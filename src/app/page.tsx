import RevealButton from "@/components/RevealButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-sand px-6">
      <div className="flex w-full max-w-xl flex-col items-center gap-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
          Workflow test
        </span>

        <h1 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
          Test Website v2
        </h1>

        <p className="max-w-md text-base leading-relaxed text-ink/70 sm:text-lg">
          Deze website is gemaakt met Claude, opgeslagen op GitHub en gehost
          via Vercel.
        </p>

        <RevealButton />
      </div>
    </main>
  );
}
