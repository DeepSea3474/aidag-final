import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative max-w-6xl mx-auto px-4">
        <BackgroundGlow />
        <Header />
        <main className="py-6 md:py-10 relative z-10">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -top-32 left-10 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute top-10 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
    </div>
  );
}

function Header() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/presale", label: "Presale" },
    { href: "/dao", label: "DAO" },
    { href: "/docs", label: "Docs" },
  ];

  return (
    <header className="flex items-center justify-between py-4 md:py-6 border-b border-white/10 relative z-10">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 shadow-[0_0_30px_rgba(56,189,248,0.9)]" />
        <div className="flex flex-col">
          <span className="text-sm uppercase tracking-[0.22em] text-white/40">
            SoulwareAI
          </span>
          <span className="text-lg font-semibold tracking-wide">
            AIDAGCHAIN
          </span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="hover:text-cyan-400 transition"
          >
            {l.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <button className="text-xs px-3 py-1 rounded-full border border-white/20 text-white/70 hover:border-cyan-400 hover:text-cyan-400 transition">
          EN
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="py-6 border-t border-white/10 mt-10 text-xs text-white/40 flex flex-col md:flex-row items-center justify-between gap-2 relative z-10">
      <span>© {new Date().getFullYear()} AIDAG DAO · SoulwareAI Managed</span>
      <span>Built on BSC · Autonomous Treasury</span>
    </footer>
  );
}
