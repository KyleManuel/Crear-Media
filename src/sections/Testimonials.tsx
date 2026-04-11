import Image from "next/image";
import { testimonials } from "@/data/home";

export default function TestimonialSection() {
    return (
        <section className="w-full px-50 py-16">
          <div className="mx-auto space-y-10">
            {testimonials.map((group, index) => {
              const featured = group[0];
              const smallItems = group.slice(1);

              return (
                <div key={index} className="space-y-4">
                  {featured && (
                    <div className="grid gap-8">
                      <div>
                        <div className="flex items-start gap-4">
                          <Image
                            src="/icon_quote.svg"
                            alt=""
                            width={56}
                            height={56}
                            className="h-auto w-[56px]"
                          />
                        </div>
                        <p className="text-[30px] leading-[1.4] text-[#808080] px-8">
                          {featured.quote}
                        </p>

                        <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
                          <div>
                            <div className="mb-3 text-[28px] leading-none text-[#5cbb4a]">…..</div>
                            <p className="text-[18px] font-bold text-[#4a4a4a]">
                              {featured.author}
                            </p>
                            <p className="mt-1 text-[16px] text-[#808080]">
                              {featured.role}
                            </p>
                          </div>

                          <div className="flex justify-start lg:justify-end">
                            <Image
                              src={featured.logo}
                              alt=""
                              width={260}
                              height={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {smallItems.length > 0 && (
                    <div className="grid gap-16 lg:grid-cols-2">
                      {smallItems.map((item) => (
                        <div key={item.author}>
                          <div>
                            <div className="flex items-start gap-4">
                              <Image
                                src="/icon_quote.svg"
                                alt=""
                                width={56}
                                height={56}
                                className="h-auto w-[56px]"
                              />
                            </div>
                            <p className="text-[16px] leading-[1.4] text-[#7a7a7a] px-6">
                              {item.quote}
                            </p>
                          </div>

                          <div className="flex items-end justify-between gap-4">
                            <div>
                              <div className="mb-3 text-[24px] leading-none text-[#5cbb4a]">
                                …..
                              </div>
                              <p className="text-[18px] font-bold text-[#4a4a4a]">
                                {item.author}
                              </p>
                              <p className="mt-1 text-[16px] text-[#7a7a7a]">
                                {item.role}
                              </p>
                            </div>

                            <Image
                              src={item.logo}
                              alt=""
                              width={140}
                              height={55}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
    )
}