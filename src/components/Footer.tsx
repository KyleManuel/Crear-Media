"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const footerContent = {
  es: {
    emailLabel: "Email:",
    phoneLabel: "Telefono:",
    addressLabel: "Direccion:",
    addressLine1: "Baja California 255 Edificio B Oficina 602.",
    addressLine2: "Hipódromo Condesa,",
    addressLine3: "Ciudad de México. C.P.",
    addressLine4: "06140",
    buttonText: "Contáctanos",
    copyright: "© 2026 CrearMedia. Todos los derechos reservados",
  },
  en: {
    emailLabel: "Email:",
    phoneLabel: "Phone:",
    addressLabel: "Address:",
    addressLine1: "Baja California 255 Edificio B Oficina 602.",
    addressLine2: "Hipódromo Condesa,",
    addressLine3: "Mexico City, C.P.",
    addressLine4: "06140",
    buttonText: "Contact Us",
    copyright: "© 2026 CrearMedia. All Rights Reserved",
  },
};

export default function Footer() {
  const pathname = usePathname() || "/";
  const lang = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
  const txt = footerContent[lang];
  const consultingHref = lang === "en" ? "/en/consulting" : "/consulting";

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

            <div className="mt-8 space-y-2 text-[17px] leading-[1.2] text-white">
              <p>
                {txt.emailLabel}{" "}
                <a
                  href="mailto:comercial@crearmedia.com"
                  className="hover:text-[#376e2c] hover:opacity-80 hover:underline hover:underline-offset-4"
                >
                  comercial@crearmedia.com
                </a>
              </p>
              <p>{txt.phoneLabel} +52 55-11070674</p>
              <p>{txt.addressLabel} {txt.addressLine1}</p>
              <p>{txt.addressLine2}</p>
              <p>{txt.addressLine3}</p>
              <p>{txt.addressLine4}</p>
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
              href={consultingHref}
              className="mt-8 rounded-full bg-[#5cbb4a] px-12 py-3 text-[18px] font-semibold text-white transition hover:bg-[#376e2c]"
            >
              {txt.buttonText}
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-white pt-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className='[font-family:"agenda-medium",helvetica,arial,sans-serif]
              text-[17px] leading-[1.6] text-white'>{txt.copyright}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-[16px] text-white">
              <a
                href="https://www.linkedin.com/in/alejandroperezmolina/"
                className="hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/channel/UCnghI0JwEmFSKXOwhRHsGvg"
                className="hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/crear_media?igsh=MzZraHBtYjJhMWx2"
                className="hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/crearmediamx"
                className="hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}