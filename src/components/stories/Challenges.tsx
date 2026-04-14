import Image from "next/image";


type ChallengesProps = {
  items: string[];
};

const headers = [ "The Challenge", "The Solution", "The Impact" ]
const headerColors = ["#5cbb4a", "#bb524a", "#4abbb3"]

export default function StoriesChallenges({ items }: ChallengesProps) {
  return (
    <section className="mx-auto px-20 py-8">
      <div className="px-12 py-14">
        <div className="mb-6 ml-10 flex items-center gap-2">
        <Image
            src="/icons/green-star.svg"
            alt=""
            width={24}
            height={24}
            className="h-auto w-6"
        />
          <h2 className="text-[24px] font-bold leading-none text-[#4a4a4a]">
            Form, connect and transform
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {items.map((item, index) => (
            <div key={headers[index]}>
              <h3 className="text-[18px] font-bold leading-[1.2] text-[#7a7a7a]">
                {headers[index]}
              </h3>
              <div
                className="mt-4 h-[3px] w-[40px]"
                style={{ backgroundColor: headerColors[index]} }
              />
              <p className="whitespace-pre-line text-[17px] leading-[1.55] text-[#7a7a7a]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}