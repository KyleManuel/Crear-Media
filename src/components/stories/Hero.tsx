type HeroItem = {
  description: string;
  bold?: string;
};

type HeroProps = {
  title: string;
  hero: HeroItem[];
  video: string;
};

export default function StoriesHero({ title, hero, video }: HeroProps ) {
  return (
    <section className="px-32 py-18">
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <h1 className="text-[32px] font-bold leading-[1.15] text-[#347a2a]">
            {title}
          </h1>

          <div className="mt-6 space-y-6 text-[17px] leading-[1.5] text-[#808080]">
            {hero.map((item, index) => (
              <p key={index}>
                {item.description}
                {item.bold && <strong> {item.bold}</strong>}
              </p>
            ))}
          </div>
        </div>

        <div>
          <div className="overflow-hidden rounded-[12px]">
            <video
              className="h-auto w-full"
              controls
              playsInline
              autoPlay
              muted
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}