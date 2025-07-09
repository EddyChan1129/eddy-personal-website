import BackgroundEffect from "../BackgroundEffect";
import Marquee from "../Marquee";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-[#f7f9fc] relative bg-gradient-to-b from-[#d9f0ff] via-[#e8f4ff] to-[#f7f9fc] 
             bg-cover bg-center"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-12 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent tracking-tight">
          Recent Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Project 1 */}

          <ProjectCard
            title="My Bagel – E-Commerce App"
            description="Built a modern bagel store using Next.js and Strapi CMS. Features include real-time product management, Firebase auth, and Cloudinary image uploads."
            techs={[
              "Next.js",
              "Strapi",
              "Firebase",
              "Cloudinary",
              "TypeScript",
              "Tailwind",
            ]}
            link="https://github.com/EddyChan1129/eddy-ecom"
          />

          {/* Project 2 */}
          <ProjectCard
            title="E-Booking System"
            description="A booking system for tutors with Google Calendar sync, built with modern web stack and styled using ShadCN components."
            techs={[
              "TypeScript",
              "Drizzle",
              "ShadCN",
              "Tailwind",
              "Neon",
              "Next.js",
              "Google Calendar API",
            ]}
            link="https://github.com/EddyChan1129/bookingSystem"
          />

          {/* Project 3 */}
          <ProjectCard
            title="TodoList Backend"
            description="A backend service for managing a todo list, built using Java, Spring Boot, and PostgreSQL. Containerized using Docker for easy deployment."
            techs={["Java", "Spring Boot", "PostgreSQL", "Docker"]}
            link="https://github.com/EddyChan1129/news-app"
          />

          {/* Project 4 */}
          <ProjectCard
            title="Mobile: Canada News"
            description="A simple React Native mobile app that fetches and displays the latest Canadian news using the NewsData API."
            techs={["React Native", "JavaScript", "NewsData API"]}
            link="https://github.com/EddyChan1129/news-app"
          />
        </div>
      </div>
      <BackgroundEffect />
    </section>
  );
};

// Reusable modern project card
const ProjectCard = ({ title, description, techs, link }) => (
  <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
    <h3 className="text-xl font-semibold mb-2 text-[#1a1a1a]">{title}</h3>
    <p className="text-[#444] mb-4 text-sm leading-relaxed">{description}</p>

    <Marquee items={techs} />

    <div className="flex justify-end">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
      >
        View Project →
      </a>
    </div>
  </div>
);
