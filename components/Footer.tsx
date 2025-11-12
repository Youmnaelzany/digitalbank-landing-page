import Image from "next/image";
import Link from "next/link";

import {
  FaInstagram,
  FaPinterest,
  FaSquareFacebook,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "./ui/button";

const navigationLinks = [
  {
    link: "/",
    label: "About Us",
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
  {
    link: "/",
    label: "Support",
  },
  {
    link: "/",
    label: "Privacy Policy",
  },
];

const socialMediaLinks = [
  {
    content: (
      <FaSquareFacebook className="size-6 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#30C88F]" />
    ),
    toolTip: "Facebook",
  },
  {
    content: (
      <FaYoutube className="size-6 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#30C88F]" />
    ),
    toolTip: "YouTube",
  },
  {
    content: (
      <FaXTwitter className="size-6 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#30C88F]" />
    ),
    toolTip: "XTwitter",
  },
  {
    content: (
      <FaPinterest className="size-6 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#30C88F]" />
    ),
    toolTip: "Pinterest",
  },
  {
    content: (
      <FaInstagram className="size-6 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#30C88F]" />
    ),
    toolTip: "Instagram ",
  },
];
const Footer = () => {
  return (
    <footer className="mx-auto grid max-w-7xl grid-cols-1 items-center justify-center gap-8 bg-[#2D314D] px-7 py-14 md:px-12 lg:grid-cols-3 lg:px-17">
      {/* Logo & Social Media Links */}
      <div className="flex flex-col items-center justify-center gap-8 lg:items-start">
        <Image src="/logo-light.svg" alt="Logo" width={153} height={21} />
        <div className="">
          <ul className="flex items-center justify-center gap-4">
            {socialMediaLinks.map((social, idx) => (
              <li key={idx}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={"/"}>{social.content}</Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm leading-[115%] font-normal tracking-normal text-white">
                      {social.toolTip}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <nav className="">
        <ul className="grid grid-cols-1 items-center justify-center gap-4 text-center lg:grid-cols-2 lg:text-left">
          {navigationLinks.map((navigation, idx) => (
            <li key={idx}>
              <Link
                href={navigation.link}
                className="cursor-pointer text-sm leading-[115%] font-normal tracking-normal text-white transition-colors duration-300 ease-in-out hover:text-[#30C88F]"
              >
                {navigation.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col items-center justify-center gap-6 text-center lg:items-end lg:text-left">
        <Button
          type="button"
          size={"lg"}
          className="cursor-pointer rounded-full bg-linear-to-r from-[#33D35E] to-[#2AB6D9] text-sm leading-[200%] font-bold tracking-normal text-white"
        >
          Request Invite
        </Button>
        <h4 className="text-sm leading-[115%] font-normal tracking-normal text-white/50">
          © Digitalbank. All Rights Reserved
        </h4>
      </div>
    </footer>
  );
};
export default Footer;
