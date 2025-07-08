export const Background = () => {
  return (
    <section
      id="background"
      className="min-h-screen flex items-center justify-center py-20 bg-[#f7f9fc]"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-12 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent tracking-tight">
          Background
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="rounded-2xl p-6 bg-white/80 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-b pb-2 border-gray-200">
              Education
            </h3>
            <div className="space-y-6 text-[#444] text-sm">
              {/* College */}
              <div>
                <p className="text-base font-semibold text-[#1a1a1a]">
                  Postgraduate – Mobile App Development
                </p>
                <p>George Brown College, Toronto</p>
                <p className="italic text-gray-500">
                  Expected Completion: Dec 2025
                </p>
                <ul className="list-inside mt-2 space-y-2">
                  <li>
                    <details className="group">
                      <summary className="cursor-pointer font-semibold text-[#1a1a1a] marker:text-cyan-500 hover:underline">
                        Project: To-Do List App
                      </summary>
                      <p className="pl-4 mt-1">
                        Built with <code>Node.js</code>, <code>Express</code>,{" "}
                        <code>MongoDB</code>, and <code>EJS</code>.
                      </p>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="cursor-pointer font-semibold text-[#1a1a1a] marker:text-cyan-500 hover:underline">
                        Project: Plant Tracker App
                      </summary>
                      <p className="pl-4 mt-1">
                        iOS app using <code>Swift</code>,{" "}
                        <code>Core Location</code>, <code>Firebase</code>.
                      </p>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="cursor-pointer font-semibold text-[#1a1a1a] marker:text-cyan-500 hover:underline">
                        Project: Star Wars Simulator
                      </summary>
                      <p className="pl-4 mt-1">
                        Kotlin OOP-based console battle simulator.
                      </p>
                    </details>
                  </li>
                </ul>
              </div>

              {/* Uni */}
              <div>
                <p className="text-base font-semibold text-[#1a1a1a]">
                  BSc in Computing
                </p>
                <p>The Hong Kong Polytechnic University</p>
                <ul className="list-inside mt-2 space-y-2">
                  <li>
                    <details className="group">
                      <summary className="cursor-pointer font-semibold text-[#1a1a1a] marker:text-cyan-500 hover:underline">
                        Capstone: Stock Prediction
                      </summary>
                      <p className="pl-4 mt-1">
                        Python + Flask + deep learning. Used{" "}
                        <code>yfinance</code>, <code>scikit-learn</code>,{" "}
                        <code>PyTorch</code>, <code>matplotlib</code>.
                      </p>
                    </details>
                  </li>
                  <li>
                    <details className="group">
                      <summary className="cursor-pointer font-semibold text-[#1a1a1a] marker:text-cyan-500 hover:underline">
                        Project: Monster Game (Java)
                      </summary>
                      <p className="pl-4 mt-1">
                        Turn-based Java OOP console game with combat and monster
                        logic.
                      </p>
                    </details>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="rounded-2xl p-6 bg-white/80 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-b pb-2 border-gray-200">
              Work Experience
            </h3>
            <div className="space-y-6 text-[#444] text-sm">
              <div>
                <h4 className="text-base font-semibold text-[#1a1a1a]">
                  Frontend Developer – HKNova
                </h4>
                <p>
                  Built modules for Vue.js + Nuxt gambling platform. Used GitLab
                  CI/CD. Focused on performance and architecture.
                </p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-[#1a1a1a]">
                  Freelance Web Developer
                </h4>
                <p>
                  Developed client sites with React + Firebase. Prioritized SEO
                  and mobile responsiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
