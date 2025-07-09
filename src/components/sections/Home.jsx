export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-[#f7f9fc] bg-cover bg-center "
      style={{ backgroundImage: "url('/bg_1.png')" }}
    >
      <div className="text-center z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-semibold mb-6 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent tracking-tight">
          Hi, I’m Eddy CHAN
        </h1>

        <p className="text-[#444] text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Full-stack developer passionate about clean code, scalable apps, and
          creating meaningful digital experiences with great UX.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 rounded-2xl bg-blue-500 text-white font-medium backdrop-blur-md hover:shadow-lg hover:-translate-y-1 transition duration-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl border border-blue-500 text-blue-500 font-medium backdrop-blur-md hover:bg-blue-50 hover:-translate-y-1 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
