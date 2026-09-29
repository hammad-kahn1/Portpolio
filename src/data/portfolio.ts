// ============================================================
// PORTFOLIO DATA — Edit this file to personalize everything!
// ============================================================

export const personalInfo = {
  name: "Habiba Shah",
  title: "Software Engineering Student & App Developer",
  tagline: "I build thoughtful digital experiences, mobile applications, and beautiful interfaces that turn ideas into working products.",
  email: "habiba@example.com",        // ← Replace with real email
  github: "https://github.com/habiba-shah",   // ← Replace with real GitHub
  linkedin: "https://linkedin.com/in/habiba-shah", // ← Replace with real LinkedIn
  instagram: "",                      // ← Add if desired
  location: "Pakistan",
  avatar: "/avatar.jpg",              // ← Add your photo to /public/avatar.jpg
};

export const stats = [
  { value: "3+", label: "Projects Built" },
  { value: "2+", label: "Apps Developed" },
  { value: "10+", label: "Technologies Explored" },
];

export const aboutText = [
  "Hi! I'm Habiba, a Software Engineering student with a deep passion for crafting digital experiences that are both functional and delightful.",
  "I specialize in mobile app development and web technologies — from designing smooth Flutter UIs to building full-stack web applications. I care just as much about how things look as how they work.",
  "When I'm not coding, I'm exploring new design trends, learning new technologies, and dreaming up ideas for the next app I want to build.",
];

// ---- SKILLS ----
export const skills = [
  {
    category: "Programming",
    icon: "Code2",
    color: "from-pink-300 to-rose-400",
    items: [
      { name: "JavaScript", desc: "ES6+, async/await, DOM", icon: "Braces" },
      { name: "TypeScript", desc: "Type-safe development", icon: "FileCode" },
      { name: "Python", desc: "Scripting & automation", icon: "Terminal" },
      { name: "Java", desc: "OOP & backend basics", icon: "Coffee" },
      { name: "C++", desc: "Data structures & algorithms", icon: "Cpu" },
    ],
  },
  {
    category: "App Development",
    icon: "Smartphone",
    color: "from-lavender-300 to-blush-400",
    items: [
      { name: "Flutter", desc: "Beautiful cross-platform apps", icon: "Layers" },
      { name: "React Native", desc: "JS-powered mobile apps", icon: "Smartphone" },
      { name: "Android", desc: "Native Android development", icon: "Smartphone" },
    ],
  },
  {
    category: "Web Development",
    icon: "Globe",
    color: "from-purple-300 to-pink-400",
    items: [
      { name: "HTML", desc: "Semantic markup", icon: "Code" },
      { name: "CSS", desc: "Styling & animations", icon: "Palette" },
      { name: "React", desc: "Component-based UIs", icon: "RefreshCw" },
      { name: "Next.js", desc: "Full-stack React framework", icon: "Zap" },
    ],
  },
  {
    category: "Tools & Design",
    icon: "Wrench",
    color: "from-rose-300 to-lavender-400",
    items: [
      { name: "Git", desc: "Version control", icon: "GitBranch" },
      { name: "GitHub", desc: "Collaboration & open source", icon: "Github" },
      { name: "VS Code", desc: "Primary IDE", icon: "Code2" },
      { name: "Figma", desc: "UI/UX design", icon: "Figma" },
    ],
  },
];

// ---- PROJECTS ----
export const projects = [
  {
    id: 1,
    title: "Project Name 1",
    subtitle: "Mobile Application",
    description: "A mobile application built with Flutter featuring beautiful UI, authentication, and real-time data. Replace this with your actual project description.",
    tech: ["Flutter", "Firebase", "Dart"],
    github: "https://github.com/habiba-shah",
    demo: "",
    image: "/projects/project1.png",   // ← Add screenshot to /public/projects/
    featured: true,
    color: "from-pink-400 to-rose-500",
    size: "large",
  },
  {
    id: 2,
    title: "Project Name 2",
    subtitle: "Web Application",
    description: "A full-stack web application with modern UI and robust backend. Replace this with your actual project description.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    github: "https://github.com/habiba-shah",
    demo: "",
    image: "/projects/project2.png",
    featured: true,
    color: "from-lavender-400 to-purple-500",
    size: "medium",
  },
  {
    id: 3,
    title: "Project Name 3",
    subtitle: "UI/UX Design",
    description: "A beautifully designed interface with a focus on user experience and accessibility. Replace this with your actual project description.",
    tech: ["Figma", "Prototyping", "User Research"],
    github: "https://github.com/habiba-shah",
    demo: "",
    image: "/projects/project3.png",
    featured: false,
    color: "from-blush-300 to-pink-500",
    size: "medium",
  },
  {
    id: 4,
    title: "Project Name 4",
    subtitle: "Software Engineering",
    description: "An academic/personal software engineering project showcasing system design and implementation. Replace this with your actual project description.",
    tech: ["Python", "Java", "SQL"],
    github: "https://github.com/habiba-shah",
    demo: "",
    image: "/projects/project4.png",
    featured: false,
    color: "from-purple-400 to-lavender-500",
    size: "small",
  },
];

// ---- EXPERIENCE / TIMELINE ----
export const timeline = [
  {
    id: 1,
    role: "Software Engineering Student",
    org: "Your University / Institute",   // ← Replace with real institution
    period: "20XX – Present",             // ← Replace with real dates
    description: "Studying software engineering fundamentals, data structures, algorithms, software design patterns, and building real-world projects.",
    icon: "GraduationCap",
    color: "from-pink-400 to-rose-500",
  },
  {
    id: 2,
    role: "App Development",
    org: "Personal & Academic Projects",
    period: "20XX – Present",
    description: "Building cross-platform mobile applications using Flutter and React Native, integrating APIs, authentication, and databases.",
    icon: "Smartphone",
    color: "from-lavender-400 to-purple-500",
  },
  {
    id: 3,
    role: "UI/UX Development",
    org: "Self-Learning & Practice",
    period: "20XX – Present",
    description: "Designing modern, intuitive interfaces using Figma and implementing them with pixel-perfect precision.",
    icon: "Palette",
    color: "from-blush-400 to-pink-500",
  },
  {
    id: 4,
    role: "Future Goal",
    org: "Production-Ready Software",
    period: "Coming Soon",
    description: "Aiming to contribute to impactful products, join a great team, and build software that makes a real difference.",
    icon: "Rocket",
    color: "from-purple-400 to-lavender-500",
  },
];

// ---- APP SHOWCASE (placeholder) ----
export const appFeatures = [
  "Mobile UI & Animations",
  "Application Logic",
  "API Integration",
  "Authentication",
  "Database Integration",
  "Responsive Layouts",
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
