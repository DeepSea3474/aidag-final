import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>AIDAGCHAIN</span>
      </div>
      <ul className="navbar-menu">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/presale">Presale</Link></li>
        <li><Link href="/dao">DAO</Link></li>
        <li><Link href="/docs">Docs</Link></li>
        <li className="dropdown">
          <span>Content ▾</span>
          <ul className="dropdown-menu">
            <li><Link href="/statistics">Statistics</Link></li>
            <li><Link href="/soulwareai">SoulwareAI</Link></li>
            <li><Link href="/tokenomics">Tokenomics</Link></li>
            <li><Link href="/security">Security</Link></li>
            <li><Link href="/roadmap">Roadmap</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </li>
        <li><Link href="/en">EN 🇬🇧</Link></li>
      </ul>
    </nav>
  );
}

