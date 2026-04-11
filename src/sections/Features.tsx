import Image from "next/image";
import { features } from "@/data/home";

export default function FeaturesSection() {
    return (
        <section className="mx-auto max-w-[1100px] py-20">
            <div className="grid items-start gap-6 grid-cols-[0.6fr_1.4fr]">
            <div className="flex justify-center justify-self-end">
                <Image
                src="/icon_person-2.svg"
                alt=""
                width={90}
                height={90}
                className="h-auto w-[90px]"
                />
            </div>
            <div>
                <h2 className="mb-6 text-[48px] font-bold leading-[1.05] text-[#5cbb4a] max-w-[335px]">
                Our Products and Services
                </h2>
                <div className="space-y-8 text-[18px] leading-[1.5] text-[#8a8a8a] max-w-[600px]">
                <p>
                    We drive the growth of your company with {" "}
                    <span className="font-semibold text-[#7a7a7a]">
                    innovative training, immersive experiences and solutions adapted to your industry, through:
                    </span>
                </p>
                </div>
            </div>
            </div>
        </section>
    )
}

export function ListFeatures() {
    return (
        <section
            className="bg-cover bg-center bg-no-repeat w-full px-6 pb-16"
            style={{ backgroundImage: "url('/background_image-21.png')" }}
        >
            <div className="mx-auto max-w-[1150px]">
            <div className="grid gap-8 grid-cols-[max-content_max-content] justify-center">
                {features.map((item, index) => (
                <div
                    key={item.title}
                    className={`flex rounded-[32px] max-w-[500px] bg-white px-10 py-5 shadow-[0_8px_22px_rgba(0,0,0,0.16)]
                    ${ index % 2 === 0 ? "justify-end" : "justify-start" }`}
                >
                    <div className="grid items-center gap-6 grid-cols-[120px_1fr]">
                    <div className="flex justify-center">
                        <Image
                        src={item.icon}
                        alt=""
                        width={100}
                        height={100}
                        className="h-auto w-[100px]"
                        />
                    </div>
                    <div>
                        <h3 className="text-[20px] font-medium text-[#5cbb4a]">
                        {item.title}
                        </h3>
                        <p className="mt-2 text-[18px] leading-[1.35] text-[#7a7a7a]">
                        {item.text}
                        </p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>
    )
}