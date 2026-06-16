import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#playground", label: "Playground" },
  { href: "#contact", label: "Contact" },
];

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          onClick={(e) => handleClick(e, "#top")}
          className="font-['Satoshi',sans-serif] tracking-tight"
          style={{ fontSize: "18px", fontWeight: 700 }}
        >
          ◍ Joshua Naim
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="relative font-['Space_Mono',monospace] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[color:var(--accent)] after:transition-all hover:after:w-full"
                style={{ fontSize: "12px" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={(e) => handleClick(e, "#contact")}
          className="rounded-full bg-foreground px-4 py-2 font-['Space_Mono',monospace] uppercase tracking-[0.12em] text-[color:var(--background)] transition-transform hover:scale-105"
          style={{ fontSize: "12px" }}
        >
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}
