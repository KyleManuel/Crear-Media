import Image from "next/image";
import Link from "next/link";

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
            Una unión para transformar el aprendizaje con inteligencia
          </h1>

          <div className="mt-6 space-y-6 text-[17px] leading-[1.5] text-[#808080]">
            <p><strong>
                En un mundo donde la información ya no basta, la inteligencia se vuelve el recurso más valioso.
            </strong></p>
            <p>
                CrearMedia y SceneSnap se han unido para impulsar una nueva era de aprendizaje: predictivo, dinámico y profundamente humano. 
                SceneSnap, una inteligencia artificial desarrollada para entender y optimizar el comportamiento de aprendizaje, se integra ahora de forma exclusiva en los sistemas de formación que desarrollamos para empresas líderes.
            </p>
            <p><strong>
                Porque cuando el conocimiento se vuelve consciente de sí mismo, el cambio ya no es posible: es inevitable.
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
                href="/consulting"
                className="mt-8 mx-auto inline-block rounded-full bg-[#5cbb4a] px-12 py-3 text-[18px] font-semibold text-white
                transition hover:bg-[#376e2c]"
            >
                Probar SceneSnap en acción
            </Link>
        </div>
        </div>
      </div>
    </section>
    <section className="bg-white w-full px-6 py-20">
    <div className="mx-auto grid max-w-[1800px] items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-tr-[90px] bg-[#f3f3f3] px-20 py-16">
        <div className="mb-10 flex">
            <h1 className="text-[64px] leading-none text-black">IA</h1>
            <Image
                src="/icons/green-star.svg"
                alt=""
                width={40}
                height={40}
                className="mt-2 h-auto w-[40px]"
            />
        </div>

        <p className="max-w-[760px] text-[18px] font-semibold leading-[1.45] text-[#7a7a7a]">
            “SceneSnap combina inteligencia artificial, aprendizaje inmersivo y
            personalización para ofrecer experiencias adaptativas. Al integrar
            herramientas de IA, analítica de datos y un sistema de gestión del
            aprendizaje, crea entornos inclusivos centrados en el aprendizaje
            significativo, alineados con las tendencias actuales de educación
            multimodal y modelos más flexibles y adaptativos.”
        </p>

        <div className="mt-12 flex items-center gap-6">
            <Image
            src="/images/alejandro-perez.jpg"
            alt="Alejandro Perez"
            width={130}
            height={130}
            className="h-[130px] w-[130px] rounded-full object-cover"
            />

            <div>
            <p className="text-[28px] font-bold leading-[1.2] text-[#7a7a7a]">
                Alejandro Perez
            </p>
            <p className="mt-2 text-[26px] leading-[1.35] text-[#8a8a8a]">
                Fundador &amp; Director
                <br />
                de CrearMedia
            </p>
            </div>
        </div>

        <Link
            href="/consulting"
            className="mt-12 inline-flex rounded-[14px] bg-[#5cbb4a] px-8 py-4 text-[24px] font-semibold text-white transition hover:bg-[#376e2c]"
        >
            Ver perfil en LinkedIn
        </Link>
        </div>

        <div className="px-8 pt-20">
        <div className="mb-8">
            <Image
            src="/icons/green-star.svg"
            alt=""
            width={48}
            height={48}
            className="h-auto w-[48px]"
            />
        </div>

        <h2 className="text-[64px] font-bold leading-[1.05] text-[#161616]">
            ¿Qué es SceneSnap?
        </h2>

        <p className="mt-8 text-[30px] font-bold leading-[1.2] text-[#7a7a7a]">
            Inteligencia que aprende del aprendizaje
        </p>

        <div className="mt-10 space-y-10 text-[27px] leading-[1.65] text-[#8a8a8a]">
            <p>
            SceneSnap es una plataforma de inteligencia artificial integrada en
            proyectos de formación avanzada. A través de análisis en tiempo real,
            identifica patrones, bloqueos y oportunidades únicas para mejorar la
            experiencia de cada usuario.
            </p>

            <p>
            No se limita a mostrar métricas: interpreta la experiencia, predice
            comportamientos, y sugiere mejoras precisas sin intervención manual.
            </p>

            <p>
            Esta tecnología convierte cada curso en un sistema vivo que evoluciona
            con sus usuarios. Gracias a nuestra colaboración con SceneSnap, somos
            pioneros en ofrecer este nivel de personalización y optimización en
            América Latina y el resto del continente.
            </p>
        </div>
        </div>
    </div>
    </section>
    </>
  );
}