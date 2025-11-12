import Image from "next/image";
import Link from "next/link";

import MobileMenu from "./MobileMenu";
import { Button } from "./ui/button";

export const navigationLinks = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/",
    label: "About",
  },
  {
    link: "/",
    label: "Contact",
  },
  {
    link: "/",
    label: "Blog",
  },
  {
    link: "/",
    label: "Careers",
  },
];

const Header = () => {
  return (
    <header className="sticky mx-auto flex w-full max-w-7xl items-center justify-between bg-white px-7 py-7 md:px-12 lg:px-17">
      <Image src="/logo-dark.svg" alt="Logo" width={153} height={21} />
      <nav className="hidden lg:block">
        <ul className="flex items-center justify-between gap-8">
          {navigationLinks.map((navigation, idx) => (
            <li key={idx} className="group relative">
              <Link
                href={navigation.link}
                className="cursor-pointer text-sm leading-[115%] font-normal tracking-normal text-[#9597A5] transition-colors duration-300 ease-in-out hover:text-[#2D314D]"
              >
                {navigation.label}
              </Link>
              <span className="absolute -bottom-2 left-0 h-1 w-full bg-linear-to-r from-[#33D35E] to-[#2AB6D9] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden lg:block">
        <Button
          type="button"
          size={"lg"}
          className="cursor-pointer rounded-full bg-linear-to-r from-[#33D35E] to-[#2AB6D9] text-sm leading-[200%] font-bold tracking-normal text-white"
        >
          Request Invite
        </Button>
      </div>
      <MobileMenu />
    </header>
  );
};
export default Header;
