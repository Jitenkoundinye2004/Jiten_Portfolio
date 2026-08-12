// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import Render from "./assets/tech_logo/render.png";

// Project Section Logo's
import interviewLogo from './assets/projectlogo/interviewlogo.png';
import lungCancerLogo from './assets/projectlogo/lunglogo.png';
import weatherApp from './assets/projectlogo/weather.png';
import portfolio from './assets/projectlogo/portfolio.png';
import resumeBuilder from './assets/projectlogo/ResumeBuilder.png';
import smartSeedingDSS from './assets/projectlogo/Smartseeding.png';
import meshLogo from './assets/projectlogo/upi.png';
import dpiLogo from './assets/projectlogo/dpi.png';

// Education Section Logo's
import mgmLogo from './assets/edu_logo/MGM.png';
import diplomaLogo from './assets/edu_logo/govt.png';
import boardLogo from './assets/edu_logo/board.png';

// Experience logo
import zidioLogo from "./assets/Experience_logo/zidio.jpeg";
import softcaddLogo from "./assets/Experience_logo/softcadd.png";

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript (ES6+)', logo: javascriptLogo },
      { name: 'React.js', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Responsive Design', logo: null },
      { name: 'React Testing Library', logo: null },
    ],
  },
  {
    title: 'Backend & DB',
    skills: [
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'Express.js', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MongoDB Atlas', logo: null },
      { name: 'RESTful APIs', logo: null },
      { name: 'JWT & RBAC', logo: null },
    ],
  },
  {
    title: 'DevOps & Languages',
    skills: [
      { name: 'TypeScript', logo: null },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Docker', logo: null },
      { name: 'CI/CD pipelines', logo: null },
      { name: 'AWS', logo: null },
    ],
  },
  {
    title: 'Tools & Agile',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Jest', logo: null },
      { name: 'Agile / Scrum', logo: null },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: softcaddLogo,
    role: "Software Developer Intern",
    company: "Softcadd Technologies, Remote",
    date: "Nov 2025 - Present",
    desc: [
      "Engineer full-stack web modules using React.js, Node.js, Express.js, and MongoDB, delivering 10+ production features and reducing duplicate implementation work by ~25-30% through 20+ shared UI components and API handlers.",
      "Implement and integrate 15-20 RESTful APIs secured with JWT authentication and RBAC, tightening token validation and permission checks and reducing unauthorized access issues in test environments to near zero.",
      "Containerize backend services with Docker and streamline CI/CD pipelines on AWS, replacing multi-step manual releases with automated weekly deployments and cutting release effort per engineer by ~60-70%."
    ],
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "Docker",
      "CI/CD pipelines",
      "AWS",
      "JWT & RBAC",
      "RESTful APIs"
    ],
  },
  {
    id: 1,
    img: zidioLogo,
    role: "MERN Stack Developer Intern",
    company: "Zidio Development, Remote",
    date: "Jul 2025 - Oct 2025",
    desc: [
      "Developed and refactored 20+ reusable React components and Express.js endpoints, reducing duplicate UI/API patterns by ~30% and helping the team ship new client-facing features faster across multiple projects.",
      "Diagnosed and fixed 40-60 front-end and REST API integration bugs using browser dev tools and Postman, improving stability of key user flows and lowering recurring issues across releases by ~25-35%.",
      "Collaborated with senior developers to standardize component and API structures across projects, reducing onboarding time for new tasks by ~20-30% and increasing code review approvals on first pass."
    ],
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JavaScript",
      "Postman",
      "Git",
      "Agile / Scrum"
    ],
  },
];

