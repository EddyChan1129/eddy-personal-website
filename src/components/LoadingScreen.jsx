import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Welcome to Eddy's world!".toUpperCase();

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#f7f9fc] text-[#1a1a1a] flex flex-col items-center justify-center">
      {/* Text with blinking cursor */}
      <div className="text-center text-2xl md:text-4xl font-mono tracking-wider font-bold mb-6">
        {text}
        <span className="ml-1 text-blue-500 animate-pulse">|</span>
      </div>

      {/* Light style progress bar */}
      <div className="w-[200px] h-[4px] bg-gray-300 rounded-full overflow-hidden relative">
        <div className="w-[40%] h-full bg-blue-500 animate-[marquee_1.2s_linear_infinite] shadow-[0_0_10px_#3b82f6]"></div>
      </div>
    </div>
  );
};
