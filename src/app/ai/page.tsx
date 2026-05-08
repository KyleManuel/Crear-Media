import Image from "next/image";
import Link from "next/link";
import StoriesFooter from "@/components/stories/Footer";

export default function RequestConsultingPage() {
  return (
    <>
    <section className="bg-white px-32 py-18">
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
            <Image
                src="/icons/green-star.svg"
                alt=""
                width={64}
                height={64}
                className="h-auto w-[64px]"
            />
          <h1 className="text-[32px] font-bold leading-[1.15] text-[#4d4d4d]">
            A partnership to transform learning with intelligence
          </h1>

          <div className="mt-6 space-y-6 text-[17px] leading-[1.5] text-[#808080]">
            <p><strong>
                In a world where information is no longer enough, intelligence becomes the most valuable resource.
            </strong></p>
            <p>
                CrearMedia and SceneSnap have joined forces to usher in a new era of learning: predictive, dynamic, and deeply human. SceneSnap, an artificial intelligence developed to understand and optimize learning behavior, is now exclusively integrated into the training systems we develop for leading companies.
            </p>
            <p><strong>
                Because when knowledge becomes conscious of itself, change is no longer possible: it is inevitable.
            </strong></p>
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
                <source src="/videos/video_scenesnap.mp4" type="video/mp4" />
            </video>
        </div>
        <div className="flex justify-center">
            <Link
                href="/en/consulting"
                className="mt-8 mx-auto inline-block rounded-full bg-[#5cbb4a] px-12 py-3 text-[18px] font-semibold text-white
                transition hover:bg-[#376e2c]"
            >
                Try SceneSnap in action
            </Link>
        </div>
        </div>
      </div>
    </section>

    <section className="bg-white w-full px-8">
        <div className="mx-auto grid max-w-[1800px] font-heading items-start gap-6 lg:grid-cols-[0.87fr_1.13fr]">
            <div className="rounded-tr-[90px] bg-[#f3f3f3] px-20 py-16">
                <div className="mb-10 flex">
                    <h1 className="text-[56px] leading-none font-semibold text-black">AI</h1>
                    <Image
                        src="/icons/green-star.svg"
                        alt=""
                        width={40}
                        height={40}
                        className="mt-2 h-auto w-[40px]"
                    />
                </div>

                <p className="max-w-[760px] text-[18px] font-semibold leading-[1.45] text-[#7a7a7a]">
                    “SceneSnap combines artificial intelligence, immersive learning, and personalization to deliver adaptive experiences. By integrating AI tools, data analytics, and a learning management system, it creates inclusive environments focused on meaningful learning, aligned with current trends in multimodal education and more flexible and adaptive models.”
                </p>

                <div className="mt-12 flex items-center gap-6">
                    <Image
                    src="/alejandro-fundador-crear-media-director-ia-scenesnap.webp"
                    alt="Alejandro Perez"
                    width={130}
                    height={130}
                    className="h-[130px] w-[130px] rounded-full object-cover"
                    />

                    <div>
                    <p className="text-[17px] font-bold leading-[1.2] text-[#7a7a7a]">
                        Alejandro Perez
                    </p>
                    <p className="mt-2 text-[17px] leading-[1.35] text-[#8a8a8a]">
                        Founder &amp; Director
                        <br />
                        of CrearMedia
                    </p>
                    </div>
                </div>

                <Link
                    href="https://www.linkedin.com/in/alejandroperezmolina/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex rounded-[14px] bg-[#5cbb4a] px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-[#376e2c]"
                >
                    View profile on LinkedIn
                </Link>
            </div>

            <div className="flex flex-col w-full max-w-[80%] px-8 pt-20 gap-[5px]">
                <div>
                    <Image
                    src="/icons/green-star.svg"
                    alt=""
                    width={48}
                    height={48}
                    className="h-auto w-[48px]"
                    />
                </div>

                <h2 className="text-5xl font-bold leading-[1.5] text-[#161616]">
                    What is SceneSnap?
                </h2>

                <p className="text-[18px] leading-[1.5] text-[#808080]">
                    <strong>Intelligence that learns from learning</strong>
                </p>

                <div className="space-y-5 text-[17px] leading-[1.6] text-[#808080]">
                    <p>
                    SceneSnap is an artificial intelligence platform integrated into advanced training projects. Through real-time analysis, it identifies patterns, bottlenecks, and unique opportunities to improve each user&apos;s experience.
                    </p>

                    <p>
                    It does not just display metrics: it interprets the experience, predicts behaviors, and suggests precise improvements without manual intervention.
                    </p>

                    <p>
                    This technology turns each course into a living system that evolves with its users. Thanks to our collaboration with SceneSnap, we are pioneers in offering this level of personalization and optimization in Latin America and across the rest of the continent.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-white w-full px-8">
        <div className="mx-auto grid max-w-[2000px] gap-16 bg-[#363636] px-40 py-16 text-white lg:grid-cols-[1fr_0.95fr]">
            <div className="max-w-[760px]">
            <h2 className="text-[20px] font-bold leading-[1.15]">
                We design systems that fit each mind
            </h2>

            <div className="mt-12 space-y-5 text-[16px] leading-[1.75] text-white/95">
                <p>
                Most training systems follow a standard scheme: same content, same pace, same routes;{" "}
                <strong>at CrearMedia we think differently</strong>
                </p>

                <p>
                Thanks to SceneSnap&apos;s adaptive intelligence, our courses are molded in real time to the user&apos;s experience and needs.
                </p>

                <p>
                Every interaction with the content generates information that feeds the AI ​​and transforms the learning path. This way, no one gets left behind. No one wastes time on what they already know.
                </p>

                <p>
                This isn&apos;t superficial personalization. It&apos;s a cognitive architecture that reacts to actual behavior, not generic profiles.
                </p>
            </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start">
            <h3 className="max-w-[720px] text-3xl font-bold leading-[1.08] text-white">
                CrearMedia doesn&apos;t create courses. It designs learning systems with live intelligence.
            </h3>
            </div>
        </div>
    </section>
    <section className="bg-white">
    <StoriesFooter
        heading="Are you ready to transform the way you teach?"
        footer={[
            {
            description:
                "Discover how artificial intelligence can radically change the way your team learns, grows, and connects with knowledge.",
            },
            {
            boldDescription: "This technology is available today. And it's closer than you think.",
            },
        ]}
        button="Try SceneSnap in action"
    />
    </section>
    </>
  );
}