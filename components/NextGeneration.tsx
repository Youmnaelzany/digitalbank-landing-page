import Image from "next/image";

import { Button } from "./ui/button";

export default function NextGeneration() {
  return (
    <section
      aria-labelledby="next-generation-title"
      className="relative flex flex-col items-center justify-center overflow-hidden pb-16 md:pb-20 lg:flex-row-reverse lg:justify-between lg:pb-0"
    >
      {/* Main Mockup Image */}
      <div className="relative -top-20 z-10 w-full max-w-[767px] md:-top-50 lg:-top-20 lg:max-w-[767px]">
        <Image
          src="/image-mockups.png"
          alt="Digitalbank app mockup on mobile and desktop screens"
          width={767}
          height={939}
          className="-mt-10 h-auto w-full object-contain lg:-mt-16 lg:-mr-10"
          priority
        />
      </div>

      {/* Background Image */}
      <div className="absolute top-0 right-0 -z-10 md:-top-35 md:-right-32 lg:-right-90">
        <picture>
          <source media="(min-width:768px)" srcSet="/bg-intro-desktop.svg" />
          <Image
            src="/bg-intro-mobile.svg"
            alt="Decorative background"
            width={380} // explicit width
            height={423} // explicit height
            className="object-cover md:h-[1000px] md:w-[1200px]"
            priority
          />
        </picture>
      </div>

      {/* Text Content */}
      <div className="flex max-w-[327px] flex-col items-center gap-6 text-center md:max-w-[447px] lg:items-start lg:pl-12 lg:text-left">
        <h1
          id="next-generation-title"
          className="text-[2.5rem] leading-[120%] font-light tracking-[-0.75px] text-[#2D314D] md:text-[3.5rem] md:tracking-[-1px]"
        >
          Next generation digital banking
        </h1>

        <p className="text-sm leading-[115%] font-normal text-[#9597A5] md:text-lg md:leading-[155%] md:tracking-[-0.25px]">
          Take your financial life online. Your Digitalbank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>

        <Button
          type="button"
          size="lg"
          className="cursor-pointer rounded-full bg-linear-to-r from-[#33D35E] to-[#2AB6D9] text-sm leading-[200%] font-bold text-white shadow-md"
        >
          Request Invite
        </Button>
      </div>
    </section>
  );
}
