import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiExternalLink,
  FiDownload,
  FiArrowRight,
} from 'react-icons/fi'
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiX,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPrisma,

  SiDocker,
  SiGithubactions,
  SiNginx,
  SiGit,
  SiGithub,
  SiPostman,
  SiVite,
} from 'react-icons/si'
import { FaJava, FaAws } from 'react-icons/fa'

// ============================================
// PERSONAL INFO
// ============================================

export const personalInfo = {
  name: 'Pratik Tawhare',
  title: 'Full-Stack · AI · DevOps Developer',
  tagline:
    'I build scalable web applications and ship them to the cloud — end to end.',
  bio: "I'm a 3rd year B.E. Information Technology student at Savitribai Phule Pune University (CGPA: 9.16/10). I love building AI-powered, production-ready web applications — from designing efficient backend architectures to deploying them on AWS with Docker and CI/CD pipelines. Currently open to internships and full-time opportunities in Full-Stack, DevOps, or AI/ML engineering roles.",
  email: 'pratiktawhare3@gmail.com',
  location: 'Pune, Maharashtra, India',
  education: "B.E. IT — SPPU '27",
}

// ============================================
// SOCIAL LINKS
// ============================================

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/pratiktawhare',
    icon: FiGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/pratik-tawhare',
    icon: FiLinkedin,
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/pratik-tawhare/',
    icon: SiLeetcode,
  },
  {
    name: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/profile/pratiktawhare',
    icon: SiGeeksforgeeks,
  },
  {
    name: 'X',
    url: 'https://x.com/Pratik_2005_',
    icon: SiX,
  },
  {
    name: 'Email',
    url: 'mailto:pratiktawhare3@gmail.com',
    icon: FiMail,
  },
]

// ============================================
// NAV LINKS
// ============================================

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

// ============================================
// STATS
// ============================================

export const stats = [
  { value: 9.16, suffix: '/10', label: 'CGPA', decimals: 2 },
  { value: 3, suffix: '+', label: 'Projects Shipped', decimals: 0 },
  { value: 100, suffix: '+', label: 'DSA Problems Solved', decimals: 0 },
  { value: 70, suffix: '/2421', label: 'GFG Institute Rank', decimals: 0 },
]

// ============================================
// SKILLS
// ============================================

export const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'C++', icon: SiCplusplus },
      { name: 'Java', icon: FaJava },
      { name: 'Python', icon: SiPython },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'REST APIs', icon: FiExternalLink },
      { name: 'JWT', icon: FiExternalLink },
      { name: 'WebSockets', icon: FiExternalLink },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Prisma', icon: SiPrisma },
    ],
  },
  {
    category: 'DevOps & Cloud',
    items: [
      { name: 'AWS', icon: FaAws },
      { name: 'Docker', icon: SiDocker },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Nginx', icon: SiNginx },
      { name: 'CI/CD', icon: FiArrowRight },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Postman', icon: SiPostman },
      { name: 'Vite', icon: SiVite },
    ],
  },
]

// ============================================
// PROJECTS
// ============================================

export const projects = [
  {
    name: 'SkillSense',
    label: 'AI Resume Matching Platform',
    description:
      'AI-powered resume-job matching platform that extracts 90+ skills from PDF resumes using a custom NLP pipeline. Generates 384-dimensional embeddings for privacy-first semantic matching with sub-500ms API response times.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Transformers.js', 'Recharts'],
    image: '/images/skillsense.png',
    demo: 'https://skill-sense-psi.vercel.app',
    github: 'https://github.com/pratiktawhare/skillsense',
  },
  {
    name: 'Resume-Xpert',
    label: 'Full-Stack Resume Builder',
    description:
      'Full-stack resume builder with real-time preview, ATS-friendly templates, secure JWT authentication, and efficient user data management with one-click PDF export.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'jsPDF'],
    image: '/images/resumexpert.png',
    demo: 'https://resumexpert.pratik.codes',
    github: 'https://github.com/pratiktawhare/resumeXpert',
  },
  {
    name: 'GenUI',
    label: 'AI UI Component Generator',
    description:
      'AI-powered system that generates reusable UI components from natural language prompts using Google Gemini API. Features integrated Monaco Editor for real-time code preview and prototyping.',
    tech: ['React.js', 'Tailwind CSS', 'Gemini API', 'Monaco'],
    image: '/images/genui.png',
    demo: 'https://genui.pratik.codes',
    github: 'https://github.com/pratiktawhare/genui',
  },
]

// ============================================
// ACHIEVEMENTS
// ============================================

export const achievements = [
  {
    icon: '💻',
    title: 'Institute Rank 70 / 2421',
    detail: 'GeeksforGeeks Platform',
  },
  {
    icon: '🧠',
    title: '100+ DSA Problems Solved',
    detail: 'LeetCode · C++ · Arrays, Strings, Linked List, Recursion',
  },
  {
    icon: '🏆',
    title: '1st Rank — IT Department',
    detail: 'Semester 1 · Savitribai Phule Pune University',
  },
  {
    icon: '🎓',
    title: 'CGPA: 9.16 / 10',
    detail: 'B.E. Information Technology · SPPU',
  },
  {
    icon: '📜',
    title: '100xDevs Cohort 3.0',
    detail: 'Full-Stack Development & DevOps · 2026',
  },
]
