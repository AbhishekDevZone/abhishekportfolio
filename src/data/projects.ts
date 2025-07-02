export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: 'Web App' | 'E-commerce' | 'Landing Page' | 'Mobile App';
  challenges: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "TaskFlow - Project Management App",
    description: "A comprehensive project management solution with real-time collaboration features.",
    longDescription: "TaskFlow is a modern project management application built with React and TypeScript. It features real-time collaboration, task management, team communication, and progress tracking. The app includes drag-and-drop functionality, file sharing, and integration with popular development tools.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "TypeScript", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://taskflow-demo.netlify.app",
    githubUrl: "https://github.com/alexdev/taskflow",
    category: "Web App",
    challenges: [
      "Implementing real-time collaboration without conflicts",
      "Optimizing performance for large datasets",
      "Creating intuitive drag-and-drop interfaces"
    ]
  },
  {
    id: 2,
    title: "EcoShop - Sustainable E-commerce",
    description: "An eco-friendly e-commerce platform promoting sustainable products and practices.",
    longDescription: "EcoShop is a full-stack e-commerce solution focused on sustainable products. Features include product filtering, shopping cart, secure payments, user authentication, and an admin dashboard for inventory management.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Express.js", "PostgreSQL", "Stripe", "Redux", "Material-UI"],
    liveUrl: "https://ecoshop-demo.vercel.app",
    githubUrl: "https://github.com/alexdev/ecoshop",
    category: "E-commerce",
    challenges: [
      "Integrating secure payment processing",
      "Building responsive product galleries",
      "Implementing advanced search and filtering"
    ]
  },
  {
    id: 3,
    title: "TechStartup Landing Page",
    description: "A modern, conversion-optimized landing page for a tech startup.",
    longDescription: "A high-converting landing page designed for a SaaS startup. Features include animated sections, testimonials, pricing tables, and integrated contact forms. Built with performance and SEO in mind.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Next.js", "Framer Motion", "Tailwind CSS", "Contentful"],
    liveUrl: "https://techstartup-landing.vercel.app",
    githubUrl: "https://github.com/alexdev/techstartup-landing",
    category: "Landing Page",
    challenges: [
      "Achieving 95+ Lighthouse performance score",
      "Creating smooth scroll animations",
      "Optimizing for mobile conversions"
    ]
  },
  {
    id: 4,
    title: "WeatherWise - Weather Dashboard",
    description: "A beautiful weather application with forecasts, maps, and personalized insights.",
    longDescription: "WeatherWise provides detailed weather information with beautiful visualizations. Features include location-based weather, 7-day forecasts, weather maps, and personalized recommendations based on weather conditions.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API", "Geolocation API"],
    liveUrl: "https://weatherwise-app.netlify.app",
    githubUrl: "https://github.com/alexdev/weatherwise",
    category: "Web App",
    challenges: [
      "Working with multiple weather APIs",
      "Creating interactive weather visualizations",
      "Handling geolocation and permissions"
    ]
  },
  {
    id: 5,
    title: "CryptoTracker - Portfolio Manager",
    description: "Real-time cryptocurrency portfolio tracking with advanced analytics.",
    longDescription: "A comprehensive cryptocurrency portfolio manager that tracks real-time prices, portfolio performance, and market trends. Includes features like price alerts, portfolio analytics, and market news integration.",
    image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Redux", "Chart.js", "CoinGecko API", "Firebase", "PWA"],
    liveUrl: "https://cryptotracker-pro.vercel.app",
    githubUrl: "https://github.com/alexdev/cryptotracker",
    category: "Web App",
    challenges: [
      "Handling real-time data updates efficiently",
      "Creating complex financial charts",
      "Implementing secure user authentication"
    ]
  },
  {
    id: 6,
    title: "FoodieHub - Restaurant Finder",
    description: "A mobile-responsive app for discovering and reviewing local restaurants.",
    longDescription: "FoodieHub helps users discover great restaurants nearby with features like location-based search, reviews, ratings, photo sharing, and reservation booking. Built as a Progressive Web App for mobile-first experience.",
    image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "PWA", "Google Maps API", "Firebase", "Tailwind CSS", "IndexedDB"],
    liveUrl: "https://foodiehub-pwa.netlify.app",
    githubUrl: "https://github.com/alexdev/foodiehub",
    category: "Mobile App",
    challenges: [
      "Building offline-first functionality",
      "Integrating maps and geolocation",
      "Optimizing for mobile performance"
    ]
  }
];