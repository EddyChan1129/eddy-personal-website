import { RevealOnScroll } from "../RevealOnScroll";

export const Background = () => {
  return (
    <section
      id="background"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Background
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                Education
              </h3>
              <div className="text-gray-300 space-y-6">
                <div>
                  <p className="text-lg font-semibold text-white">
                    Postgraduate Certificate – Mobile Application Development
                  </p>
                  <p>George Brown College, Toronto, ON</p>
                  <p className="text-sm italic text-gray-400">
                    Expected Completion: Dec 2025
                  </p>
                  {/* <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-400">
                    <li>
                      <span className="font-semibold text-white">
                        E-Commerce App:
                      </span>{" "}
                      Full-stack shopping platform using Node.js & MongoDB
                    </li>
                    <li>
                      <span className="font-semibold text-white">
                        Mobile App Design:
                      </span>{" "}
                      UI prototyping and implementation using Kotlin, Swift &
                      Firebase
                    </li>
                  </ul> */}
                </div>

                <div>
                  <p className="text-lg font-semibold text-white">
                    Bachelor of Science in Computing
                  </p>
                  <p>The Hong Kong Polytechnic University, Hong Kong</p>
                  {/* <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-400">
                    <li>
                      <span className="font-semibold text-white">
                        Full-stack Web App:
                      </span>{" "}
                      Business dashboard using PHP, JavaScript & MySQL
                    </li>
                    <li>
                      <span className="font-semibold text-white">
                        E-commerce System:
                      </span>{" "}
                      Shopping cart with order management & user authentication
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                Work Experience
              </h3>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Frontend Developer – HKNova (2024)
                  </h4>
                  <p className="text-sm text-gray-400">
                    Contributed to a large-scale gambling platform built with
                    Vue.js and Nuxt. Worked in a CI/CD team using GitLab
                    pipelines for streamlined development and deployment.
                    Focused on modular frontend architecture and performance
                    optimization.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Freelance Web Developer (2024)
                  </h4>
                  <p className="text-sm text-gray-400">
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
