export default function DaoPage() {
  const metrics = [
    { label: "Treasury", value: "$125,000" },
    { label: "Proposals", value: "18" },
    { label: "Active Votes", value: "3" },
    { label: "Token Holders", value: "1,247" },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
          AIDAG DAO
        </h1>
        <p className="text-sm text-white/60 mt-1">
          Fully autonomous governance managed by SoulwareAI on BSC.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-white/10 bg-black/40 p-4"
          >
            <p className="text-xs text-white/50">{m.label}</p>
            <p className="text-lg font-semibold mt-1">{m.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 space-y-3">
        <p className="text-xs uppercase tracking-[0.18em] text-white/50">
          Governance Engine
        </p>
        <h2 className="text-lg font-semibold">
          SoulwareAI evaluates, scores, and executes proposals.
        </h2>
        <p className="text-sm text-white/70">
          All proposals are ingested by SoulwareAI, evaluated based on predefined
          rules, and executed on-chain if quorum and conditions are met. No
          manual multisig, no off-chain discretion.
        </p>
      </div>
    </section>
  );
}
