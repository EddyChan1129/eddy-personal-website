export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "TailwindCSS",
    "JavaScript",
    "TypeScript",
    "React",
    "NextJS",
    "Vue",
    "NuxtJS",
  ];

  const backendSkills = [
    "Node.js",
    "Python",
    "Java",
    "PHP",
    "MySQL",
    "MongoDB",
    "GraphQL",
    "Express",
    "Spring Boot",
  ];

  const mobileSkills = ["Swift", "Kotlin", "React Native"];

  const devOpsSkills = [
    "Docker",
    "Git",
    "CI/CD",
    "Vercel",
    "Netlify",
    "AWS",
    "Google Cloud",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-[#f7f9fc]"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-10 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent tracking-tight">
          About Me
        </h2>

        <div className="rounded-2xl p-8 shadow-xl bg-white/70 backdrop-blur-sm border border-gray-200">
          <p className="text-[#444] text-lg mb-10 leading-relaxed text-center">
            I’m a developer passionate about crafting intuitive, scalable web
            and mobile apps. I enjoy solving real-world problems with elegant
            code and clean design.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frontend */}
            <SkillCard title="Frontend" skills={frontendSkills} />
            {/* Backend */}
            <SkillCard title="Backend" skills={backendSkills} />
            {/* Mobile */}
            <SkillCard title="Mobile" skills={mobileSkills} />
            {/* DevOps */}
            <SkillCard title="Tools & DevOps" skills={devOpsSkills} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ⬇ 可獨立寫出去 component 檔
const SkillCard = ({ title, skills }) => (
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
