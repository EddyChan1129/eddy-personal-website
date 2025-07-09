// BackgroundEffect.jsx
import React, { useMemo } from "react";

const BackgroundEffect = ({ count = 10 }) => {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const dur = 8 + Math.random() * 8;
        const delay = Math.random() * 2;

        return (
          <div
            key={i}
            className="particle"
            style={{
              "--x": `${posX}%`,
              "--y": `${posY}%`,
              "--dur": `${dur}s`,
              "--delay": `${delay}s`,
            }}
          />
        );
      }),
    [count],
  );

  return <div className="box">{dots}</div>;
};

export default React.memo(BackgroundEffect);
