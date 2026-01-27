export default function HomePage() {
  const sections = [
    { label: "Statistics", href: "/dao" },
    { label: "SoulwareAI", href: "/dao" },
    { label: "Tokenomics", href: "/docs#tokenomics" },
    { label: "Security", href: "/docs#security" },
    { label: "Roadmap", href: "/docs#roadmap" },
    { label: "FAQ", href: "/docs#faq" },
  ];

  return (
    <section className="space-y-10">
      <div className="grid md:grid-cols-[1.7fr,1.3fr] gap-8 items-center">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">
            SoulwareAI Autonomous DAO
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Fully autonomous AIDAG DAO
            <span className="block text-cyan-300">
              executing on BSC without multisig.
            </span>
          </h1>
          <p className="text-sm text-white/70">
            AIDAGCHAIN is a fully on-chain, AI-managed DAO. SoulwareAI ingests
            proposals, scores them, and executes decisions directly on BSC,
            removing human bottlenecks and off-chain discretion.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/presale"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500 text-black font-medium text-sm px-4 py-2.5 hover:bg-cyan-400 transition shadow-[0_0_25px_rgba(34,211,238,0.7)]"
            >
              Join Presale
            </a>
            <a
              href="/dao"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 text-sm px-4 py-2.5 text-white/80 hover:border-cyan-400 hover:text-cyan-300 transition"
            >
              View DAO Dashboard
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 md:p-6 space-y-4 shadow-[0_0_40px_rgba(15,23,42,0.8)]">
          <p className="text-xs uppercase tracking-[0.18em] text-white/50">
            Treasury Snapshot
          </p>
          <p className="text-2xl font-semibold text-cyan-400">$125,000</p>
          <p className="text-xs text-white/60">
            Managed by SoulwareAI · On-chain execution · BSC mainnet
          </p>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl border border-white/10 bg-black/40 p-3">
              <p className="text-white/50">Founder Allocation</p>
              <p className="text-base font-semibold">%60</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 p-3">
              <p className="text-white/50">Liquidity</p>
              <p className="text-base font-semibold">%40</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 text-xs">
        {sections.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white/70 hover:border-cyan-400 hover:text-cyan-300 transition text-center"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
