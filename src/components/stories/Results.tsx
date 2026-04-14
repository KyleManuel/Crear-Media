import Image from "next/image";

type ResultItem = {
  title: string;
  description: string;
};

type ResultsProps = {
  items: ResultItem[];
};

const icons = [
  "/icons/icon_person-2.svg",
  "/icons/icon_object-05.svg",
  "/icons/icon_object-07.svg",
  "/icons/icon_object-18.svg",
];


export default function StoriesResults({ items }: ResultsProps) {
  return (
    <section className="mx-auto px-12 py-4">
      <div className="bg-[#f3f3f3] px-30 py-10">
        <div className="grid gap-10 lg:grid-cols-4">
          {items.map((item, index) => (
            <div key={item.title}>
              <Image
                src={icons[index]}
                alt=""
                width={52}
                height={52}
                className="h-auto w-[52px]"
              />

              <h3 className="mt-4 text-[20px] font-bold leading-[1.25] text-[#7a7a7a]">
                {item.title}
              </h3>

              <p className="mt-4 text-[17px] leading-[1.55] text-[#7a7a7a]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}