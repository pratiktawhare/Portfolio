import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiExternalLink,
  FiDownload,
  FiArrowRight,
  FiBarChart2,
  FiCode,
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
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPydantic,
  SiPrisma,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiDocker,
  SiGithubactions,
  SiNginx,
  SiLinux,
  SiVercel,
  SiRender,
  SiGit,
  SiGithub,
  SiPostman,
  SiVite,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiStreamlit,
  SiJupyter,
  SiOpenai,
  SiGooglegemini,
  SiLangchain,
  SiHuggingface,
} from 'react-icons/si'
import { FaAws, FaBrain, FaRobot, FaDatabase } from 'react-icons/fa6'
import {
  TbBrain,
  TbTopologyStar3,
  TbSparkles,
  TbChartBar,
  TbVectorTriangle,
  TbSearch,
  TbMicrophone,
  TbEye,
  TbPrompt,
} from 'react-icons/tb'

// ============================================
// PERSONAL INFO
// ============================================

export const personalInfo = {
  name: 'Pratik Tawhare',
  title: 'AI Engineer & Full-Stack Developer',
  tagline:
    'Building agentic AI systems, multimodal RAG platforms, and production full-stack web applications deployed to the cloud.',
  bio: "I'm a B.E. Information Technology student at Savitribai Phule Pune University (CGPA: 9.20/10, Batch 2027). I specialize in building agentic AI, production RAG systems, and multimodal LLM applications — backed by robust full-stack architectures (FastAPI, Next.js, React) and deployed seamlessly with AWS, Docker, and CI/CD pipelines. Currently open to AI Engineer, Full-Stack, and Software Engineering opportunities.",
  email: 'pratiktawhare3@gmail.com',
  phone: '+91 9359737559',
  location: 'Pune, Maharashtra, India',
  education: "B.E. IT — SPPU '27 (CGPA: 9.20)",
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
    name: 'Portfolio',
    url: 'https://pratik-tawhare.vercel.app',
    icon: FiExternalLink,
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
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

// ============================================
// STATS
// ============================================

export const stats = [
  { value: 9.20, suffix: '/10', label: 'CGPA (SPPU)', decimals: 2 },
  { value: 5, suffix: '+', label: 'Projects Shipped', decimals: 0 },
  { value: 230, suffix: '+', label: 'LeetCode DSA in C++', decimals: 0 },
  { value: 43, suffix: '/2421', label: 'GFG Institute Rank', decimals: 0 },
]

// ============================================
// SKILLS (Prioritized: AI & Agents -> Full-Stack -> Cloud/DevOps -> Databases/Tools)
// ============================================

export const skills = [
  {
    category: 'AI / GenAI & Agents',
    items: [
      { name: 'LangGraph', icon: TbTopologyStar3 },
      { name: 'LangChain (LCEL)', icon: SiLangchain },
      { name: 'Agentic AI', icon: TbBrain },
      { name: 'RAG Systems', icon: FaBrain },
      { name: 'ChromaDB (Vector DB)', icon: TbVectorTriangle },
      { name: 'Multimodal AI', icon: TbEye },
      { name: 'Embeddings & Search', icon: TbSearch },
      { name: 'Hugging Face', icon: SiHuggingface },
      { name: 'Transformers.js', icon: TbSparkles },
      { name: 'Prompt Engineering', icon: TbPrompt },
    ],
  },
  {
    category: 'LLMs & AI APIs',
    items: [
      { name: 'OpenAI API', icon: SiOpenai },
      { name: 'Google Gemini', icon: SiGooglegemini },
      { name: 'Groq (LPU)', icon: FaBrain },
      { name: 'Mistral AI', icon: TbSparkles },
      { name: 'OpenAI Whisper', icon: TbMicrophone },
      { name: 'Tavily Search API', icon: TbSearch },
      { name: 'Sarvam AI', icon: FaRobot },
    ],
  },
  {
    category: 'Machine Learning & Analytics',
    items: [
      { name: 'Scikit-learn', icon: SiScikitlearn },
      { name: 'Machine Learning', icon: FaBrain },
      { name: 'Deep Learning', icon: TbChartBar },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Pandas', icon: SiPandas },
      { name: 'Streamlit', icon: SiStreamlit },
      { name: 'Power BI & Tableau', icon: FiBarChart2 },
      { name: 'EDA & ETL Pipelines', icon: FiCode },
      { name: 'Jupyter', icon: SiJupyter },
    ],
  },
  {
    category: 'Full-Stack & Backend',
    items: [
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'React.js', icon: SiReact },
      { name: 'Next.js 15', icon: SiNextdotjs },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'REST APIs', icon: FiExternalLink },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'WebSockets', icon: FiExternalLink },
      { name: 'JWT Auth', icon: FiExternalLink },
      { name: 'Pydantic & SQLModel', icon: SiPydantic },
      { name: 'Prisma ORM', icon: SiPrisma },
    ],
  },
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', icon: SiPython },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'C++ (OOP & DSA)', icon: SiCplusplus },
      { name: 'SQL', icon: FaDatabase },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS (EC2, S3, SQS)', icon: FaAws },
      { name: 'Docker', icon: SiDocker },
      { name: 'CI/CD (GitHub Actions)', icon: SiGithubactions },
      { name: 'Nginx', icon: SiNginx },
      { name: 'Linux', icon: SiLinux },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Render', icon: SiRender },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'ChromaDB', icon: TbVectorTriangle },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
      { name: 'SQLite', icon: SiSqlite },
    ],
  },
  {
    category: 'Tools & Ecosystem',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Postman', icon: SiPostman },
      { name: 'VS Code', icon: FiCode },
      { name: 'Vite', icon: SiVite },
      { name: 'FFmpeg & yt-dlp', icon: FiArrowRight },
    ],
  },
]

