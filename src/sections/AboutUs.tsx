import Image from "next/image";

type AboutUsProps = {
  langTxt: {
    AboutUs_heading: string;
    AboutUs_subHeading: string;
    AboutUs_paragraphOne: string;
    AboutUs_paragraphTwo: string;
    AboutUs_paragraphThree: string;
    AboutUs_paragraphFour: string;
  };
};

export default function AboutUsSection({ langTxt }: AboutUsProps) {
    return (
        <section id="about" className="grid items-center gap-12 mx-42 px-16 py-10 lg:grid-cols-[0.9fr_1.1fr] rounded-[32px] border border-[#e8e8e8] bg-white shadow-[0_0_10px_5px_rgb(103_103_103_/_0.52)]">
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
                { langTxt.AboutUs_heading }
                <span className="text-[#5cbb4a]">CrearMedia</span>
                <Image
                    src="/icons/green-star.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="h-auto w-6"
                />
                </span>
            </p>

            <h2 className="mb-6 text-[23px] font-light leading-tight text-[#4d4d4d]">
                { langTxt.AboutUs_subHeading }
            </h2>

            <div className="space-y-2 text-[17px] leading-8 text-[#808080]">
                <p> { langTxt.AboutUs_paragraphOne } </p>
                <p> { langTxt.AboutUs_paragraphTwo } </p>
                <p> { langTxt.AboutUs_paragraphThree } </p>
                <p> { langTxt.AboutUs_paragraphFour } </p>
            </div>
            </div>
        </section>
    )
}