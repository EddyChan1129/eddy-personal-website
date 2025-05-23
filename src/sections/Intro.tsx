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
      className="section mt-12 md:mt-16 lg:mt-20"
      id="intro"
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:w-[80%]" ref={scope}>
          I’m Eddy Chan, a Product Designer based in Hong Kong. I specialize in
          creating user-centered designs that are not only visually appealing
          but also highly functional. I have a passion for solving complex
          problems and a keen eye for detail. My goal is to create products that
          enhance the user experience and drive business success.
        </h2>
      </div>
    </section>
  );
};

export default Intro;
