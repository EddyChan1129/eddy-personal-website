("");
import React, { HTMLAttributes, useEffect } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { twMerge } from "tailwind-merge";
import SplitType from "split-type";
import { useAnimate } from "motion/react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

const Testimonial = (
  props: {
    name: string;
    company: string;
    role: string;
    quote: string;
    image: string | StaticImport;
    imagePositionY: number;
    className?: string;
  } & HTMLAttributes<HTMLElement>,
) => {
  const {
    name,
    company,
    role,
    quote,
    image,
    imagePositionY,
    className,
    ...rest
  } = props;

  const { scope: quoteScope, entranceAnimation: quoteAnimate } =
    useTextRevealAnimation();
  // const [quoteScope, quoteAnimate] = useAnimate()
  // const [citeScope, citeAnimate] = useAnimate()
  const { scope: citeScope, entranceAnimation: citeAnimate } =
    useTextRevealAnimation();

  useEffect(() => {
    quoteAnimate();
    citeAnimate();
  }, []);

  return (
    <div
      className={twMerge(
        "grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center",
        className,
      )}
      {...rest}
    >
      <div
        className="aspect-square 
                    md:aspect-[9/16] md:col-span-2"
      >
        <Image
          src={image}
          alt={`${name} image`}
          className="size-full object-cover"
          style={{
            objectPosition: `50% ${imagePositionY * 100}%`,
          }}
        />
      </div>
      <blockquote className="md:col-span-3">
        <div
          className="text-3xl md:text-5xl lg:text-6xl mt-8 md:mt-0"
          ref={quoteScope}
        >
          <span>&ldquo;</span>
          {quote}
          <span>&ldquo;</span>
        </div>

        <cite
          ref={citeScope}
          className="mt-4 md:mt-8  not-italic md:text-lg lg:text-xl block "
        >
          {name}, {role} at {company}
        </cite>
      </blockquote>
    </div>
  );
};

export default Testimonial;
