import Link from "next/link";

import { TextAlignJustify } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navigationLinks } from "./Header";

export default function MobileMenu() {
  return (
    <div className="lg:hidden">
      <Sheet>
        {/* Accessible Trigger Button */}
        <SheetTrigger aria-label="Open mobile menu">
          <TextAlignJustify className="size-6 text-[#2D314D]" />
        </SheetTrigger>

        {/* Mobile Menu */}
        <SheetContent
          side="top"
          aria-labelledby="mobile-menu-title"
          role="dialog"
        >
          <SheetHeader>
            {/* Hidden Title for Accessibility */}
            <h2 id="mobile-menu-title" className="sr-only">
              Mobile navigation menu
            </h2>

            <nav aria-labelledby="mobile-menu-title">
              <ul className="flex flex-col items-center gap-8 p-8">
                {navigationLinks.map((nav, index) => (
                  <li key={index}>
                    <Link
                      href={nav.link}
                      className="text-lg leading-[155%] font-normal tracking-[-0.25px] text-[#2D314D] transition-colors duration-300 hover:text-[#30C88F] focus-visible:ring-2 focus-visible:ring-[#33D35E] focus-visible:outline-none"
                    >
                      {nav.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
