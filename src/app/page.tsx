import Image from "next/image";

export default function Home() {

  const countries = [
    {
      title: "Mexico",
      image: "/flag-mexico-crear-media.svg",
      text: "México",
    },
    {
      title: "Colombia",
      image: "/flag-colombia-crear-media.svg",
      text: "Colombia",
    },
    {
      title: "Guatemala",
      image: "/flag-guatemala-crear-media.svg",
      text: "Guatemala",
    },
  ];

  const stats = [
    {
      icon: "/icon_object-17.svg",
      title: "25 years of experience",
    },
    {
      icon: "/icon_globe.svg",
      title: "+200 clients across Latin America",
    },
    {
      icon: "/icon_person.svg",
      title: "3,000,000 corporate end users",
    },
    {
      icon: "/icon_object-20.svg",
      title: "+2,000 courses developed",
    },
  ];

  const features = [
    {
      icon: "/icon_ia.svg",
      title: "Artificial Intelligence",
      text: "for adaptive training and effective thinking",
    },
    {
      icon: "/icon_object-05.svg",
      title: "Didactic content",
      text: "with high interactivity and practical approach",
    },
    {
      icon: "/icon_object-07.svg",
      title: "Gamification",
      text: "with interactive dynamics and motivating progress",
    },
    {
      icon: "/icon_object-08.svg",
      title: "Augmented reality",
      text: "and immersive technology in training",
    },
  ];

  const stories = [
    {
      title: "Liverpool: Regulatory courses prepared to take care of what matters",
      description1:
        "Safety is not just a protocol, it is a commitment.",
      description2:
        "CrearMedia developed an accessible and visual training experience, where each Liverpool collaborator learns to act with confidence and responsibility in critical moments.",
      buttonText: "Find out more",
      image: "/story_liverpool.webp",
      alt: "Liverpool preview",
    },
    {
      title: "ADO: Immersive Training for a New Era",
      description1:
        "ADO sought to renew its training strategy and bring it closer to its teams more effectively.",
      description2:
        "With augmented reality technology and instructional design, the learning experience became more dynamic, practical, and memorable.",
      description3:
        "Learning that hooks from the first click.",
      buttonText: "Find out more",
      image: "/story_ado.webp",
      alt: "ADO preview",
    },
    {
      title: "Dollarcity: Clear training for real results",
      description1:
        "Dollarcity needed to train its store teams in key procedures quickly and effectively.",
      description2:
        "CrearMedia developed an interactive course with clear visual language, sequential steps and real examples that connect directly with the daily life of the collaborator.",
      description3:
        "A precise, actionable and visually intuitive training solution.",
      buttonText: "Find out more",
      image: "/story_dollarcity.webp",
      alt: "ADO preview",
    },
    {
      title: "GEPP: Master the complex with clarity",
      description1:
        "Connecting with a machine is not easy. To train their teams in the use of specialized machinery, GEPP needed more than manuals.",
      description2:
        "CrearMedia designed a visual, animated and human experience that turns a technical process into a clear, accessible and engaging narrative.",
      description3:
        "Each component is explained with precision, combining animations, real scenarios and interactive guides, allowing collaborators to master the team... with confidence and without complications.",
      buttonText: "Find out more",
      image: "/story_gepp.webp",
      alt: "ADO preview",
    },
  ];

  const testimonials = [
    {
      quote: "CrearMedia was key to transforming our training processes: they designed simple interactive courses aligned with our reality. They accompanied us at all times, understanding what we needed without imposing solutions, but creating with us from closeness and strategy.",
      author: "Marta Lopez",
      role: "Learning Manager",
      logo: "/logo_dollarcity.svg",
    },
    {
      quote: "At Mobility ADO we had the challenge of transmitting our values to operational profiles that are difficult to achieve in person. CrearMedia designed an augmented reality training strategy with great acceptance and outstanding results: more than 6,000 employees participate with a profit of more than 90%. They have been a key and committed partner throughout the process.",
      author: "Veronica Delgadillo",
      role: "Content Head",
      logo: "/logo_ado.svg",
    },
    {
      quote: "CrearMedia understood our training methodology and transformed it into key instructional videos for trainers. His team integrated with us, providing creativity and technical experience. The results have been so positive that we presented the project to management and the Tec de Monterrey. Today they are strategic allies to strengthen our training.",
      author: "Jesus Martinez",
      role: "Human Talent",
      logo: "/logo_gepp.svg",
    },
    {
      quote: "Working with CrearMedia has been invaluable. We developed an international reference educational model to empower entrepreneurs and close digital gaps. As a coordinator with 18 years of experience, I highlight her commitment, quality and superior results than expected. If you are looking for a real change, I recommend them 100%.",
      author: "Eliana Silvero",
      role: "Digital Entrepreneurship Coordinator",
      logo: "/logo_adopem.svg",
    },
    {
      quote: "Thanks to CrearMedia we digitized and scaled our business impact methodology. We went from 457 to more than 6,000 companies served throughout the country, with an accessible, powerful solution with a vision of growth without borders.",
      author: "Jhon Fonseca",
      role: "Content Virtualization Leader",
      logo: "/logo_camara-bogota.svg",
    },
    {
      quote: "Alejandro's team stands out for its innovation, agility and focus on results. They design learning experiences that really develop skills, adapting to the context of each client with excellence and commitment.",
      author: "Ximena Duarte",
      role: "Human Talent",
      logo: "/logo_camara-cali.svg",
    },
  ];
  const groups = chunkArray(testimonials, 3);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-between py-16 bg-white sm:items-start">
        <section className="px-32">
          <video controls>
            <source src="/video-crear-media.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        <div className="flex w-full justify-center py-8">
          <button className="rounded-[20px] bg-[#5cbb4a] px-5 py-2 text-lg font-medium uppercase tracking-wide text-white transition hover:opacity-90">
            Click and Try It
          </button>
        </div>

        <section className="grid items-center gap-12 mx-42 px-16 py-10 lg:grid-cols-[0.9fr_1.1fr] rounded-[32px] border border-[#e8e8e8] bg-white shadow-[0_0_10px_5px_rgb(103_103_103_/_0.52)]">
          <div className="flex justify-center">
            <Image
              src="/logo_crear-media.svg"
              alt="CrearMedia logo"
              className="h-auto max-w-full"
              width={500}
              height={180}
              priority
            />
          </div>

          <div className="max-w-[720px]">
            <p className="mb-8">
              <span className="inline-flex items-center gap-2 text-[28px] font-semibold text-[#4a4a4a]">
                We Are
                <span className="text-[#5cbb4a]">CrearMedia</span>
                <Image
                  src="/green-star.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="h-auto w-6"
                />
              </span>
            </p>

            <h2 className="mb-6 text-[23px] font-light leading-tight text-[#4d4d4d]">
              We design intelligent learning experiences
            </h2>

            <div className="space-y-2 text-[17px] leading-8 text-[#808080]">
              <p>
                At CrearMedia, we believe learning should feel like a living
                experience that flows, connects, and transforms.
              </p>

              <p>
                We deeply understand the challenges of each organization, and
                from there we build unique solutions centered on the user and
                designed to be applied, not just understood.
              </p>

              <p>
                We combine strategy, technology, storytelling, and instructional
                design to create experiences that feel natural, useful, and
                memorable.
              </p>

              <p>
                We are strategic partners at every stage of the process. We
                think alongside you. We design with intention.
              </p>
            </div>
          </div>
        </section>

        <div className="grid items-center gap-10 lg:grid-cols-3 w-full px-32 py-12">
          {countries.map((item) => (
            <div key={item.title} className="flex items-center justify-center gap-3">
              <Image
                src={item.image}
                alt={item.title}
                width={260}
                height={80}
                className="h-[68px] w-auto"
              />
              <span className="text-[32px] font-bold leading-none text-[#555]">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <section className="bg-[#171717] w-full px-36 py-12">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center text-center"
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={90}
                    height={90}
                    className="h-[90px] w-auto"
                  />
                  <p className="mt-6 max-w-[120px] text-[17px] leading-[1.35] text-white">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1100px] py-20">
          <div className="grid items-start gap-6 grid-cols-[0.6fr_1.4fr]">
            <div className="flex justify-center justify-self-end">
              <Image
                src="/icon_person-2.svg"
                alt=""
                width={90}
                height={90}
                className="h-auto w-[90px]"
              />
            </div>
            <div>
              <h2 className="mb-6 text-[48px] font-bold leading-[1.05] text-[#5cbb4a] max-w-[335px]">
                Our Products and Services
              </h2>
              <div className="space-y-8 text-[18px] leading-[1.5] text-[#8a8a8a] max-w-[600px]">
                <p>
                  We drive the growth of your company with {" "}
                  <span className="font-semibold text-[#7a7a7a]">
                    innovative training, immersive experiences and solutions adapted to your industry, through:
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-cover bg-center bg-no-repeat w-full px-6 py-16"
          style={{ backgroundImage: "url('/background_image-21.png')" }}
        >
          <div className="mx-auto max-w-[1150px]">
            <div className="grid gap-8 grid-cols-2 grid-cols-[max-content_max-content] justify-center">
              {features.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex rounded-[32px] max-w-[500px] bg-white px-10 py-5 shadow-[0_8px_22px_rgba(0,0,0,0.16)]
                  ${ index % 2 === 0 ? "justify-end" : "justify-start" }`}
                >
                  <div className="grid items-center gap-6 grid-cols-[120px_1fr]">
                    <div className="flex justify-center">
                      <Image
                        src={item.icon}
                        alt=""
                        width={100}
                        height={100}
                        className="h-auto w-[100px]"
                      />
                    </div>
                    <div>
                      <h3 className="text-[20px] font-medium text-[#5cbb4a]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[18px] leading-[1.35] text-[#7a7a7a]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1100px] py-20">
          <div className="grid items-start gap-6 grid-cols-[0.3fr_1.7fr]">
            <div className="flex justify-center">
              <Image
                src="/icon_person-2.svg"
                alt=""
                width={90}
                height={90}
                className="h-auto w-[90px]"
              />
            </div>
            <div>
              <h2 className="mb-6 text-[48px] font-bold leading-[1.05] text-[#5cbb4a] max-w-[550px]">
                Success stories that inspire and transform
              </h2>
              <div className="space-y-8 text-[18px] leading-[1.25] text-[#8a8a8a] max-w-[550px]">
                <p>
                  Explore how companies like yours have overcome challenges,
                  boosted its growth and achieved its objectives with
                  innovative learning strategies.
                </p>
                <p>
                  Discover real stories of organizations that have enhanced their
                  talent, optimized processes and generated a measurable impact
                  thanks to tailor-made solutions.
                </p>
                <p>Your company can also be the next success story.</p>
                <p className="font-semibold text-[#7a7a7a]">
                    Ready to transform learning into a growth engine?
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full pl-60 pr-50 py-16">
          <div className="mx-auto max-w-[1180px]">
            <div className="space-y-16">
              {stories.map((item) => (
                <div
                  key={item.title}
                  className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]"
                >
                  <div>
                    <h2 className="text-[24px] font-bold leading-[1.2] text-[#5cbb4a]">
                      {item.title}
                    </h2>
                    <div className="mt-6 space-y-6 text-[17px] leading-[1.5] text-[#808080]">
                      <p>{item.description1}</p>
                      <p>{item.description2}</p>
                      <p>{item.description3}</p>
                    </div>
                    <button className="mt-8 rounded-[16px] border-2 border-[#5cbb4a] px-6 py-3 text-[18px] font-medium text-[#5cbb4a] transition hover:bg-[#5cbb4a] hover:text-white">
                      {item.buttonText}
                    </button>
                  </div>
                  <div>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={700}
                      height={420}
                      className="h-auto w-full shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full px-50 py-16">
          <div className="mx-auto space-y-10">
            {groups.map((group, index) => {
              const featured = group[0];
              const smallItems = group.slice(1);

              return (
                <div key={index} className="space-y-4">
                  {featured && (
                    <div className="grid gap-8">
                      <div>
                        <div className="flex items-start gap-4">
                          <Image
                            src="/icon_quote.svg"
                            alt=""
                            width={56}
                            height={56}
                            className="h-auto w-[56px]"
                          />
                        </div>
                        <p className="text-[30px] leading-[1.4] text-[#808080] px-8">
                          {featured.quote}
                        </p>

                        <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
                          <div>
                            <div className="mb-3 text-[28px] leading-none text-[#5cbb4a]">…..</div>
                            <p className="text-[18px] font-bold text-[#4a4a4a]">
                              {featured.author}
                            </p>
                            <p className="mt-1 text-[16px] text-[#808080]">
                              {featured.role}
                            </p>
                          </div>

                          <div className="flex justify-start lg:justify-end">
                            <Image
                              src={featured.logo}
                              alt=""
                              width={260}
                              height={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {smallItems.length > 0 && (
                    <div className="grid gap-16 lg:grid-cols-2">
                      {smallItems.map((item) => (
                        <div key={item.author}>
                          <div>
                            <div className="flex items-start gap-4">
                              <Image
                                src="/icon_quote.svg"
                                alt=""
                                width={56}
                                height={56}
                                className="h-auto w-[56px]"
                              />
                            </div>
                            <p className="text-[16px] leading-[1.4] text-[#7a7a7a] px-6">
                              {item.quote}
                            </p>
                          </div>

                          <div className="flex items-end justify-between gap-4">
                            <div>
                              <div className="mb-3 text-[24px] leading-none text-[#5cbb4a]">
                                …..
                              </div>
                              <p className="text-[18px] font-bold text-[#4a4a4a]">
                                {item.author}
                              </p>
                              <p className="mt-1 text-[16px] text-[#7a7a7a]">
                                {item.role}
                              </p>
                            </div>

                            <Image
                              src={item.logo}
                              alt=""
                              width={140}
                              height={55}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}
