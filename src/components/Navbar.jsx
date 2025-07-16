import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const component = useRef(null);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    let ctx = gsap.context(() => {
      gsap.from(component.current, {
        opacity: 0,
        duration: 1,
        ease: "power3.inOut",
      });
    }, component);

    return () => ctx.revert();
  }, [menuOpen]);
  return (
    <nav
      className="fixed top-0 w-full z-40 bg-[rgba(255, 255, 255, 0.8)] backdrop-blur-lg border-b border-gray-200/80 shadow-lg"
      ref={component}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-gray-800">
            {" "}
            Eddy<span className="text-blue-500">.PROFILE</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden flex items-center justify-center hover:text-white transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <b className="text-3xl">&#9776;</b>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {" "}
              Home
            </a>
            {/* <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {" "}
              About{" "}
            </a> */}
            <a
              href="#background"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {" "}
              Background{" "}
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {" "}
              Contact{" "}
            </a>
            <a
              href="/Eddy_Chan_Resume_IT.pdf"
              download
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Download Resume"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
