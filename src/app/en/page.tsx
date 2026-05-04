import { langTxt, stats, features, stories, testimonials, brands } from "@/data/en/home";

import HeroVideoSection, { CEOVideo } from "@/sections/HeroVideo";
import AboutUsSection from "@/sections/AboutUs";
import CountrySection from "@/sections/Country";
import StatsSection from "@/sections/Statistics";
import FeaturesSection, { ListFeatures } from "@/sections/Features"
import StoriesSection, { ListStories } from "@/sections/Stories"
import TestimonialSection from "@/sections/Testimonials";
import BrandMarquee from "@/sections/Marquees";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center py-16 bg-white sm:items-start">
        <HeroVideoSection langTxt={langTxt} />

        <AboutUsSection langTxt={langTxt} />

        <CountrySection />

        <StatsSection stats={stats} />

        <FeaturesSection langTxt={langTxt} />

        <ListFeatures features={features} />

        <StoriesSection langTxt={langTxt} />

        <ListStories stories={stories} />

        <TestimonialSection testimonials={testimonials} />
        
        <BrandMarquee brands={brands} langTxt={langTxt} />

        <CEOVideo langTxt={langTxt} />

      </main>
    </div>
  );
}
