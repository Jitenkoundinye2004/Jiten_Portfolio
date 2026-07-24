import { useEffect } from 'react';

const StructuredData = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        const data = {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Jiten Koundinye",
            "url": "https://jiten-portfolio.vercel.app/",
            "image": "https://jiten-portfolio.vercel.app/profile.png",
            "jobTitle": [
                "Software Developer",
                "Java Developer",
                "MERN Developer",
                "Web Developer",
                "Full Stack Developer"
            ],
            "description": "Software Developer, Java Developer, MERN Developer, Web Developer, and Full Stack Developer with 8 months of internship experience building full-stack applications, secure backends, and responsive UIs.",
            "gender": "Male",
            "nationality": "Indian",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nanded",
                "addressRegion": "Maharashtra",
                "addressCountry": "India"
            },
            "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "MGM College of Engineering, Nanded",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Nanded",
                    "addressRegion": "Maharashtra",
                    "addressCountry": "India"
                }
            },
            "worksFor": [
                {
                    "@type": "Organization",
                    "name": "Softcadd Technologies",
                    "sameAs": "https://softcadd.com"
                },
                {
                    "@type": "Organization",
                    "name": "Zidio Development",
                    "sameAs": "https://zidio.in"
                }
            ],
            "knowsAbout": [
                "Software Development",
                "Java Development",
                "MERN Stack Development",
                "Web Development",
                "Full Stack Development",
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Java",
                "TypeScript",
                "Docker",
                "AWS",
                "CI/CD pipelines",
                "RESTful APIs",
                "JWT Authentication & RBAC",
                "MySQL (CRUD, joins)",
                "Jest",
                "React Testing Library",
                "Agile / Scrum"
            ],
            "sameAs": [
                "https://github.com/Jitenkoundinye2004",
                "https://linkedin.com/in/jiten-koundinye"
            ],
            "mainEntityOfPage": {
                "@type": "ProfilePage",
                "@id": "https://jiten-portfolio.vercel.app/#about"
            }
        };
        script.innerHTML = JSON.stringify(data);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return null;
};

export default StructuredData;
