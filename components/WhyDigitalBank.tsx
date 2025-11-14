import Image from "next/image";

const digitalBank = [
  {
    id: 1,
    icon: "/icon-online.svg",
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    id: 2,
    icon: "/icon-budgeting.svg",
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
  },
  {
    id: 3,
    icon: "/icon-onboarding.svg",
    title: "Fast Onboarding",
    description:
      "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    id: 4,
    icon: "/icon-api.svg",
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

export default function WhyDigitalBank() {
  return (
    <section
      aria-labelledby="why-digitalbank-title"
      className="flex flex-col items-center justify-center gap-12 px-6 py-16 md:gap-18 md:px-10 md:py-20 lg:items-start lg:px-12"
    >
      {/* Section Intro */}
      <div className="flex max-w-[635px] flex-col items-center gap-4 text-center md:gap-8 lg:items-start lg:text-left">
        <h2
          id="why-digitalbank-title"
          className="text-[2rem] leading-[120%] font-light tracking-[-0.5px] text-[#2D314D] md:text-[2.5rem] md:tracking-[-0.75px]"
        >
          Why choose Digitalbank?
        </h2>

        <p className="text-sm leading-[115%] font-normal text-[#9597A5] md:text-lg md:tracking-[-0.25px]">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
        {digitalBank.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-10 md:items-start"
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={72}
              height={72}
              className="object-contain"
            />

            <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
              <h3 className="text-[2rem] leading-[115%] font-light tracking-[-0.4px] text-[#2D314D]">
                {item.title}
              </h3>

              <p className="text-sm leading-[115%] font-normal text-[#9597A5] md:text-base md:leading-6 md:tracking-[-0.25px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
