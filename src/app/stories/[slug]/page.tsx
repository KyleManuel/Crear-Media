import { notFound } from "next/navigation";
import StoriesHero from "@/components/stories/Hero";
import StoriesResults from "@/components/stories/Results";
import StoriesChallenges from "@/components/stories/Challenges";
import { stories } from "@/data/stories";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = stories.find((item) => item.id === slug);

  if (!story) {
    return {
      title: "Success Story Not Found",
    };
  }

  return {
    title: story.id,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const story = stories.find((item) => item.id === slug);

  if (!story) {
    notFound();
  }

  return ( 
    <div className="mx-auto max-w-[1240px] bg-white">
      <StoriesHero
        title={story.title}
        hero={story.hero}
        video={story.video}
      />
      <StoriesResults items={story.results} />
      <StoriesChallenges items={story.challenges} />

      <section className="mx-auto px-20 py-16">
        <div className="mx-auto border-y border-[#8a8a8a] px-12 py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-[720px]">
              <h2 className="text-[32px] font-bold leading-[1.3] text-[#7a7a7a]">
                At CrearMedia, we believe that true learning occurs when knowledge
                feels alive.
              </h2>

              <p className="mt-6 text-[18px] leading-[1.6] text-[#8a8a8a]">
                With projects like ADO, we show that training is not just teaching:
                it is activating cultures, empowering teams and opening futures.
              </p>

              <p className="mt-10 text-[18px] font-bold leading-[1.5] text-[#7a7a7a]">
                Ready to take your training to a new level?
              </p>
            </div>

            <div className="flex justify-start lg:justify-end">
              <a
                href="#contact"
                className="rounded-full bg-[#5cbb4a] px-10 py-4 text-[18px] font-semibold text-white"
              >
                Request consulting
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
  
}