// ============================================
// PROJECTS
// ============================================

export const projects = [
  {
    name: 'MediLens',
    label: 'Agentic Clinical AI & Triage Platform',
    category: 'AI / Agents',
    description:
      'Autonomous clinical AI agent built with LangGraph that dynamically routes queries between local ChromaDB retrieval and live Tavily medical web search based on confidence thresholds (<0.60), with clinical safety guardrails. Features a hybrid RAG pipeline over 3,688 chunks from a 637-page medical reference (sub-100ms retrieval) with page-level citations, multimodal inputs (Groq Vision with Gemini fallback, Groq Whisper STT), client-side Web Speech TTS (<50ms), and an async FastAPI backend with Neon PostgreSQL.',
    tech: [
      'LangGraph',
      'LangChain',
      'FastAPI',
      'React 19',
      'ChromaDB',
      'Groq',
      'Gemini',
      'Tavily',
      'PostgreSQL',
      'Vercel',
      'Render',
    ],
    image: '/images/medilens.svg',
    demo: 'https://medilens-chatbot.vercel.app',
    github: 'https://github.com/pratiktawhare/MediLens-Chatbot',
  },
  {
    name: 'InsightFlow AI',
    label: 'AI Meeting & Video Analysis Assistant (RAG)',
    category: 'AI / Agents',
    description:
      'Conversational LLM and RAG assistant that transcribes, summarizes, and answers questions about meeting recordings and YouTube videos, replacing paid tools. Engineered a hybrid multilingual transcription engine (local Whisper for English + Sarvam AI for Hindi/Hinglish) and a LangChain LCEL pipeline with Mistral AI for summaries and action items. Features conversational RAG with ChromaDB & HuggingFace embeddings via an interactive Streamlit dashboard.',
    tech: [
      'Python',
      'LangChain (LCEL)',
      'OpenAI Whisper',
      'Mistral AI',
      'Sarvam AI',
      'ChromaDB',
      'HuggingFace',
      'Streamlit',
      'FFmpeg',
      'yt-dlp',
    ],
    image: '/images/insightflow.svg',
    demo: 'https://insightflow-ai-psi.streamlit.app/',
    github: 'https://github.com/pratiktawhare/AI-Video-Assistant',
  },
  {
    name: 'SkillSense',
    label: 'AI Resume Matching & Recruitment Platform',
    category: 'AI / Agents',
    description:
      'Full-stack recruitment platform with a privacy-first hybrid matching engine combining 384-dimensional semantic embeddings (cosine similarity), skill overlap, and experience fit for explainable match scores. Runs embeddings locally in Node.js with Transformers.js and ONNX Runtime to avoid API costs, with a custom NLP pipeline normalizing 90+ technical skills from PDF resumes.',
    tech: [
      'React.js',
      'Node.js',
      'Express',
      'Transformers.js',
      'ONNX Runtime',
      'NLP Embeddings',
      'MongoDB',
      'Tailwind CSS',
    ],
    image: '/images/skillsense.png',
    demo: 'https://skill-sense-psi.vercel.app',
    github: 'https://github.com/pratiktawhare/SkillSense',
  },
  {
    name: 'GenUI',
    label: 'AI UI Component Generator',
    category: 'AI / Agents',
    description:
      'Generative AI system that produces reusable, accessible React and Tailwind CSS UI components from natural language prompts using Google Gemini API. Integrated with Monaco Editor for real-time syntax-highlighted code editing, in-browser sandbox rendering, and rapid prototyping.',
    tech: ['React.js', 'Google Gemini', 'Tailwind CSS', 'Monaco Editor', 'Vite'],
    image: '/images/genui.png',
    demo: 'https://genui-pi.vercel.app',
    github: 'https://github.com/pratiktawhare/genui',
  },
  {
    name: 'Resume-Xpert',
    label: 'Full-Stack ATS Resume Builder',
    category: 'Full-Stack',
    description:
      'Production-ready full-stack resume builder featuring real-time preview, ATS-friendly templates, secure JWT authentication, and structured user data management in MongoDB with one-click high-fidelity PDF export.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'jsPDF', 'Tailwind CSS'],
    image: '/images/resumexpert.png',
    demo: 'https://resumexpert-frontend.vercel.app',
    github: 'https://github.com/pratiktawhare/resumeXpert',
  },
]

