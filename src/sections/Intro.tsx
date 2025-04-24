import { section } from "motion/react-client";
import { FC } from "react";

const Intro: FC = () => {
  return (
    <section className="section mt-12 md:mt-16 lg:mt-20">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:w-[80%]">
          I’m Eddy Chan, a Product Designer based in Hong Kong. I specialize in creating user-centered designs that are not only visually appealing but also highly functional.
          I have a passion for solving complex problems and a keen eye for detail. My goal is to create products that enhance the user experience and drive business success.
        </h2>
      </div>
    </section>
  )
};

export default Intro;
