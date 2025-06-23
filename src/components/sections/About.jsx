import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "NextJS",
    "Vue",
    "NuxtJS",
    "TypeScript",
    "TailwindCSS",
  ];

  const backendSkills = [
    "Node.js",
    "Python",
    "Java",
    "Php",
    "MySQL",
    "MongoDB",
    "GraphQL",
  ];

  // Mobile skills can be added similarly
  const mobileSkills = ["Swift", "Kotlin", "React Native"];

  // Tools and DevOps skills can be added similarly
  const devOpsSkills = ["Docker", "Git", "CI/CD", "Vercel", "Netlify", "AWS"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Mobile </h3>
                <div className="flex flex-wrap gap-2">
                  {mobileSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Tools and DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {devOpsSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <div className="text-gray-300 space-y-4">
                <div>
                  <p className="font-semibold">
                    Postgraduate Certificate – Mobile Application Development
                  </p>
                  <p>George Brown College, Toronto, ON</p>
                  <p className="text-sm italic">
                    Expected Completion: Dec 2025
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                    <li>
                      <strong>E-Commerce App:</strong> Full-stack shopping
                      platform using Node.js & MongoDB
                    </li>
                    <li>
                      <strong>Mobile App Design:</strong> UI prototyping and
                      implementation using Kotlin, Swift & Firebase
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold">
                    Bachelor of Science in Computing
                  </p>
                  <p>The Hong Kong Polytechnic University, Hong Kong</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                    <li>
                      <strong>Full-stack Web App:</strong> Business dashboard
                      using PHP, JavaScript & MySQL
                    </li>
                    <li>
                      <strong>E-commerce System:</strong> Shopping cart with
                      order management & user authentication
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Frontend Developer – GBC Capstone Project (2025)
                  </h4>
                  <p>
                    Built a responsive e-commerce app using Next.js, Tailwind
                    CSS, Firebase, and Stripe. Integrated admin panel and
                    real-time product management.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Freelance Web Developer (2024)
                  </h4>
                  <p>
                    Designed and deployed client websites with custom features
                    using React and Firebase. Focused on SEO and responsive
                    design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
