import { Link } from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "#home", label: "home" },
  { href: "#projects", label: "projects" },
  { href: "#about", label: "about" },
  { href: "#connect", label: "connect" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const isLocal =
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1" ||
        window.location.hostname.startsWith("192.168."));

    const url = isLocal
      ? "https://api.counterapi.dev/v1/nikunjsaini07-portfolio/hits/"
      : "https://api.counterapi.dev/v1/nikunjsaini07-portfolio/hits/up";

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (data && typeof data.count === "number") {
          setVisitorCount(data.count);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch visitor count:", err);
      });
  }, []);

  useEffect(() => {
    const sections = ["home", "projects", "about", "connect"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-transparent text-foreground">
      <div className="mx-auto max-w-[1400px] p-4 md:p-6 lg:p-8">
        <div className="comic-border rounded-2xl bg-background backdrop-blur-lg overflow-hidden flex flex-col">
          {/* Header — glassmorphism */}
          <header className="flex items-center justify-between border-b border-white/10 px-4 sm:px-6 py-3 sm:py-4 relative z-50"
            style={{
              background: "oklch(0.08 0.01 250 / 0.25)",
              backdropFilter: "blur(40px) saturate(200%)",
              WebkitBackdropFilter: "blur(40px) saturate(200%)",
              boxShadow: "0 1px 0 0 rgba(255,255,255,0.12) inset, 0 -1px 0 0 rgba(255,255,255,0.05) inset, 0 4px 30px 0 rgba(0,0,0,0.25)",
            }}
          >
            <a href="#home" className="flex items-center gap-2 sm:gap-3">
              <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-primary comic-border-sm grid place-items-center neon-glow">
                <span className="font-display text-primary-foreground text-base sm:text-lg">N</span>
              </div>
              <span className="font-display text-base sm:text-lg tracking-wider">Nikunj Saini</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 font-mono text-sm">
              {nav.map((n) => {
                const isActive = activeSection === n.href.substring(1);
                return (
                  <a
                    key={n.href}
                    href={n.href}
                    className={`py-1.5 px-3 hover:text-sky-400 transition-colors uppercase tracking-wider font-semibold ${isActive ? "text-sky-400" : "text-foreground"
                      }`}
                  >
                    {n.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Resume Button */}
            <div className="hidden md:block">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="comic-border-sm rounded-full bg-primary text-primary-foreground px-4 py-2 font-mono text-xs uppercase tracking-widest hover:bg-sky-500 hover:text-white transition-colors"
              >
                Resume
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2 comic-border-sm rounded-lg bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center cursor-pointer"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </header>

          {/* Mobile Navigation Drawer */}
          {menuOpen && (
            <div
              className="md:hidden border-b border-white/10 text-foreground font-mono text-sm animate-float-in z-40"
              style={{
                background: "oklch(0.06 0.01 250 / 0.35)",
                backdropFilter: "blur(40px) saturate(200%)",
                WebkitBackdropFilter: "blur(40px) saturate(200%)",
                boxShadow: "0 1px 0 0 rgba(255,255,255,0.10) inset, 0 4px 30px 0 rgba(0,0,0,0.3)",
              }}
            >
              <nav className="flex flex-col p-6 gap-4">
                {nav.map((n) => {
                  const isActive = activeSection === n.href.substring(1);
                  return (
                    <a
                      key={n.href}
                      href={n.href}
                      onClick={() => setMenuOpen(false)}
                      className={`py-2 px-3 hover:text-sky-400 transition-colors border-b border-ink/10 last:border-0 uppercase tracking-wider font-semibold ${isActive ? "text-sky-400" : "text-foreground"
                        }`}
                    >
                      {n.label}
                    </a>
                  );
                })}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 text-center comic-border rounded-full bg-primary text-primary-foreground py-3 font-mono text-xs uppercase tracking-widest hover:bg-sky-500 hover:text-white transition-colors block"
                >
                  Resume
                </a>
              </nav>
            </div>
          )}

          {/* Children Pages */}
          <div className="flex-grow">
            {children}
          </div>

          {/* Footer */}
          <footer className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-2 border-t border-white/10 px-4 sm:px-6 py-3 sm:py-4 font-mono text-xs text-center sm:text-left"
            style={{
              background: "oklch(0.08 0.01 250 / 0.25)",
              backdropFilter: "blur(40px) saturate(200%)",
              WebkitBackdropFilter: "blur(40px) saturate(200%)",
            }}
          >
            <span>© 2026 Nikunj Saini · With great power… comes great coding</span>
            {visitorCount !== null ? (
              <div className="flex items-center gap-1.5 px-3 py-1 comic-border-sm bg-black/40 rounded-full font-mono text-[10px] sm:text-xs text-sky-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
                </span>
                <span>spider-tracer pings: {visitorCount.toLocaleString()}</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 px-3 py-1 comic-border-sm bg-black/40 rounded-full font-mono text-[10px] sm:text-xs text-muted-foreground/60">
                <span className="h-2 w-2 rounded-full bg-neutral-600"></span>
                <span>spider-tracer pings: ...</span>
              </div>
            )}
            <span className="opacity-70">Built in Saharanpur · Swinging on Go</span>
          </footer>
        </div>
      </div>
    </main>
  );
}
