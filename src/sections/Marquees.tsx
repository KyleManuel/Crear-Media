import Image from "next/image";
import { brands } from "@/data/home";

export default function BrandMarquee() {
  return (
      <section className="w-full py-17
        relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background_image-24.jpg')" }}
      >
        <div className="mx-auto max-w-[1700px]">
          <div className="relative bg-white pt-5 pb-16">
            <div className="mb-10 overflow-hidden">
              <div className="flex w-max animate-marquee items-center gap-16">
                {[...brands, ...brands].map((logo, index) => (
                  <div key={index} className="shrink-0">
                    <Image
                      src={logo}
                      alt=""
                      width={180}
                      height={80}
                      className="h-[70px] w-auto object-contain grayscale select-none pointer-events-none"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <p className="max-w-[700px] text-[20px] font-semibold leading-[1.5] text-[#7a7a7a]">
                These brands have already transformed learning into a competitive
                advantage
              </p>
            </div>
            <button className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#5cbb4a] px-8 py-2 text-[18px] font-semibold text-white">
              Want to be part? &gt;
            </button>
          </div>
        </div>
      </section>
  )
}