export const projects = [
  {
    id: 6,
    title: "UPI Without Internet (Live Web Simulation)",
    description: "Engineered a decentralized offline peer-to-peer payment routing protocol capable of securely transferring funds across untrusted intermediaries with 0% data leakage.",
    bullets: [
      "Engineered a decentralized offline peer-to-peer payment routing protocol capable of securely transferring funds across untrusted intermediaries with 0% data leakage by implementing a strict Hybrid Cryptography pipeline utilizing AES-256-GCM and RSA-2048 key encapsulation.",
      "Eliminated double-spending and duplicate transaction processing, achieving exact-once settlement guarantees for concurrent network uploads by engineering an atomic idempotency cache utilizing SHA-256 hashing on incoming ciphertext payloads.",
      "Prevented malicious replay attacks on the central ledger, automatically dropping 100% of expired or intercepted packets before decryption by embedding strict cryptographic freshness checks (UUID nonces and 24-hour TTLs) directly into the encrypted payload structure."
    ],
    image: meshLogo,
    tags: ["Node.js", "Express", "React.js", "TypeScript", "SQLite", "Tailwind CSS", "Cryptography", "RSA/AES-GCM"],
    github: "https://github.com/Jitenkoundinye2004/UPI-Without-Internet",
    webapp: "https://offline-mesh-payment-protocol.vercel.app/",
  },
  {
    id: 7,
    title: "Deep Packet Inspection Platform",
    description: "Engineered a Deep Packet Inspection engine to parse Ethernet, IPv4, TCP/UDP packets from PCAP files and track network connections using five-tuple flow identification.",
    bullets: [
      "Engineered a Deep Packet Inspection engine to parse Ethernet, IPv4, TCP/UDP packets from PCAP files and track network connections using five-tuple flow identification.",
      "Implemented TLS SNI/HTTP Host extraction, application classification, and rule-based traffic filtering to identify and analyze network traffic without decrypting encrypted payloads.",
      "Architected concurrent packet processing using Node.js Worker Threads and flow-affine workload distribution, enabling parallel analysis while preserving per-flow state consistency."
    ],
    image: dpiLogo,
    tags: ["React.js", "Node.js", "Express.js", "JavaScript", "MongoDB", "PCAP", "TCP/IP", "Docker"],
    github: "https://github.com/Jitenkoundinye2004/Deep-Packet-Inspection",
    webapp: "https://deep-packet-inspection-five.vercel.app/",
  },
  {
    id: 0,
    title: "Interview Helper AI",
    description: "Developed an AI-powered interview preparation platform that generates role-specific interview questions using the Gemini API, enabling users to practice targeted question sets by role and topic.",
    bullets: [
      "Developed an AI-powered interview preparation platform that generates role-specific interview questions using the Gemini API, enabling users to practice targeted question sets by role and topic.",
      "Implemented JWT-based authentication and protected REST APIs in Node.js and Express.js so only authenticated users can create, view, and review interview sessions, improving access control for stored practice data.",
      "Designed a modular front-end in React.js with reusable components for dashboards, question lists, and session history, speeding up UI changes and new feature additions by ~20-25%."
    ],
    image: interviewLogo,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "Docker"],
    github: "https://github.com/Jitenkoundinye2004/InterviewHelper.ai",
    webapp: "https://interviewhelper-ai.onrender.com",
  },
  {
    id: 1,
    title: "Resume Builder",
    description: "Built a full-stack resume builder that lets users create and save structured resumes via a guided React UI backed by a TypeScript, Node.js, and Express.js API.",
    bullets: [
      "Built a full-stack resume builder that lets users create and save structured resumes via a guided React UI backed by a TypeScript, Node.js, and Express.js API.",
      "Integrated MongoDB Atlas to store and retrieve multiple resume versions per user reliably and securely.",
      "Implemented features for auto-save, edit, and preview, reducing the chance of losing changes and enabling users to iterate on resumes faster."
    ],
    image: resumeBuilder,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "TypeScript"],
    github: "https://github.com/Jitenkoundinye2004/Resume-Builder",
    webapp: "https://resume-builder-frontend-3y6h.onrender.com/",
  },
  {
    id: 2,
    title: "Lung Cancer Detection System",
    description: "Engineered a VGG16 + ANN deep learning model to accurately classify lung cancer from CT scan images. Enhanced prediction accuracy by implementing K-Means segmentation for advanced feature extraction. Deployed a full-stack Flask web application integrated with MongoDB for secure user authentication and real-time cancer prediction, ensuring a seamless and responsive user experience.",
    image: lungCancerLogo,
    tags: [
      "Python",
      "Flask",
      "MongoDB",
      "VGG16",
      "ANN",
      "K-Means",
      "TensorFlow",
      "Deep Learning",
      "OpenCV"
    ],
    github: "https://github.com/Jitenkoundinye2004/Lung-Cancer-Detection-System",
    webapp: "/",
  },
  {
    id: 3,
    title: "Weather APP",
    description: "Developed a dynamic real-time Weather Forecasting Web Application using React.js and the OpenWeatherMap API. Implemented responsive UI with live temperature, humidity, and condition icons for multiple cities. Integrated .env configuration for secure API key management and optimized API calls to ensure efficient data retrieval. Enhanced user experience through error handling, clean design, and instant weather updates.",
    image: weatherApp,
    tags: [
      "React.js",
      "JavaScript",
      "OpenWeather API",
      "REST API",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/Jitenkoundinye2004/Weather-App/tree/main",
    webapp: "https://weather-app-61jj.vercel.app/",
  },
  {
    id: 4,
    title: "Smart Seeding Decision Support System (AgriCare)",
    description: "Developed a full-stack agricultural web application called AgriCare (Smart Seeding DSS) to assist farmers with intelligent crop decisions and farm management. Built using a modern MERN stack (React + Node.js + Express + MongoDB) with a Python ML backend for advanced features such as AI-driven crop recommendations, text-to-speech accessibility, and image analysis. Implemented secure user authentication, smart seeding analysis, and multilingual support to enhance usability. Focused on seamless integration between frontend, backend, and machine learning components to provide a comprehensive, interactive smart agriculture tool.",
    image: smartSeedingDSS,
    tags: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "MERN Stack",
      "Python",
      "Machine Learning",
      "REST API",
    ],
    github: "https://github.com/Jitenkoundinye2004/Smart_seeding_DSS",
    webapp: "https://smart-seeding-dss.onrender.com/"
  },
  {
    id: 5,
    title: "Portfolio",
    description: "Developed a professional responsive personal portfolio website for Jiten Koundinye using React.js, Tailwind CSS, and Framer Motion. This developer portfolio showcases technical skills in the MERN stack and various engineering projects. The site features smooth Lenis scrolling, an interactive UI, and integrated EmailJS for direct contact. Designed as a modern digital resume, it highlights my expertise as a Computer Engineering student from MGM Nanded, focusing on scalable and aesthetically appealing web solutions.",
    image: portfolio,
    tags: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "EmailJS",
      "HTML",
    ],
    github: "https://github.com/Jitenkoundinye2004/Jiten_Portfolio",
    webapp: "/",
  }
];

