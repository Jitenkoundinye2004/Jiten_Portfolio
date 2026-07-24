import React from "react";

const ATSResume = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-80 flex flex-col items-center justify-start py-8 px-4 no-print-backdrop">
      {/* Control Panel (Screen Only) */}
      <div id="print-controls" className="w-full max-w-4xl bg-gray-900 border border-gray-800 rounded-t-2xl p-4 flex justify-between items-center shadow-2xl no-print">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="text-gray-300 text-sm font-medium">100% ATS-Compliant PDF Resume</span>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handlePrint}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105 text-sm sm:text-base flex items-center space-x-2"
          >
            <span>🖨️</span>
            <span>Print / Save as PDF</span>
          </button>
          <button
            onClick={onClose}
            className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white font-bold py-2 px-4 rounded-lg transition duration-300 text-sm sm:text-base"
          >
            Close
          </button>
        </div>
      </div>

      {/* Resume Document Sheet */}
      <div
        id="print-resume-area"
        className="w-full max-w-4xl bg-white text-black p-8 sm:p-12 shadow-2xl select-text font-serif leading-relaxed text-left rounded-b-2xl border-t-0 border border-gray-200"
        style={{ minHeight: "11in" }}
      >
        {/* Contact Info Section */}
        <header className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 text-black font-sans">
            Jiten Koundinye
          </h1>
          <div className="text-xs sm:text-sm text-gray-700 flex flex-wrap justify-center gap-x-2 gap-y-1 font-sans">
            <span>Nanded, India</span>
            <span>•</span>
            <a href="mailto:jitenkoundinyecse@gmail.com" className="hover:underline text-gray-900">
              jitenkoundinyecse@gmail.com
            </a>
            <span>•</span>
            <span>+91 8421062364</span>
            <span>•</span>
            <a href="https://linkedin.com/in/jiten-koundinye" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-900">
              linkedin.com/in/jiten-koundinye
            </a>
            <span>•</span>
            <a href="https://github.com/Jitenkoundinye2004" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-900">
              github.com/Jitenkoundinye2004
            </a>
            <span>•</span>
            <a href="https://jiten-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-900">
              jiten-portfolio.vercel.app
            </a>
          </div>
        </header>

        {/* Divider */}
        <hr className="border-gray-300 my-4" />

        {/* Professional Summary */}
        <section className="mb-6 print-section">
          <p className="text-sm text-gray-800 leading-normal text-justify">
            Software Developer, Java Developer, MERN Developer, Web Developer, and Full Stack Developer with 8 months of internship experience building 15+ full-stack features and 20+ REST APIs using React.js, Node.js, Express.js, MongoDB, Java, TypeScript, Docker, and AWS, with a focus on reusable components, secure JWT/RBAC backends, and stable, high-performance web applications.
          </p>
        </section>

        {/* Professional Experience */}
        <section className="mb-6 print-section">
          <h2 className="text-lg font-bold tracking-wider border-b border-gray-300 pb-1 mb-3 text-black font-sans">
            EXPERIENCE
          </h2>

          {/* Job 1 */}
          <div className="mb-4">
            <div className="flex justify-between items-baseline font-sans text-sm font-semibold mb-1">
              <div>
                <span className="text-black font-bold">Software Developer Intern</span>
                <span className="text-gray-600 font-normal"> - Softcadd Technologies</span>
              </div>
              <span className="text-gray-600 text-xs font-normal">Nov 2025 - Present</span>
            </div>
            <p className="text-xs text-gray-500 italic mb-2">Remote</p>
            <ul className="list-disc list-outside ml-5 text-sm text-gray-850 space-y-1.5 font-sans">
              <li>
                Engineer full-stack web modules using React.js, Node.js, Express.js, and MongoDB, delivering 10+ production features and reducing duplicate implementation work by ~25–30% through 20+ shared UI components and API handlers.
              </li>
              <li>
                Implement and integrate 15–20 RESTful APIs secured with JWT authentication and RBAC, tightening token validation and permission checks and reducing unauthorized access issues in test environments to near zero.
              </li>
              <li>
                Containerize backend services with Docker and streamline CI/CD pipelines on AWS, replacing multi-step manual releases with automated weekly deployments and cutting release effort per engineer by ~60–70%.
              </li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="mb-4">
            <div className="flex justify-between items-baseline font-sans text-sm font-semibold mb-1">
              <div>
                <span className="text-black font-bold">MERN Stack Developer Intern</span>
                <span className="text-gray-600 font-normal"> - Zidio Development</span>
              </div>
              <span className="text-gray-600 text-xs font-normal">Jul 2025 - Oct 2025</span>
            </div>
            <p className="text-xs text-gray-500 italic mb-2">Remote</p>
            <ul className="list-disc list-outside ml-5 text-sm text-gray-850 space-y-1.5 font-sans">
              <li>
                Developed and refactored 20+ reusable React components and Express.js endpoints, reducing duplicate UI/API patterns by ~30% and helping the team ship new client-facing features faster across multiple projects.
              </li>
              <li>
                Diagnosed and fixed 40–60 front-end and REST API integration bugs using browser dev tools and Postman, improving stability of key user flows and lowering recurring issues across releases by ~25–35%.
              </li>
              <li>
                Collaborated with senior developers to standardize component and API structures across projects, reducing onboarding time for new tasks by ~20–30% and increasing code review approvals on first pass.
              </li>
            </ul>
          </div>
        </section>

        {/* Technical Projects */}
        <section className="mb-6 print-section">
          <h2 className="text-lg font-bold tracking-wider border-b border-gray-300 pb-1 mb-3 text-black font-sans">
            PROJECTS
          </h2>

          {/* Project 1 */}
          <div className="mb-4">
            <div className="flex justify-between items-baseline font-sans text-sm font-semibold mb-1">
              <div>
                <span className="text-black font-bold">Interview Helper AI</span>
                <span className="text-gray-600 font-normal"> - React.js, Node.js, Express.js, MongoDB, Gemini API, Docker</span>
              </div>
              <span className="text-gray-600 text-xs font-normal">Personal</span>
            </div>
            <ul className="list-disc list-outside ml-5 text-sm text-gray-850 space-y-1.5 font-sans">
              <li>
                Developed an AI-powered interview preparation platform that generates role-specific interview questions using the Gemini API, enabling users to practice targeted question sets by role and topic.
              </li>
              <li>
                Implemented JWT-based authentication and protected REST APIs in Node.js and Express.js so only authenticated users can create, view, and review interview sessions, improving access control for stored practice data.
              </li>
              <li>
                Designed a modular front-end in React.js with reusable components for dashboards, question lists, and session history, speeding up UI changes and new feature additions by ~20–25%.
              </li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="mb-4">
            <div className="flex justify-between items-baseline font-sans text-sm font-semibold mb-1">
              <div>
                <span className="text-black font-bold">Resume Builder</span>
                <span className="text-gray-600 font-normal"> - React.js, Node.js, Express.js, MongoDB Atlas, TypeScript</span>
              </div>
              <span className="text-gray-600 text-xs font-normal">Personal</span>
            </div>
            <ul className="list-disc list-outside ml-5 text-sm text-gray-850 space-y-1.5 font-sans">
              <li>
                Built a full-stack resume builder that lets users create and save structured resumes via a guided React UI backed by a TypeScript, Node.js, and Express.js API.
              </li>
              <li>
                Integrated MongoDB Atlas to store and retrieve multiple resume versions per user reliably and securely.
              </li>
              <li>
                Implemented features for auto-save, edit, and preview, reducing the chance of losing changes and enabling users to iterate on resumes faster.
              </li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6 print-section">
          <h2 className="text-lg font-bold tracking-wider border-b border-gray-300 pb-1 mb-3 text-black font-sans">
            EDUCATION
          </h2>
          <div className="flex justify-between items-baseline font-sans text-sm font-semibold">
            <div>
              <span className="text-black font-bold">Bachelor of Technology – Computer Science and Engineering</span>
              <span className="text-gray-600 font-normal"> - MGM College of Engineering</span>
            </div>
            <span className="text-gray-600 text-xs font-normal">2023 - 2026</span>
          </div>
          <p className="text-xs text-gray-500 italic mb-1">Nanded, India</p>
        </section>

        {/* Skills */}
        <section className="print-section">
          <h2 className="text-lg font-bold tracking-wider border-b border-gray-300 pb-1 mb-3 text-black font-sans">
            SKILLS
          </h2>
          <div className="text-sm text-gray-800 space-y-1.5 font-sans">
            <div>
              <strong className="text-black">Languages:</strong> JavaScript (ES6+), TypeScript, Java, Python
            </div>
            <div>
              <strong className="text-black">Frontend:</strong> React.js, Redux, Tailwind CSS, Responsive Web Design, React Testing Library
            </div>
            <div>
              <strong className="text-black">Backend:</strong> Node.js, Express.js, RESTful APIs, JWT Authentication & RBAC
            </div>
            <div>
              <strong className="text-black">Databases:</strong> MongoDB, MongoDB Atlas, MySQL (CRUD, joins)
            </div>
            <div>
              <strong className="text-black">DevOps & Tools:</strong> Docker, CI/CD pipelines, AWS, Jest, Git, GitHub, Postman, Agile / Scrum
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ATSResume;
