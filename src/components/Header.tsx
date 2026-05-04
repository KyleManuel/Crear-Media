"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/#about" },
  { label: "SERVICES", href: "/#services" },
  { label: "CASE STUDIES", href: "/#stories" },
];

export default function Header() {
  const [activeHref, setActiveHref] = useState("/");
  const pathname = usePathname();

  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");

  const consultingHref = isEnglish ? "/en/consulting" : "/consulting";

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f3f3f3]/95 backdrop-blur">
      <div className="mx-auto flex max-w-[2000px] items-center justify-between px-5 py-2">
        <Link href={isEnglish ? "/en" : "/"} className="shrink-0">
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
            {navItems.map((item) => {
              const href = isEnglish
                ? item.href === "/"
                  ? "/en"
                  : `/en${item.href}`
                : item.href;
              return (
                <Link
                  key={item.label}
                  href={href}
                  className="text-[20px] leading-none text-[#2f2f2f] transition hover:text-[#5cbb4a]"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href={consultingHref}
            className="rounded-full bg-[#5cbb4a] px-6 py-2 text-[20px] leading-none text-white shadow-[0_4px_10px_rgba(0,0,0,0.18)] transition hover:bg-[#376e2c]"
          >
            BOOK A STRATEGIC CALL
          </Link>
        </div>
      </div>
    </header>
  );
}