export const education = [
  {
    id: 0,
    img: mgmLogo,
    school: "MGM College of Engineering, Nanded",
    date: "2023 - 2026",
    grade: "7.07 CGPA (Till 7th Semester)",
    desc: "Pursuing Bachelor of Technology in Computer Science and Engineering. Throughout my academic journey, I have developed a strong foundation in programming, data structures, algorithms, web technologies, and software engineering. I have also worked on several projects that strengthened my practical understanding of MERN stack and deep learning.",
    degree: "Bachelor of Technology - Computer Science and Engineering",
  },
  {
    id: 1,
    img: diplomaLogo,
    school: "Government Polytechnic Institute, Jintur",
    date: "Sept 2020 - Aug 2023",
    grade: "83.26%",
    desc: "Completed Diploma in Computer Engineering. Gained strong technical knowledge in programming, networking, database management, and computer hardware. Laid the foundation for my interest in software development and web systems.",
    degree: "Diploma in Computer Engineering",
  },
  {
    id: 2,
    img: boardLogo,
    school: "Shri Sarang Swami Vidhyalay, Parbhani",
    date: "June 2019 - March 2020",
    grade: "78%",
    desc: "Completed 10th under the State Board (Semi-English) curriculum. Developed early interest in mathematics and science, leading to computer engineering.",
    degree: "Secondary School Certificate (10th - State Board)",
  },
];
