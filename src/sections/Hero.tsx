import { FC } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import heroImage from "@/assets/images/hero-image.jpg";
import downImage from "@/assets/icons/chevron-double-down.svg";
import { Button } from "@/components/Button";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <section>
      <div className="md:grid md:grid-cols-12 md:h-screen items-stretch">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container max-w-full">
            <h1 className="text-5xl md:text-6xl mt-40 md:mt-0 lg:text-7xl">  Living with regret is harder — it whispers in the quiet, long after the storm is gone.</h1>
            <div className="flex flex-col mt-10 items-start gap-6 md:flex-row md:items-center">
              <Button variant="secondary" iconAfter={
                <Image className="size-5" src={downImage} alt="chevron-double-down image" />
              }>
                <span>
                  View My Work
                </span>

              </Button>
              <Button variant="text">Let&apos;s talk</Button>
            </div>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="mt-20 md:mt-0 md:h-full">
            <Image src={heroImage} alt="hero image" className="size-full object-cover" />
          </div>
        </div>
      </div>
    </section>

  )
};

export default Hero;
