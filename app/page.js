import Link from "next/link";

export const metadata = {
  title: "Homepage Demo Variants",
  description:
    "Review three homepage variants side by side for client demos.",
};

export default function Home() {
  const variants = [
    {
      href: "/v1",
      label: "V1",
      branch: "main",
      summary: "Baseline version for the original homepage direction.",
    },
    {
      href: "/v2",
      label: "V2",
      branch: "feature/homepage-professional-refresh",
      summary: "Professional refresh direction with cleaner enterprise presentation.",
    },
    {
      href: "/v3",
      label: "V3",
      branch: "feature/homepage-reference-refresh",
      summary: "Reference refresh direction with the latest styling exploration.",
    },
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.12),_transparent_32%),linear-gradient(180deg,_#f8fbff_0%,_#eef4ff_100%)] px-4 py-12 text-slate-950 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
            Techvisr Demo Hub
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            Homepage variants ready for client review
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Open any version below to compare the three design directions without switching Git branches during the demo.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {variants.map((variant) => (
            <Link
              key={variant.href}
              href={variant.href}
              className="rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                {variant.label}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                {variant.branch}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{variant.summary}</p>
              <span className="mt-8 inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
                Open {variant.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
