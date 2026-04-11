import Image from "next/image";
import { stats } from "@/data/home";

export default function StatsSection() {
    return (
        <section className="bg-[#171717] w-full px-36 py-12">
            <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((item) => (
                <div
                    key={item.title}
                    className="flex flex-col items-center text-center"
                >
                    <Image
                    src={item.icon}
                    alt=""
                    width={90}
                    height={90}
                    className="h-[90px] w-auto"
                    />
                    <p className="mt-6 max-w-[120px] text-[17px] leading-[1.35] text-white">
                    {item.title}
                    </p>
                </div>
                ))}
            </div>
            </div>
        </section>
    )
}