export default function PresalePage() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            AIDAG Presale
          </h1>
          <p className="text-sm text-white/60 mt-1">
            Fully autonomous presale managed by SoulwareAI on BSC.
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs uppercase text-white/40">Treasury Value</p>
          <p className="text-lg font-semibold text-cyan-400">$125,000</p>
        </div>
      </div>

      <div className="grid md:grid-cols-[2fr,1.5fr] gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 md:p-6 space-y-4 shadow-[0_0_40px_rgba(15,23,42,0.8)]">
          <h2 className="text-lg font-medium flex items-center justify-between">
            <span>Buy AIDAG</span>
            <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/40">
              Live Presale
            </span>
          </h2>

          <div className="space-y-2">
            <label className="text-xs text-white/60">You pay (BNB)</label>
            <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-black/40 px-3 py-2">
              <input
                type="number"
                placeholder="0.1"
                className="bg-transparent flex-1 outline-none text-sm"
              />
              <span className="text-xs text-white/60">BNB</span>
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-white/60">You receive</p>
            <p className="text-sm font-medium">0 AIDAG</p>
          </div>

          <button className="w-full mt-2 inline-flex items-center justify-center rounded-xl bg-cyan-500 text-black font-medium text-sm py-2.5 hover:bg-cyan-400 transition shadow-[0_0_25px_rgba(34,211,238,0.7)]">
            Cüzdan Bağla
          </button>

          <div className="grid grid-cols-2 gap-3 text-xs mt-3">
            <div className="rounded-xl border border-white/10 bg-black/40 p-3">
              <p className="text-white/50">Founder</p>
              <p className="text-base font-semibold">%60</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 p-3">
              <p className="text-white/50">Likidite</p>
              <p className="text-base font-semibold">%40</p>
            </div>
          </div>

          <div className="pt-2 text-xs text-white/50">
            <a href="#" className="text-cyan-400 hover:underline">
              Token Kontratı
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-5 md:p-6 space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
            SoulwareAI Autonomous Manager
          </p>
          <h2 className="text-lg font-semibold">
            Fully automated presale & treasury execution
          </h2>
          <p className="text-sm text-white/70">
            SoulwareAI evaluates all presale-related proposals, monitors
            participation, and executes allocation and liquidity provisioning
            directly on BSC, without human intervention.
          </p>
          <ul className="text-xs text-white/65 space-y-1.5">
            <li>• On-chain execution, no multisig dependency</li>
            <li>• Transparent rules, immutable governance logic</li>
            <li>• Real-time monitoring of presale and DAO metrics</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
