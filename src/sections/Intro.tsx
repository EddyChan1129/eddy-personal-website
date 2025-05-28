"use client";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { useInView } from "motion/react";
import { FC, useEffect, useRef } from "react";

const Intro: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope, { once: true });

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);

  return (
    <section
      className="section md:mt-16 lg:mt-20 "
      id="intro"
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="text-4xl leading-snug md:text-7xl lg:w-[80%]  border-b-red-orange-500 border-b-2  mx-auto pb-10" ref={scope}>
          I’m <b className="text-red-orange-500">Eddy</b>. My goal is to create products that enhance the user experience and drive business success.
        </h2>
      </div>
    </section>
  );
};

export default Intro;
