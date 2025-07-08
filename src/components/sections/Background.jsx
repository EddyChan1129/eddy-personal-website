

export const Background = () => {
  return (
    <section
      id="background"
      className="min-h-screen flex items-center justify-center py-20"
    >
      
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Background
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 hover:shadow-lg transition-all flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200/80 pb-2">
                Education
              </h3>
              <div className="text-gray-600 space-y-6">
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    Postgraduate Certificate – Mobile Application Development
                  </p>
                  <p>George Brown College, Toronto, ON</p>
                  <p className="text-sm italic text-gray-500">
                    Expected Completion: Dec 2025
                  </p>
                  <ul className="list-inside mt-2 space-y-2 text-sm text-gray-500">
                    <li>
                      <details className="group">
                        <summary className="cursor-pointer font-semibold text-gray-800 marker:text-cyan-500 hover:underline">
                          Project: To-Do List App
                        </summary>
                        <p className="mt-1 pl-4">
                          Built a task management app using{" "}
                          <code className="text-gray-800">Node.js</code>,{" "}
                          <code className="text-gray-800">Express</code>,{" "}
                          <code className="text-gray-800">MongoDB</code>, and{" "}
                          <code className="text-gray-800">EJS</code> templating
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
                          <code className="text-gray-800">Swift</code>,{" "}
                          <code className="text-gray-800">Core Location</code>, and{" "}
                          <code className="text-gray-800">Firebase</code>{" "}
                          Firestore.
                        </p>
                      </details>
                    </li>

                    <li>
                      <details className="group">
                        <summary className="cursor-pointer font-semibold text-gray-800 marker:text-cyan-500 hover:underline">
                          Project: Star Wars Simulator
                        </summary>
                        <p className="mt-1 pl-4">
                          A console-based battle simulator game written in{" "}
                          <code className="text-gray-800">Kotlin</code> using
                          object-oriented programming principles.
                        </p>
                      </details>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    Bachelor of Science in Computing
                  </p>
                  <p>The Hong Kong Polytechnic University, Hong Kong</p>
                  <ul className="list-inside mt-2 space-y-2 text-sm text-gray-500">
                    <li>
                      <details className="group">
                        <summary className="cursor-pointer font-semibold text-gray-800 marker:text-cyan-500 hover:underline">
                          Capstone Project: Stock Prediction
                        </summary>
                        <p className="mt-1 pl-4">
                          Built a stock price forecasting app using{" "}
                          <code className="text-gray-800">Python</code>,{" "}
                          <code className="text-gray-800">Flask</code>, and deep
                          learning techniques. Leveraged financial data from{" "}
                          <code className="text-gray-800">yfinance</code>,
                          implemented machine learning models using{" "}
                          <code className="text-gray-800">scikit-learn</code> and{" "}
                          <code className="text-gray-800">PyTorch</code>, and
                          visualized insights with{" "}
                          <code className="text-gray-800">matplotlib</code>.
                        </p>
                      </details>
                    </li>

                    <li>
                      <details className="group">
                        <summary className="cursor-pointer font-semibold text-gray-800 marker:text-cyan-500 hover:underline">
                          Project: Monster Battle Game (Java)
                        </summary>
                        <p className="mt-1 pl-4">
                          A console-based RPG-style game developed in{" "}
                          <code className="text-gray-800">Java</code> using
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
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 hover:shadow-lg transition-all flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200/80 pb-2">
                Work Experience
              </h3>
              <div className="space-y-6 text-gray-600">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Frontend Developer – HKNova
                  </h4>
                  <p className="text-sm text-gray-500">
                    Contributed to a large-scale gambling platform built with
                    Vue.js and Nuxt. Worked in a CI/CD team using GitLab
                    pipelines for streamlined development and deployment.
                    Focused on modular frontend architecture and performance
                    optimization.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Freelance Web Developer
                  </h4>
                  <p className="text-sm text-gray-500">
                    Designed and deployed client websites with custom features
                    using React and Firebase. Focused on SEO and responsive
                    design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
};
