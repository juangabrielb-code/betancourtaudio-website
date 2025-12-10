export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-6 rounded-full bg-white/5 px-6 py-3 backdrop-blur-2xl border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
        <a
          href="#home"
          className="text-sm font-light tracking-tight text-white transition-colors hover:text-zinc-400"
        >
          Home
        </a>
        <a
          href="#services"
          className="text-sm font-light tracking-tight text-white transition-colors hover:text-zinc-400"
        >
          Services
        </a>
        <a
          href="#portfolio"
          className="text-sm font-light tracking-tight text-white transition-colors hover:text-zinc-400"
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className="text-sm font-light tracking-tight text-white transition-colors hover:text-zinc-400"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

