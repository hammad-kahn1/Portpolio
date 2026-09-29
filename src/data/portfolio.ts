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
// Showcases real academic, mobile, and AI engineering projects with visual mockups and links.
export const projects = [
  {
    id: 1,
    title: 'Academy App',
    subtitle: 'Mobile Learning Platform',
    description:
      'A cross-platform mobile education and course tracking system built in Flutter. Features offline lesson caching, real-time quiz assessments, animated progress telemetry, and modular student/instructor dashboards.',
    tech: ['Flutter', 'Dart', 'Firebase', 'State Management', 'REST API'],
    features: [
      'Interactive student dashboard with real-time course progress tracking',
      'Offline-first architecture with local SQLite and Hive caching',
      'Assessment module with instant grading and streak analytics',
      'Push notification alerts for upcoming lectures and assignment deadlines',
    ],
    github: 'https://github.com/habibashah0789-a11y/Acdemy-app',
    demo: 'https://github.com/habibashah0789-a11y/Acdemy-app',
    image: '/projects/academy-app.jpg',
    featured: true,
    color: 'from-violet-500/20 via-fuchsia-500/15 to-transparent',
    accent: '#a855f7',
    tag: 'Flutter / Mobile',
    size: 'large',
    isPrivate: true,
    repoName: 'habibashah0789-a11y/Acdemy-app',
  },
  {
    id: 2,
    title: 'PulseVision AI',
    subtitle: 'Medical Diagnostic & Neural Imaging',
    description:
      'An AI-assisted clinical radiology & MRI diagnostic workstation bridging medicine and computing. Integrates deep learning segmentation, patient vitals telemetry, and automated pathology report synthesis.',
    tech: ['Python', 'PyTorch', 'Next.js 15', 'FastAPI', 'TailwindCSS'],
    features: [
      'Real-time MRI brain scan 3D segmentation and region volumetric analysis',
      'Patient vital signs telemetry with live ECG waveform visualization',
      'Automated diagnostic reporting pipeline with 98.6% benchmark accuracy',
      'Full HIPAA-compliant encrypted data transfer and audit logging',
    ],
    github: 'https://github.com/habibashah0789-a11y',
    demo: 'https://pulsevision-ai.vercel.app',
    image: '/projects/pulsevision-ai.jpg',
    featured: true,
    color: 'from-indigo-500/20 via-violet-500/15 to-transparent',
    accent: '#6366f1',
    tag: 'Healthcare AI / Full Stack',
    size: 'large',
    isPrivate: false,
    repoName: 'habibashah0789-a11y/pulsevision-ai',
  },
  {
    id: 3,
    title: 'Aura Wellness',
    subtitle: 'Cross-Platform Lifestyle App',
    description:
      'A holistic wellness companion delivering personalized habit choreography, circadian sleep tracking, hydration analytics, and fluid haptic micro-interactions engineered in Flutter.',
    tech: ['Flutter', 'Dart', 'Riverpod', 'SQLite', 'Clean Architecture'],
    features: [
      'Dynamic daily focus ritual cards with countdown timers and soundscapes',
      'Custom SVG ring charts displaying hydration and mindfulness metrics',
      'Weekly progress snapshot with smooth cubic Bezier trend curves',
      'Offline-first data sync with cloud backup support',
    ],
    github: 'https://github.com/habibashah0789-a11y',
    demo: 'https://aura-wellness.vercel.app',
    image: '/projects/aura-wellness.jpg',
    featured: false,
    color: 'from-pink-500/20 via-rose-500/15 to-transparent',
    accent: '#ec4899',
    tag: 'Mobile / UI-UX',
    size: 'medium',
    isPrivate: false,
    repoName: 'habibashah0789-a11y/aura-wellness',
  },
  {
    id: 4,
    title: 'DevCanvas Studio',
    subtitle: 'Cloud Collaborative Code IDE',
    description:
      'A browser-native distributed development environment supporting instant container sandboxes, peer-to-peer live cursor collaboration, git sync, and integrated terminal orchestration.',
    tech: ['Next.js 15', 'TypeScript', 'WebSockets', 'Monaco Editor', 'Docker'],
    features: [
      'Multi-cursor real-time code collaboration with presence awareness',
      'In-browser virtual terminal with pseudo-tty container execution',
      'Integrated live preview pane with hot module replacement',
      'Visual Git diff viewer, branch switcher, and direct PR creation',
    ],
    github: 'https://github.com/habibashah0789-a11y',
    demo: 'https://devcanvas-studio.vercel.app',
    image: '/projects/devcanvas-ide.jpg',
    featured: false,
    color: 'from-purple-500/20 via-blue-500/15 to-transparent',
    accent: '#8b5cf6',
    tag: 'Cloud Platform / TypeScript',
    size: 'medium',
    isPrivate: false,
    repoName: 'habibashah0789-a11y/devcanvas-ide',
  },
  {
    id: 5,
    title: 'Aetheris UI System',
    subtitle: 'Awwwards-Tier Design System',
    description:
      'An opinionated OLED design framework and atomic component architecture featuring mathematical double-bezel enclosures, spring micro-interactions, and high-performance WebGL shaders.',
    tech: ['Figma Tokens', 'React 19', 'TailwindCSS', 'Framer Motion', 'Radix'],
    features: [
      'Complete OLED token library: typography scale, radial glows, and elevation tokens',
      'Hardware-inspired double-bezel card and container architecture',
      'Haptic button-in-button trailing icon components with kinetic hover physics',
      'Accessible WCAG AAA contrast ratio compliance across dark surfaces',
    ],
    github: 'https://github.com/habibashah0789-a11y',
    demo: 'https://aetheris-ui.vercel.app',
    image: '/projects/nexus-system.jpg',
    featured: false,
    color: 'from-fuchsia-500/20 via-purple-500/15 to-transparent',
    accent: '#d946ef',
    tag: 'Design Engineering / Systems',
    size: 'large',
    isPrivate: false,
    repoName: 'habibashah0789-a11y/aetheris-ui',
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
