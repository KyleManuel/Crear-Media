import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white">
      <div className="mx-auto max-w-[1800px] px-6 pt-8 pb-6">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <Image
              src="/logos/logo_crear-media-icon.svg"
              alt="CrearMedia"
              width={84}
              height={84}
              className="h-auto w-[84px]"
            />

            <div className="mt-8 space-y-2 text-[18px] leading-[1.6] text-white">
              <p>Email: comercial@crearmedia.com</p>
              <p>Phone: +52 55-11070674</p>
              <p>Address: Baja California 255 Edificio B Oficina 602.</p>
              <p>Hipódromo Condesa,</p>
              <p>Mexico City, C.P.</p>
              <p>06140</p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <Image
              src="/logos/logo_message.svg"
              alt=""
              width={86}
              height={86}
              className="h-auto w-[86px]"
            />

            <Link
              href="#contact"
              className="mt-8 rounded-full bg-[#5cbb4a] px-12 py-3 text-[18px] font-semibold text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-white pt-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-[16px] text-white">
              © 2026 CrearMedia. All Rights Reserved
            </p>

            <div className="flex flex-wrap items-center gap-6 text-[16px] text-white">
              <a href="#" className="hover:opacity-80">LinkedIn</a>
              <a href="#" className="hover:opacity-80">YouTube</a>
              <a href="#" className="hover:opacity-80">Instagram</a>
              <a href="#" className="hover:opacity-80">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}