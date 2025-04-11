import Image from "next/image";
import logo from "@/assets/icons/bars.svg";
import { FC } from "react";
import { Button } from "@/components/Button";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-md">
      <nav className="container max-w-full">
        <div className="flex justify-between items-center h-20">
          <div>
            <a href=""></a>
            <span className="text-xl font-bold uppercase">Eddy&nbsp; CHAN</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="size-11 border border-stone-400 rounded-full inline-flex items-center justify-center bg-stone-200">
              <Image src={logo} alt="logo" />
            </div>
            <Button
              variant="primary"
              className="hidden md:inline-flex">Contact Me</Button>
          </div>
        </div>
      </nav>

    </header>)
};

export default Header;