// ============================================
// ACHIEVEMENTS & CERTIFICATIONS
// ============================================

export const achievements = [
  {
    icon: '🧠',
    title: '230+ DSA Problems Solved in C++',
    detail: 'LeetCode · Arrays, Strings, Trees, Graphs, DP, Heaps & Recursion',
  },
  {
    icon: '💻',
    title: 'Institute Rank 43 / 2421',
    detail: 'GeeksforGeeks Platform · Consistent algorithmic problem solving',
  },
  {
    icon: '🏆',
    title: '1st Rank — IT Department (1 / 120)',
    detail: 'Semester 1 · Savitribai Phule Pune University',
  },
  {
    icon: '🎓',
    title: 'Academic Excellence — 9.20 / 10 CGPA',
    detail: 'B.E. Information Technology · SPPU (Batch 2023–2027)',
  },
  {
    icon: '📜',
    title: '100xDevs Cohort 3.0 (2026)',
    detail: 'Full-Stack Development, WebSockets & DevOps by Harkirat Singh',
  },
  {
    icon: '📊',
    title: 'The Ultimate Job Ready Data Science Course',
    detail: 'CodeWithHarry · Python, Machine Learning, Deep Learning & LLMs',
  },
  {
    icon: '☁️',
    title: 'AWS Certified Cloud Practitioner (CLF-C02)',
    detail: 'In Progress · Cloud architecture, security, compute, storage & networking',
  },
]

// ============================================
// CURRENTLY BUILDING
// ============================================

export const currentlyBuilding = {
  project: 'MediLens · Clinical AI Agent',
  emoji: '🤖',
}

// ============================================
// EXPERIENCE TIMELINE
// ============================================

export const experience = [
  {
    icon: '🤖',
    title: 'Software Engineering Intern',
    org: 'ConvoBrains, Gurgaon (Remote)',
    period: 'March 2026 – April 2026',
    description:
      'Engineered an AI Call Intelligence Platform. Designed LLM prompts using Gemini, Groq, and OpenAI for call classification, competitor detection, and scoring across 7 call sub-types producing structured outputs. Reduced 5+ PostgreSQL queries to 2–3 per call using merged lookups and Python asyncio.gather(). Developed queue-based pipelines on AWS EC2, S3, and SQS, integrated LLM microservices with REST APIs, and built 18 high-converting landing pages with Next.js 15 and Tailwind CSS.',
  },
  {
    icon: '📜',
    title: '100xDevs Cohort 3.0',
    org: 'Harkirat Singh',
    period: '2025 — 2026',
    description:
      'Intensive full-stack development and DevOps fellowship. Mastered modern full-stack architectures (React, Next.js, Node.js, WebSockets), containerization with Docker, CI/CD with GitHub Actions, AWS cloud infrastructure, and production deployments.',
  },
  {
    icon: '🎓',
    title: 'B.E. in Information Technology',
    org: 'Savitribai Phule Pune University',
    period: '2023 — 2027 (Expected)',
    description:
      'CGPA: 9.20/10. Ranked 1st out of 120 students in the IT Department (Semester 1). Deep academic and practical foundation in Data Structures & Algorithms (C++), Operating Systems, DBMS, System Design, and Artificial Intelligence.',
  },
  {
    icon: '💻',
    title: 'Self-Taught Developer & Open Source',
    org: 'AI & Full-Stack Projects',
    period: '2023 — Present',
    description:
      'Built and shipped 5+ production AI and full-stack applications including MediLens (clinical triage agent), InsightFlow AI (meeting analysis RAG), and SkillSense (local embeddings matching). Solved 230+ DSA problems on LeetCode & GeeksforGeeks (Institute Rank 43/2421).',
  },
]
