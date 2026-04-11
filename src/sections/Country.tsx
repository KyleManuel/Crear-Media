import Image from "next/image";
import { countries } from "@/data/home";

export default function CountrySection() {
    return (
        <div className="grid items-center gap-10 lg:grid-cols-3 w-full px-32 py-12">
            {countries.map((item) => (
            <div key={item.title} className="flex items-center justify-center gap-3">
                <Image
                src={item.image}
                alt={item.title}
                width={260}
                height={80}
                className="h-[68px] w-auto"
                />
                <span className="text-[32px] font-bold leading-none text-[#555]">
                {item.text}
                </span>
            </div>
            ))}
        </div>
    )
}