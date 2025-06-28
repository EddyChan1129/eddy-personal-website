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
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-gray-500/30 hover:shadow-lg transition-all flex flex-col gap-6">
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
                  <ul className="list-inside mt-2 space-y-2 text-sm text-gray-400">
                    <li>
                      <details className="group">
                        <summary className="cursor-pointer font-semibold text-white marker:text-cyan-500 hover:underline">
                          Project: To-Do List App
                        </summary>
                        <p className="mt-1 pl-4">
                          Built a task management app using{" "}
                          <code className="text-white">Node.js</code>,{" "}
                          <code className="text-white">Express</code>,{" "}
                          <code className="text-white">MongoDB</code>, and{" "}
                          <code className="text-white">EJS</code> templating
                          engine.
                        </p>
                      </details>
                    </li>

                    <li>
                      <details className="group">
                        <summary className="cursor-pointer font-semibold text-white marker:text-cyan-400 hover:underline">
                          Project: Plant Tracker App
                        </summary>
                        <p className="mt-1 pl-4">
                          iOS app to track plants and their locations using{" "}
                          <code className="text-white">Swift</code>,{" "}
                          <code className="text-white">Core Location</code>, and{" "}
                          <code className="text-white">Firebase</code>{" "}
                          Firestore.
                        </p>
                      </details>
                    </li>

                    <li>
                      <details className="group">
                        <summary className="cursor-pointer font-semibold text-white marker:text-cyan-500 hover:underline">
                          Project: Star Wars Simulator
                        </summary>
                        <p className="mt-1 pl-4">
                          A console-based battle simulator game written in{" "}
                          <code className="text-white">Kotlin</code> using
                          object-oriented programming principles.
                        </p>
                      </details>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-white">
                    Bachelor of Science in Computing
                  </p>
                  <p>The Hong Kong Polytechnic University, Hong Kong</p>
                  <ul className="list-inside mt-2 space-y-2 text-sm text-gray-400">
                    <li>
                      <details className="group">
                        <summary className="cursor-pointer font-semibold text-white marker:text-cyan-500 hover:underline">
                          Capstone Project: Stock Prediction
                        </summary>
                        <p className="mt-1 pl-4">
                          Built a stock price forecasting app using{" "}
                          <code className="text-white">Python</code>,{" "}
                          <code className="text-white">Flask</code>, and deep
                          learning techniques. Leveraged financial data from{" "}
                          <code className="text-white">yfinance</code>,
                          implemented machine learning models using{" "}
                          <code className="text-white">scikit-learn</code> and{" "}
                          <code className="text-white">PyTorch</code>, and
                          visualized insights with{" "}
                          <code className="text-white">matplotlib</code>.
                        </p>
                      </details>
                    </li>

                    <li>
                      <details className="group">
                        <summary className="cursor-pointer font-semibold text-white marker:text-cyan-500 hover:underline">
                          Project: Monster Battle Game (Java)
                        </summary>
                        <p className="mt-1 pl-4">
                          A console-based RPG-style game developed in{" "}
                          <code className="text-white">Java</code> using
                          object-oriented programming. Includes features like
                          monster selection, attack logic, health tracking, and
                          turn-based combat flow.
                        </p>
                      </details>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-gray-500/30 hover:shadow-lg transition-all flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                Work Experience
              </h3>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Frontend Developer – HKNova
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
                    Freelance Web Developer
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
