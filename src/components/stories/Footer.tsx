type FooterItem = {
    description?: string;
    bold?: string;
    boldDescription?: string;
};

type FooterProps = {
  heading: string;
  footer: FooterItem[];
  button: string;
  en?: boolean
};

export default function StoriesFooter({ heading, footer, button, en }: FooterProps ) {
  return (
    <section className="mx-auto px-20 py-16">
        <div className="mx-auto border-y border-[#8a8a8a] px-12 py-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
                <div className="max-w-[720px]">
                    <h2 className="text-[24px] font-bold leading-[1.3] text-[#7a7a7a]">
                        {heading}
                    </h2>
                    <div className="mt-6 space-y-6 text-[17px] leading-[1.5] text-[#808080]">
                    {footer.map((item, index) => {
                        if (item.boldDescription) {
                        return (
                            <p key={index} className="font-bold text-[#7a7a7a]">
                            {item.boldDescription}
                            </p>
                        );
                        }
                        if (item.description && item.bold) {
                        const parts = item.description.split(item.bold);

                        return (
                            <p key={index}>
                            {parts[0]}
                            <strong>{item.bold}</strong>
                            {parts[1]}
                            </p>
                        );
                        }

                        return <p key={index}>{item.description}</p>;
                    })}
                    </div>
                </div>

                <div className="flex justify-start lg:justify-end">
                    <a
                    href={ en == true ? "/en/consulting" : "/consulting" }
                    className="rounded-full bg-[#5cbb4a] px-10 py-4 text-[18px] font-semibold text-white"
                    >
                    { button }
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
}