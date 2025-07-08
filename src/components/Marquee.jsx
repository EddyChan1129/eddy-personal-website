import { useEffect, useRef } from "react";
import gsap from "gsap";

const Marquee = ({ items }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const ctx = gsap.context(() => {
      const tween = gsap.to(".marquee-item", {
        xPercent: -100,
        repeat: -1,
        ease: "linear",
        duration: 10,
      });

      return () => tween.kill();
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={marqueeRef}
      className="overflow-hidden whitespace-nowrap border-y border-gray-300 py-2 my-10"
    >
      <div className="inline-block">
        {items.map((item, index) => (
          <span
            key={index}
            className="marquee-item inline-block mx-6 text-[#444] text-base"
          >
            {item}
          </span>
        ))}
        {/* Duplicate for smooth loop */}
        {items.map((item, index) => (
          <span
            key={`dup-${index}`}
            className="marquee-item inline-block mx-6 text-[#444] text-base"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
