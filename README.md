# Personal Portfolio

This repository features a stylish and responsive personal portfolio built with **React**, **Vite**, and **TailwindCSS**. It demonstrates modern frontend techniques, including fluid animations, adaptive layouts, and dynamic UI components.

## ✨ Key Features

- **Modern Aesthetics:** Minimalist SaaS-style design with a frosted glass navbar and subtle motion effects.
- **Fully Responsive:** Adapts seamlessly to desktops, tablets, and mobile devices.
- **Interactive Elements:** Smoothly animated sections and a mobile-first hamburger menu.
- **Fast Performance:** Powered by Vite for blazing-fast builds and TailwindCSS for streamlined styling.

## 🛠 Tech Stack

- **React:** Component-driven architecture for building UIs.
- **Vite:** Lightning-fast bundler for modern frontend development.
- **TailwindCSS:** Utility-first CSS for rapid and consistent styling.
- **JavaScript (ES6+):** Leveraging modern syntax and best practices.

## 🚀 Getting Started

1. **Clone the project:**

   ```bash
   git clone https://github.com/your-username/your-portfolio.git
   cd your-portfolio
   ```

2. **Install project dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   Visit [http://localhost:5173](http://localhost:5173) to view the app in your browser.

## 📦 Production Build

To generate an optimized build:

```bash
npm run build
```

Preview the production output locally with:

```bash
npm run preview
```

## 📁 Project Structure

```
your-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── LoadingScreen.jsx
│   │   └── sections/
│   │       ├── About.jsx
│   │       ├── Background.jsx
│   │       ├── Contact.jsx
│   │       ├── Home.jsx
│   │       └── Projects.jsx
│   ├── index.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Customization

- **Styling:** Modify `index.css` or use Tailwind utility classes to customize appearance.
- **Components:** Tweak or extend reusable components inside `src/components/`.
- **Content Sections:** Update the files in `src/components/sections/` to reflect your personal information, portfolio items, and contact form.
