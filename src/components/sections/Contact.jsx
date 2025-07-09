import { useState } from "react";
import emailjs from "emailjs-com";
import BackgroundEffect from "../BackgroundEffect";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-[#f7f9fc] relative bg-gradient-to-b from-[#f7f9fc] via-[#e8f4ff] to-[#d9f0ff] 
             bg-cover bg-center"
    >
      <BackgroundEffect />
      <div className="w-full max-w-xl px-6">
        <h2 className="text-4xl font-semibold text-center mb-10 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent tracking-tight">
          Leave Your Message
        </h2>

        <form
          className="space-y-6 bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-gray-200 shadow-md"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            placeholder="Your Name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-[#1a1a1a] bg-white/90 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-blue-50 transition"
          />

          <input
            type="email"
            name="email"
            required
            value={formData.email}
            placeholder="example@email.com"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-[#1a1a1a] bg-white/90 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-blue-50 transition"
          />

          <textarea
            name="message"
            rows={5}
            required
            value={formData.message}
            placeholder="Your message..."
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-[#1a1a1a] bg-white/90 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-blue-50 transition"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-xl font-medium hover:bg-blue-600 hover:shadow-md transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
