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
import Render from "./assets/tech_logo/render.png"

// Project Section Logo's
import interviewLogo from './assets/projectlogo/interviewlogo.png';
import lungCancerLogo from './assets/projectlogo/lunglogo.png'
import weatherApp from './assets/projectlogo/weather.png'


// Education Section Logo's
import mgmLogo from './assets/edu_logo/MGM.png';
import diplomaLogo from './assets/edu_logo/govt.png';
import boardLogo from './assets/edu_logo/board.png';

//experience logo
import zidioLogo from "./assets/Experience_logo/zidio.jpeg"
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: "Render", logo: Render }
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: zidioLogo,
    role: "MERN Stack Developer Intern",
    company: "Zidio Development, Remote",
    date: "July 2025 - Present",
    desc: "Built and maintained full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Developed responsive front-end features and optimized RESTful APIs, resulting in a 15% improvement in response time. Collaborated with team members using Git and Agile methodologies to ensure efficient project delivery and maintain high code quality.",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Git",
      "Agile",
    ],
  },

];

export const projects = [
  {
    id: 0,
    title: "InterviewHelper.ai",
    description:
      "InterviewHelper.ai is an intelligent web application designed to help job seekers prepare for technical interviews using AI-powered guidance and insights. The platform provides personalized question suggestions, and topic-wise preparation analysis through a clean and responsive interface. As the lead developer, I implemented dynamic question generation, scoring logic, and an intuitive dashboard to enhance user experience. This project reflects my skills in MERN stack web development, AI integration, and creating scalable, user-centric solutions for real-world challenges.",
    image: interviewLogo,
    tags: ["React JS", "Node JS", "Express JS", "MongoDb", "API"],
    github: "https://github.com/Jitenkoundinye2004/InterviewHelper.ai",
    webapp: "https://interviewhelper-ai-frontend.onrender.com/",
  },
  {
    id: 1,
    title: "Lung Cancer Detection System",
    description:
      "Engineered a VGG16 + ANN deep learning model to accurately classify lung cancer from CT scan images. Enhanced prediction accuracy by implementing K-Means segmentation for advanced feature extraction. Deployed a full-stack Flask web application integrated with MongoDB for secure user authentication and real-time cancer prediction, ensuring a seamless and responsive user experience.",
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
    id: 2,
    title: "Weather APP",
    description:
       "Developed a dynamic real-time Weather Forecasting Web Application using React.js and the OpenWeatherMap API. Implemented responsive UI with live temperature, humidity, and condition icons for multiple cities. Integrated .env configuration for secure API key management and optimized API calls to ensure efficient data retrieval. Enhanced user experience through error handling, clean design, and instant weather updates.",
    image: weatherApp,
    tags: [
       "React.js",
      "JavaScript",
      "OpenWeather API",
      "REST API",
      "HTML",
      "CSS",
      "Environment Variables",
    ],
    github: "https://github.com/Jitenkoundinye2004/Weather-App/tree/main",
    webapp: "https://weather-app-61jj.vercel.app/",
  },


];

export const education = [
  {
    id: 0,
    img: mgmLogo,
    school: "MGM's College of Engineering, Nanded",
    date: "Aug 2023 - Present",
    grade: "7.07 CGPA (Till 7th Semester)",
    desc: "I am currently in my final year of B.Tech in Computer Engineering at MGM’s College of Engineering, Nanded. Throughout my academic journey, I have developed a strong foundation in programming, data structures, algorithms, web technologies, and software development. I have also worked on several academic and personal projects that strengthened my practical understanding of core concepts. In addition to academics, I actively participated in technical workshops, hackathons, and coding competitions, which enhanced my problem solving and teamwork skills.",
    degree: "Bachelor of Technology - B.Tech in Computer Science Engineering",
  },
  {
    id: 1,
    img: diplomaLogo,
    school: "Government Polytechnic Institute , Jintur",
    date: "Sept 2020 - Aug 2023",
    grade: "83.26%",
    desc: "I completed my Diploma in Computer Engineering from Government Polytechnic Institute, Jintur. During my diploma, I gained strong technical knowledge in programming, networking, database management, and computer hardware. I also worked on several mini-projects that helped me understand real-world applications of software and system design. This phase laid the foundation for my interest in software development and higher studies in engineering.",
    degree: "Diploma is Computer Engineering ",
  },
  {
    id: 2,
    img: boardLogo,
    school: "Shri Sarang Swami Vidhyalay ,Parbhani",
    date: "June 2019 - March 2020",
    grade: "78%",
    desc: "I completed my 10th under the State Board (Semi-English) curriculum. This phase strengthened my fundamentals in mathematics and science and developed my interest in technology, leading me to pursue computer engineering.",
    degree: "Secondary School Certificate (10th - State Board, Semi-English)",
  },
];
