"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  es: [
    { label: "INICIO", href: "/" },
    { label: "QUIÉNES SOMOS", href: "/#about" },
    { label: "SERVICIOS", href: "/#services" },
    { label: "CASOS", href: "/#stories" },
    { label: "AGENDAR UNA CITA ESTRATÉGICA", href: "/consulting" },
  ],
  en: [
    { label: "HOME", href: "/en" },
    { label: "ABOUT US", href: "/en/#about" },
    { label: "SERVICES", href: "/en/#services" },
    { label: "CASE STUDIES", href: "/en/#stories" },
    { label: "BOOK A STRATEGIC CALL", href: "/en/consulting" },
  ],
};

export default function Header() {
  const pathname = usePathname() || "/";
  const lang = pathname === "/en" || pathname.startsWith("/en/") 
  || pathname === "/ai"
  ? "en" : "es";

  const items = navItems[lang];
  const homeHref = items[0].href;
  const mainNavItems = items.slice(0, 4);
  const ctaItem = items[4];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f3f3f3]/95 backdrop-blur">
      <div className="mx-auto flex max-w-[2000px] items-center justify-between px-5 py-2">
        <Link href={homeHref} className="shrink-0">
          <Image
            src="/logos/logo_crear-media-full.svg"
            alt="CrearMedia"
            width={340}
            height={80}
            className="h-auto w-[340px]"
            priority
          />
        </Link>

        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-8 lg:flex">
            {mainNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[20px] leading-none text-[#2f2f2f] transition hover:text-[#5cbb4a]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href={ctaItem.href}
            className="rounded-full bg-[#5cbb4a] px-6 py-2 text-[20px] leading-none text-white shadow-[0_4px_10px_rgba(0,0,0,0.18)] transition hover:bg-[#376e2c]"
          >
            {ctaItem.label}
          </Link>
        </div>
      </div>
    </header>
  );
}