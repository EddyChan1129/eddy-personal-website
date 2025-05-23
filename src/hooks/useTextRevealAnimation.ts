import { useEffect, useState } from "react";
import { useAnimate } from "motion/react";
import SplitType from "split-type";
import { stagger } from "motion";

const useTextRevealAnimation = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    new SplitType(scope.current, {
      types: "lines,words",
      tagName: "span",
    });
  }, [scope]);

  const entranceAnimation = () => {
    return animate(
      scope.current.querySelectorAll(".word"),
      {
        transform: ["translateY(0)"],
      },
      {
        duration: 0.5,
        delay: stagger(0.2),
      },
    );
  };

  return {
    scope,
    entranceAnimation,
  };
};

export default useTextRevealAnimation;
