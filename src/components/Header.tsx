import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "HOME", href: "#" },
  { label: "ABOUT US", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "CASE STUDIES", href: "#stories" },
];

export default function Header() {
  return (
    <header className="w-full bg-[#f3f3f3]">
      <div className="mx-auto flex max-w-[2000px] items-center justify-between px-5 py-2">
        <Link href="/" className="shrink-0">
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
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[20px] leading-none transition ${
                  index === 0
                    ? "text-[#5cbb4a]"
                    : "text-[#2f2f2f] hover:text-[#5cbb4a]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#contact"
            className="rounded-full bg-[#5cbb4a] px-6 py-2 text-[20px] leading-none text-white shadow-[0_4px_10px_rgba(0,0,0,0.18)] transition hover:opacity-90"
          >
            BOOK A STRATEGIC CALL
          </Link>
        </div>
      </div>
    </header>
  );
}