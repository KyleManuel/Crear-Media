type HeroVideoSectionProps = {
  langTxt: {
    HeroVideo_vidTag: string;
    HeroVideo_btnTxt: string;
    CEOVideo_title: string;
    CEOVideo_subtitle: string;
  };
};

export default function HeroVideoSection({ langTxt }: HeroVideoSectionProps) {
  return (
      <section className="px-32">
        <video controls>
          <source src="/videos/video_crear-media.mp4" type="video/mp4" />
          { langTxt.HeroVideo_vidTag }
        </video>
        <div className="flex w-full justify-center py-8">
            <button className="rounded-[20px] bg-[#5cbb4a] px-5 py-2 text-lg font-medium uppercase tracking-wide text-white transition hover:opacity-90">
              { langTxt.HeroVideo_btnTxt }
            </button>
        </div>
      </section>
  )
}

export function CEOVideo({ langTxt }: HeroVideoSectionProps) {
  return (
      <section className="w-full px-32 py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8 text-center">
            <h2 className="text-[28px] font-bold leading-[1.2] text-[#4d4d4d]">
              { langTxt.CEOVideo_title }
            </h2>
            <h2 className="text-[28px] font-bold leading-[1.2] text-[#4d4d4d]">
              { langTxt.CEOVideo_subtitle }
            </h2>
          </div>

          <div className="overflow-hidden rounded-[12px]">
            <video className="w-full" controls poster="/video-poster.jpg">
              <source src="/videos/video_CEO-Inteligencia-Artificial.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
  )
}