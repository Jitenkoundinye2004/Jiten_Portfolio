import { useEffect } from 'react';

const StructuredData = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        const data = {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Jiten Koundinye",
            "url": "https://jiten-portfolio.pages.dev/",
            "jobTitle": "Full Stack MERN Developer",
            "worksFor": {
                "@type": "Organization",
                "name": "Zidio Development"
            },
            "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "MGM's College of Engineering, Nanded",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Nanded",
                    "addressRegion": "Maharashtra",
                    "addressCountry": "India"
                }
            },
            "description": "Full Stack Developer specializing in MERN stack (MongoDB, Express, React, Node.js), React.js, and AI integrated systems.",
            "knowsAbout": ["React.js", "Node.js", "MongoDB", "Express.js", "MERN Stack", "AI", "Cloud Computing", "Computer Engineering"],
            "sameAs": [
                "https://github.com/Jitenkoundinye2004",
                "https://linkedin.com/in/jiten-koundinye"
            ]
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
