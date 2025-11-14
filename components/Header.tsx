"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import MobileMenu from "./MobileMenu";
import { Button } from "./ui/button";

export const navigationLinks = [
  { link: "/", label: "Home" },
  { link: "/", label: "About" },
  { link: "/", label: "Contact" },
  { link: "/", label: "Blog" },
  { link: "/", label: "Careers" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="sticky top-0 z-50 mx-auto flex w-full max-w-7xl items-center justify-between bg-white px-7 py-7 md:px-12 lg:px-17"
      aria-labelledby="main-header"
    >
      <h1 id="main-header" className="sr-only">
        Main website header
      </h1>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
      >
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/logo-dark.svg"
            alt="Digitalbank logo"
            width={153}
            height={21}
            priority
          />
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <nav aria-labelledby="main-nav-title" className="hidden lg:block">
        <h2 id="main-nav-title" className="sr-only">
          Main navigation
        </h2>

        <ul className="flex items-center gap-8">
          {navigationLinks.map((item, idx) => (
            <motion.li
              key={idx}
              className="group relative"
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={{}}
            >
              <Link
                href={item.link}
                className="text-sm leading-[115%] font-normal tracking-normal text-[#9597A5] transition-colors duration-300 hover:text-[#2D314D]"
              >
                {item.label}
              </Link>

              <motion.span
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-1 w-full bg-linear-to-r from-[#33D35E] to-[#2AB6D9]"
                variants={{
                  rest: { opacity: 0, scaleX: 0 },
                  hover: { opacity: 1, scaleX: 1 },
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{ originX: 0 }}
              />
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Desktop Button */}
      <motion.div
        className="hidden lg:block"
        whileHover={{ scale: 1.04, y: -2 }}
        transition={{ type: "spring", stiffness: 180, damping: 12 }}
      >
        <Button
          type="button"
          size="lg"
          className="rounded-full bg-linear-to-r from-[#33D35E] to-[#2AB6D9] text-sm leading-[200%] font-bold text-white shadow-md"
        >
          Request Invite
        </Button>
      </motion.div>

      {/* Mobile Navigation */}
      <nav aria-label="Mobile navigation" className="lg:hidden">
        <MobileMenu />
      </nav>
    </motion.header>
  );
}
