// ============================================================
// PORTFOLIO DATA — Edit this file to personalise everything!
// ============================================================

export const personalInfo = {
  name: 'Habiba Shah',
  title: 'Software Engineering Student & App Developer',
  tagline:
    'I build thoughtful digital experiences, mobile applications, and beautiful interfaces that turn ideas into working products.',
  email: 'habiba@example.com',           // ← Replace with real email
  github: 'https://github.com/habibashah0789-a11y',
  linkedin: 'https://www.linkedin.com/in/habiba-shah-3337883a8/',
  instagram: '',
  location: 'Peshawar, Pakistan',
  avatar: '/avatar.jpg',
}

export const stats = [
  { value: '2+', label: 'Semesters Completed' },
  { value: '1+', label: 'GitHub Projects' },
  { value: '10+', label: 'Technologies Explored' },
]

// ---- ABOUT ----
// Text sourced from LinkedIn profile — not fabricated.
export const aboutText = [
  "I'm a BS Software Engineering student (2nd semester) at the University of Engineering & Technology Peshawar, with a strong and growing foundation in software development, data structures, and problem-solving.",
  'With an academic background in Pre-Medical studies, I bring a unique analytical mindset and disciplined approach to engineering challenges. Passionate about building efficient, scalable solutions and continuously learning new technologies.',
  'I am eager to apply my skills through real-world projects and contribute to innovative engineering teams.',
]

// ---- SKILLS ----
export const skills = [
  {
    category: 'Programming',
    icon: 'Code2',
    color: 'from-pink-300 to-rose-400',
    items: [
      { name: 'JavaScript', desc: 'ES6+, async/await, DOM', icon: 'Braces' },
      { name: 'TypeScript', desc: 'Type-safe development', icon: 'FileCode' },
      { name: 'Python', desc: 'Scripting & automation', icon: 'Terminal' },
      { name: 'Java', desc: 'OOP & backend basics', icon: 'Coffee' },
      { name: 'C++', desc: 'Data structures & algorithms', icon: 'Cpu' },
    ],
  },
  {
    category: 'App Development',
    icon: 'Smartphone',
    color: 'from-violet-300 to-purple-400',
    items: [
      { name: 'Flutter', desc: 'Beautiful cross-platform apps', icon: 'Layers' },
      { name: 'React Native', desc: 'JS-powered mobile apps', icon: 'Smartphone' },
      { name: 'Android', desc: 'Native Android development', icon: 'Smartphone' },
    ],
  },
  {
    category: 'Web Development',
    icon: 'Globe',
    color: 'from-purple-300 to-pink-400',
    items: [
      { name: 'HTML', desc: 'Semantic markup', icon: 'Code' },
      { name: 'CSS', desc: 'Styling & animations', icon: 'Palette' },
      { name: 'React', desc: 'Component-based UIs', icon: 'RefreshCw' },
      { name: 'Next.js', desc: 'Full-stack React framework', icon: 'Zap' },
    ],
  },
  {
    category: 'Tools & Design',
    icon: 'Wrench',
    color: 'from-rose-300 to-violet-400',
    items: [
      { name: 'Git', desc: 'Version control', icon: 'GitBranch' },
      { name: 'GitHub', desc: 'Collaboration & open source', icon: 'Github' },
      { name: 'VS Code', desc: 'Primary IDE', icon: 'Code2' },
      { name: 'Figma', desc: 'UI/UX design', icon: 'Figma' },
    ],
  },
]

// ---- PROJECTS ----
// Academy App: linked to the real GitHub repo (private).
// No details are fabricated — only the repository name and URL are known.
export const projects = [
  {
    id: 1,
    title: 'Academy App',
    subtitle: 'GitHub Project',
    description:
      'A project hosted on GitHub. The repository is currently private — visit the repository link to request access or see full project details.',
    tech: [] as string[],
    github: 'https://github.com/habibashah0789-a11y/Acdemy-app',
    demo: '',
    image: '/projects/academy-app.png',
    featured: true,
    color: 'from-pink-400 to-violet-500',
    size: 'large',
    isPrivate: true,
    repoName: 'habibashah0789-a11y/Acdemy-app',
  },
  {
    id: 2,
    title: 'Project Name 2',
    subtitle: 'Web Application',
    description:
      'A full-stack web application with modern UI and robust backend. Replace this with your actual project description.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    github: 'https://github.com/habibashah0789-a11y',
    demo: '',
    image: '/projects/project2.png',
    featured: false,
    color: 'from-violet-400 to-purple-500',
    size: 'medium',
    isPrivate: false,
    repoName: '',
  },
  {
    id: 3,
    title: 'Project Name 3',
    subtitle: 'UI/UX Design',
    description:
      'A beautifully designed interface with a focus on user experience and accessibility. Replace this with your actual project description.',
    tech: ['Figma', 'Prototyping', 'User Research'],
    github: 'https://github.com/habibashah0789-a11y',
    demo: '',
    image: '/projects/project3.png',
    featured: false,
    color: 'from-rose-300 to-pink-500',
    size: 'medium',
    isPrivate: false,
    repoName: '',
  },
  {
    id: 4,
    title: 'Project Name 4',
    subtitle: 'Software Engineering',
    description:
      'An academic/personal software engineering project showcasing system design and implementation. Replace this with your actual project description.',
    tech: ['Python', 'Java', 'SQL'],
    github: 'https://github.com/habibashah0789-a11y',
    demo: '',
    image: '/projects/project4.png',
    featured: false,
    color: 'from-purple-400 to-violet-500',
    size: 'small',
    isPrivate: false,
    repoName: '',
  },
]

// ---- EXPERIENCE / TIMELINE ----
// Based only on verified LinkedIn profile information.
export const timeline = [
  {
    id: 1,
    role: 'BS Software Engineering',
    org: 'University of Engineering & Technology Peshawar',
    period: '2026 – Present',
    description:
      'Currently in 2nd semester, studying software engineering fundamentals, data structures, algorithms, and building real-world projects.',
    icon: 'GraduationCap',
    color: 'from-pink-400 to-rose-500',
  },
  {
    id: 2,
    role: 'Certificate of Completion — Basic Computer Literacy',
    org: 'KOICA & UNWOMEN — D4WEE Project',
    period: 'June – August 2026',
    description:
      'Completed the Digitalization for Women\'s Economic Empowerment (D4WEE) program, earning a Certificate of Completion funded by KOICA and UNWOMEN.',
    icon: 'Award',
    color: 'from-violet-400 to-purple-500',
  },
  {
    id: 3,
    role: 'App & Web Development',
    org: 'Personal & Academic Projects',
    period: '2026 – Present',
    description:
      'Building cross-platform mobile applications and web projects, exploring Flutter, React, and Next.js through hands-on practice.',
    icon: 'Smartphone',
    color: 'from-rose-300 to-pink-500',
  },
  {
    id: 4,
    role: 'Future Goal',
    org: 'Production-Ready Software',
    period: 'Coming Soon',
    description:
      'Aiming to contribute to impactful products, join a great team, and build software that makes a real difference.',
    icon: 'Rocket',
    color: 'from-purple-400 to-violet-500',
  },
]

// ---- APP SHOWCASE ----
export const appFeatures = [
  'Mobile UI & Animations',
  'Application Logic',
  'API Integration',
  'Authentication',
  'Database Integration',
  'Responsive Layouts',
]

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#featured-projects', label: 'GitHub' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]
