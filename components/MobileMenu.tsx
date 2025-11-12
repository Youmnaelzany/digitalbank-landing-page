import Link from "next/link";

import { TextAlignJustify } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navigationLinks } from "./Header";

const MobileMenu = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <TextAlignJustify className="size-6 text-[#2D314D]" />
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
              <nav className="">
                <ul className="flex flex-col items-center justify-center gap-8 p-8">
                  {navigationLinks.map((navigation, idx) => (
                    <li key={idx} className="">
                      <Link
                        href={navigation.link}
                        className="cursor-pointer text-lg leading-[155%] font-normal tracking-[-0.25px] text-[#2D314D] transition-colors duration-300 ease-in-out"
                      >
                        {navigation.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileMenu;
