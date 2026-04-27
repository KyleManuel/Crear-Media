import Image from "next/image";

export default function RequestConsultingPage() {
  return (
    <main className="bg-white">
      <div className="w-full mx-auto px-40 pt-6 pb-40">
        <div className="mb-10">
          <h1 className="text-[28px] font-bold leading-none text-[#4d4d4d]">
            Nice to meet you!
          </h1>
          <p className="mt-6 text-[17px] leading-[1.5] text-[#7a7a7a]">
            Leave us your message using this form and we will get in touch with
            you as soon as possible.
          </p>
        </div>

        <div className="relative mx-auto max-w-[920px] rounded-[44px]
            bg-white px-10 py-12 shadow-[0_0_60px_5px_rgba(0,0,0,0.2)]">
            <Image
                src="/icons/green-star.svg"
                alt=""
                width={64}
                height={64}
                className="absolute right-[-40px] top-[-40px] h-auto w-[64px]"
            />


          <form className="space-y-8 text-black">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-[16px] text-[#7a7a7a]"
                >
                  First name <span className="text-[#d9534f]">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="h-[40px] w-full rounded-[6px] border border-[#c9d3df] px-4 text-[16px] outline-none focus:border-[#5cbb4a]"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-[16px] text-[#7a7a7a]"
                >
                  Last name <span className="text-[#d9534f]">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="h-[40px] w-full rounded-[6px] border border-[#c9d3df] px-4 text-[16px] outline-none focus:border-[#5cbb4a]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-[16px] text-[#7a7a7a]"
              >
                Email <span className="text-[#d9534f]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="h-[40px] w-full rounded-[6px] border border-[#c9d3df] px-4 text-[16px] outline-none focus:border-[#5cbb4a]"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-[16px] text-[#7a7a7a]"
              >
                Contact number <span className="text-[#d9534f]">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="h-[40px] w-full rounded-[6px] border border-[#c9d3df] px-4 text-[16px] outline-none focus:border-[#5cbb4a]"
              />
            </div>

            <div>
              <label
                htmlFor="challenge"
                className="mb-2 block text-[16px] text-[#7a7a7a]"
              >
                What challenge are you looking to solve?{" "}
                <span className="text-[#d9534f]">*</span>
              </label>
              <textarea
                id="challenge"
                name="challenge"
                required
                rows={3}
                className="w-full rounded-[6px] border border-[#c9d3df] px-4 py-4 text-[16px] outline-none focus:border-[#5cbb4a]"
              />
            </div>

            <button
              type="submit"
              className="rounded-[8px] bg-[#5cbb4a] px-6 py-2 text-[16px] font-semibold text-white transition hover:opacity-90"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}