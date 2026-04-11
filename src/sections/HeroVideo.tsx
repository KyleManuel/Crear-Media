export default function HeroVideoSection() {
  return (
      <section className="px-32">
        <video controls>
          <source src="/video-crear-media.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex w-full justify-center py-8">
            <button className="rounded-[20px] bg-[#5cbb4a] px-5 py-2 text-lg font-medium uppercase tracking-wide text-white transition hover:opacity-90">
            Click and Try It
            </button>
        </div>
      </section>
  )
}

export function CEOVideo() {
  return (
      <section className="w-full px-32 py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8 text-center">
            <h2 className="text-[28px] font-bold leading-[1.2] text-[#4d4d4d]">
              Learning is not memorizing.
            </h2>
            <h2 className="text-[28px] font-bold leading-[1.2] text-[#4d4d4d]">
              It is feeling, connecting, transforming.
            </h2>
          </div>

          <div className="overflow-hidden rounded-[12px]">
            <video className="w-full" controls poster="/video-poster.jpg">
              <source src="/video_CEO-Inteligencia-Artificial-CrearMedia-1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
  )
}