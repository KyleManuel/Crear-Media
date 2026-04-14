import Image from "next/image";
import { stories } from "@/data/home";

export default function SuccessStories() {
    return (
        <section className="mx-auto max-w-[1100px] py-20">
            <div className="grid items-start gap-6 grid-cols-[0.3fr_1.7fr]">
            <div className="flex justify-center">
                <Image
                src="/icons/icon_person-2.svg"
                alt=""
                width={90}
                height={90}
                className="h-auto w-[90px]"
                />
            </div>
            <div>
                <h2 className="mb-6 text-[48px] font-bold leading-[1.05] text-[#5cbb4a] max-w-[550px]">
                Success stories that inspire and transform
                </h2>
                <div className="space-y-8 text-[18px] leading-[1.25] text-[#8a8a8a] max-w-[550px]">
                <p>
                    Explore how companies like yours have overcome challenges,
                    boosted its growth and achieved its objectives with
                    innovative learning strategies.
                </p>
                <p>
                    Discover real stories of organizations that have enhanced their
                    talent, optimized processes and generated a measurable impact
                    thanks to tailor-made solutions.
                </p>
                <p>Your company can also be the next success story.</p>
                <p className="font-semibold text-[#7a7a7a]">
                    Ready to transform learning into a growth engine?
                </p>
                </div>
            </div>
            </div>
        </section>
    )
}

export function ListStories() {
    return (
        <section id="stories" className="w-full pl-60 pr-50 py-16">
            <div className="mx-auto max-w-[1180px]">
            <div className="space-y-16">
                {stories.map((item) => (
                <div
                    key={item.title}
                    className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]"
                >
                    <div>
                    <h2 className="text-[24px] font-bold leading-[1.2] text-[#5cbb4a]">
                        {item.title}
                    </h2>
                    <div className="mt-6 space-y-6 text-[17px] leading-[1.5] text-[#808080]">
                        {item.description1 && <p>{item.description1}</p>}
                        {item.description2 && <p>{item.description2}</p>}
                        {item.description3 && <p>{item.description3}</p>}
                    </div>
                    <a
                        href={`stories/${item.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-block rounded-[16px] border-2 border-[#5cbb4a] px-6 py-3 text-[18px] font-medium text-[#5cbb4a] transition hover:bg-[#5cbb4a] hover:text-white"
                        >
                        {item.buttonText}
                    </a>
                    </div>
                    <div>
                    <Image
                        src={item.image}
                        alt={item.alt}
                        width={700}
                        height={420}
                        className="h-auto w-full shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
                    />
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>
    )
}