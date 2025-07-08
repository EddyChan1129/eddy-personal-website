import React from "react";

export const SkillCard = ({ title, skills }) => (
  <div className="rounded-xl p-6 bg-white/80 border border-gray-200 hover:shadow-md transition">
    <h3 className="text-lg font-semibold mb-4 text-[#1a1a1a]">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((tech, key) => (
        <span
          key={key}
          className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-sm hover:bg-blue-200 transition"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);
