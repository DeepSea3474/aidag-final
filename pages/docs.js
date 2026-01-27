export default function DocsPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
          AIDAG Documentation
        </h1>
        <p className="text-sm text-white/60 mt-1">
          High-level overview of tokenomics, security, and roadmap.
        </p>
      </div>

      <div
        id="tokenomics"
        className="rounded-2xl border border-white/10 bg-black/40 p-5 md:p-6 space-y-3"
      >
        <h2 className="text-lg font-semibold">Tokenomics</h2>
        <p className="text-sm text-white/70">
          AIDAG is the governance and utility token of the AIDAG DAO. Supply,
          allocation, and vesting are fully transparent and enforced on-chain.
        </p>
        <ul className="text-xs text-white/65 space-y-1.5">
          <li>• %60 Founder (locked & vested)</li>
          <li>• %40 Liquidity & Treasury</li>
        </ul>
      </div>

      <div
        id="security"
        className="rounded-2xl border border-white/10 bg-black/40 p-5 md:p-6 space-y-3"
      >
        <h2 className="text-lg font-semibold">Security</h2>
        <p className="text-sm text-white/70">
          Smart contracts are immutable once deployed. SoulwareAI operates
          within strict, audited rulesets, with no hidden admin keys.
        </p>
      </div>

      <div
        id="roadmap"
        className="rounded-2xl border border-white/10 bg-black/40 p-5 md:p-6 space-y-3"
      >
        <h2 className="text-lg font-semibold">Roadmap</h2>
        <p className="text-sm text-white/70">
          Phase 1: Presale & DAO bootstrap. Phase 2: Treasury strategies. Phase
          3: Cross-chain expansion.
        </p>
      </div>

      <div
        id="faq"
        className="rounded-2xl border border-white/10 bg-black/40 p-5 md:p-6 space-y-3"
      >
        <h2 className="text-lg font-semibold">FAQ</h2>
        <p className="text-sm text-white/70">
          AIDAG is designed as a fully autonomous, AI-managed DAO on BSC. All
          key actions are executed on-chain.
        </p>
      </div>
    </section>
  );
}

