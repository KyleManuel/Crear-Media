import Image from "next/image";

export default function AboutUsSection() {
    return (
        <section className="grid items-center gap-12 mx-42 px-16 py-10 lg:grid-cols-[0.9fr_1.1fr] rounded-[32px] border border-[#e8e8e8] bg-white shadow-[0_0_10px_5px_rgb(103_103_103_/_0.52)]">
            <div className="flex justify-center">
                <Image
                    src="/logos/logo_crear-media.svg"
                    alt="CrearMedia logo"
                    className="h-auto max-w-full"
                    width={500}
                    height={180}
                    priority
                />
            </div>

            <div className="max-w-[720px]">
            <p className="mb-8">
                <span className="inline-flex items-center gap-2 text-[28px] font-semibold text-[#4a4a4a]">
                We Are
                <span className="text-[#5cbb4a]">CrearMedia</span>
                <Image
                    src="/green-star.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="h-auto w-6"
                />
                </span>
            </p>

            <h2 className="mb-6 text-[23px] font-light leading-tight text-[#4d4d4d]">
                We design intelligent learning experiences
            </h2>

            <div className="space-y-2 text-[17px] leading-8 text-[#808080]">
                <p>
                At CrearMedia, we believe learning should feel like a living
                experience that flows, connects, and transforms.
                </p>

                <p>
                We deeply understand the challenges of each organization, and
                from there we build unique solutions centered on the user and
                designed to be applied, not just understood.
                </p>

                <p>
                We combine strategy, technology, storytelling, and instructional
                design to create experiences that feel natural, useful, and
                memorable.
                </p>

                <p>
                We are strategic partners at every stage of the process. We
                think alongside you. We design with intention.
                </p>
            </div>
            </div>
        </section>
    )
}