"use client";
import { stagger } from "motion";
import { useAnimate, useInView } from "motion/react";
import { section } from "motion/react-client";
import { FC, useEffect } from "react";
import SplitType from "split-type";

const Intro: FC = () => {

  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true });

  useEffect(() => {
    new SplitType(scope.current.querySelector("h2"), {
      types: "lines,words",
      tagName: "span",
    });
  }
  , [scope]);

  useEffect(() => {
    if (inView) {
      animate(scope.current.querySelectorAll(".word"),{
        transform: "translateY(0)",
      }, {
        duration: 0.5,
        delay: stagger(0.1),
      }
      );
  
    }
  }, [inView, animate, scope]);


  return (
    <section className="section mt-12 md:mt-16 lg:mt-20" id="intro" ref={scope}>
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:w-[80%]">
          I’m Eddy Chan, a Product Designer based in Hong Kong. I specialize in creating user-centered designs that are not only visually appealing but also highly functional.
          I have a passion for solving complex problems and a keen eye for detail. My goal is to create products that enhance the user experience and drive business success.
        </h2>w
      </div>
    </section>
  )
};

export default Intro;
