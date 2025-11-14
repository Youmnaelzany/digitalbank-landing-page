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
  { link: "/", label: "About Us" },
  { link: "/", label: "Contact" },
  { link: "/", label: "Blog" },
  { link: "/", label: "Careers" },
  { link: "/", label: "Support" },
  { link: "/", label: "Privacy Policy" },
];

const socialMediaLinks = [
  { icon: <FaSquareFacebook className="size-6" />, label: "Facebook" },
  { icon: <FaYoutube className="size-6" />, label: "YouTube" },
  { icon: <FaXTwitter className="size-6" />, label: "Twitter" },
  { icon: <FaPinterest className="size-6" />, label: "Pinterest" },
  { icon: <FaInstagram className="size-6" />, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer
      className="mx-auto grid max-w-7xl grid-cols-1 items-center justify-center gap-8 bg-[#2D314D] px-7 py-14 md:px-12 lg:grid-cols-3 lg:px-17"
      aria-labelledby="footer-title"
    >
      {/* Logo + Social */}
      <div className="flex flex-col items-center justify-center gap-8 lg:items-start">
        <Image
          src="/logo-light.svg"
          alt="Digitalbank Logo"
          width={153}
          height={21}
          priority={false}
        />

        <ul className="flex items-center justify-center gap-4">
          {socialMediaLinks.map((item, index) => (
            <li key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/"
                    aria-label={item.label}
                    className="text-white transition-colors duration-300 hover:text-[#30C88F]"
                  >
                    {item.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p className="text-sm text-white">{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation */}
      <nav aria-labelledby="footer-nav-title">
        <h2 id="footer-nav-title" className="sr-only">
          Footer navigation
        </h2>

        <ul className="grid grid-cols-1 gap-4 text-center lg:grid-cols-2 lg:text-left">
          {navigationLinks.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="text-sm text-white transition-colors duration-300 hover:text-[#30C88F]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA + Copyright */}
      <div className="flex flex-col items-center justify-center gap-6 text-center lg:items-end lg:text-right">
        <Button
          type="button"
          size="lg"
          className="rounded-full bg-linear-to-r from-[#33D35E] to-[#2AB6D9] text-sm font-bold text-white"
        >
          Request Invite
        </Button>

        <p className="text-sm text-white/50">
          © Digitalbank. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
