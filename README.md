# Jiten Koundinye | Portfolio & Resume
A modern, responsive, and performance-optimized personal portfolio showcasing my engineering projects, internships, and DevOps practices. 

Live Site: [jiten-portfolio.vercel.app](https://jiten-portfolio.vercel.app/)

---

## 🚀 Professional Summary
I am a **Software Developer, Java Developer, MERN Developer, Web Developer, and Full Stack Developer** with 8+ months of internship experience building 15+ full-stack features and 20+ REST APIs. My engineering focus is on modular frontend components, secure JWT/RBAC server architectures, high-performance database design, and automated CI/CD container deployments.

---

## 🛠️ Technology Stack

| Category | Technologies |
| :--- | :--- |
| **Languages** | JavaScript (ES6+), TypeScript, Java, Python, HTML5, CSS3 |
| **Frontend** | React.js, Redux, Tailwind CSS, Bootstrap, Responsive Design |
| **Backend & APIs** | Node.js, Express.js, RESTful APIs, JWT Authentication & RBAC |
| **Databases** | MongoDB, MongoDB Atlas, MySQL (CRUD, Joins) |
| **DevOps & Cloud** | Docker, Docker Compose, GitHub Actions (CI/CD), AWS, Vercel, Netlify, Render |
| **Testing & Agile** | Jest, React Testing Library, Git, GitHub, Postman, Agile/Scrum |

---

## 🐳 Docker & Containerization

To ensure consistent local development and production deployments, the portfolio is fully containerized using a multi-stage Docker build:

1. **Build Stage**: Uses `node:20-alpine` to install dependencies and compile the Vite project.
2. **Production Stage**: Copies built assets to a highly optimized `nginx:alpine` image.

### Running with Docker Compose
Spin up the portfolio container locally on port `8080` in detached mode with one command:
```bash
docker compose up --build -d
```
Stop the container and clean up images:
```bash
docker compose down
```

---

## ⚙️ Automated CI/CD Pipeline
A GitHub Actions workflow is configured in [ci-cd.yml](.github/workflows/ci-cd.yml) that triggers on every push and pull request to the `main` branch. 

The pipeline automates:
1. **Repository Checkout**: Pulls the latest code using `actions/checkout`.
2. **Environment Setup**: Installs Node.js v20 and configures package caching.
3. **Dependency Integrity**: Installs packages cleanly with `npm ci`.
4. **Build Verification**: Compiles the Vite project to ensure zero syntax or build errors.
5. **Docker Build Check**: Builds the multi-stage Dockerfile to verify container compilation health before deployments.

---

## 🌟 Featured Projects

### 1. [Interview Helper AI](https://github.com/Jitenkoundinye2004/InterviewHelper.ai)
*MERN Stack, Gemini API, Docker*
- Developed an AI-powered interview preparation platform that generates role-specific interview questions using the Gemini API, enabling users to practice targeted question sets.
- Implemented JWT-based authentication and protected REST APIs in Node.js/Express.js, ensuring secure user sessions and practice data isolation.
- Designed a modular front-end in React.js with reusable components for dashboards, question lists, and session history, speeding up UI changes by ~20–25%.
- **Live Demo**: [interviewhelper-ai.onrender.com](https://interviewhelper-ai.onrender.com)

### 2. [Resume Builder](https://github.com/Jitenkoundinye2004/Resume-Builder)
*React.js, Node.js, Express.js, MongoDB Atlas, TypeScript*
- Built a full-stack resume builder allowing users to create and save structured resumes via a guided React UI backed by a TypeScript, Node.js, and Express.js API.
- Integrated MongoDB Atlas to store and retrieve multiple resume versions per user reliably and securely.
- Implemented features for auto-save, edit, and preview, reducing the chance of losing changes and enabling users to iterate on resumes faster.
- **Live Demo**: [resume-builder-frontend-3y6h.onrender.com](https://resume-builder-frontend-3y6h.onrender.com/)

### 3. [Lung Cancer Detection System](https://github.com/Jitenkoundinye2004/Lung-Cancer-Detection-System)
*Python, Flask, MongoDB, VGG16, ANN, K-Means, TensorFlow, OpenCV*
- Engineered a VGG16 + ANN deep learning model to accurately classify lung cancer from CT scan images.
- Enhanced prediction accuracy by implementing K-Means segmentation for advanced feature extraction.
- Deployed a full-stack Flask web application integrated with MongoDB for secure user authentication and real-time cancer prediction.

---

## 📁 Project Structure
```
jiten-portfolio/
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # GitHub Actions CI/CD Pipeline
├── public/                    # Static Assets (Robots, Sitemap, Verification)
├── src/
│   ├── assets/                # Logos, Profile Images
│   ├── components/            # Section components (About, Experience, Skill, Work, Education, Contact)
│   │   ├── ATSResume/         # Printable ATS Resume component
│   │   └── ...
│   ├── App.jsx                # Main entry component
│   ├── constants.js           # Core portfolio data arrays
│   ├── index.css              # Global styles (Tailwind, Print media queries)
│   └── main.jsx
├── Dockerfile                 # Production Multi-stage Dockerfile
├── docker-compose.yml         # Local Docker compose configuration
├── .dockerignore              # Docker copy rules exclusion list
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 📞 Let's Connect

- **Email**: [jitenkoundinyecse@gmail.com](mailto:jitenkoundinyecse@gmail.com)
- **LinkedIn**: [linkedin.com/in/jiten-koundinye](https://linkedin.com/in/jiten-koundinye)
- **GitHub**: [github.com/Jitenkoundinye2004](https://github.com/Jitenkoundinye2004)

---
Built with ❤️ by Jiten Koundinye
