import { notFound } from "next/navigation";
import StoriesHero from "@/components/stories/Hero";
import StoriesResults from "@/components/stories/Results";
import StoriesChallenges from "@/components/stories/Challenges";
import StoriesFooter from "@/components/stories/Footer";
import { stories } from "@/data/stories";

export function generateStaticParams() {

  return stories.map((story) => ({

    slug: story.id,

  }));

}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = stories.find((item) => item.id === slug);

  if (!story) {
    return {
      title: "404",
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
      <StoriesChallenges 
        heading={story.challengeHeader} 
        column={story.challengeColumn} 
        items={story.challenges} 
      />
      <StoriesFooter
        heading={story.footerHeader}
        footer={story.footer}
        button={story.buttonName}
      />

    </div>
  );
  
}