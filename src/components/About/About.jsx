import React from 'react'
import TypingEffect from '../TypingEffect'
import Tilt from 'react-parallax-tilt'
import profileImage from "../../assets/profile.png"
const About = ({ onDownloadResume }) => {
  return (
    <section id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
        
        {/* Greeting */}
          <p className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </p>

           {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Jiten Koundinye
          </h1>

          {/* Skills heading */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className='text-white'>

            I am a 
            </span>
            <TypingEffect
            texts={[
              ' Software Developer',
              ' Java Developer',
              ' MERN Developer',
              ' Web Developer',
              ' Full Stack Developer'
            ]}
            speed={100}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={2000}
            cursor="|"
            />
            
          </h3>
          {/* about me paragraph */}
          <p className='text-base sm:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
            I am a Software Developer, Java Developer, MERN Developer, Web Developer, and Full Stack Developer with 8 months of internship experience building 15+ full-stack features and 20+ REST APIs using React.js, Node.js, Express.js, MongoDB, Java, TypeScript, Docker, and AWS. I focus on creating reusable UI components, secure JWT/RBAC backends, and stable, high-performance web applications.
          </p>

          {/* Resume Button */}
          <button 
            onClick={onDownloadResume} 
            className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 cursor-pointer' 
            style={{
              background:'linear-gradient(90deg,#8245ec,#a855f7)',
              boxShadow:'0 0 2px #8245ec, 0 0 20px #8245ec, 0 0 40px #8245ec'
            }}
          >
            Download Resume
          </button>
        </div>

        {/* Right Side */}

        <div className='md:w-1/2 flex justify-center md:justify-end'>
        <Tilt className='w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full'
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={1000}
        scale={1.05}
        transitionSpeed={1000}
        gyroscope={true}

        >   
             <img src={profileImage} alt="Jiten Koundinye" className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'/>
        </Tilt>

        </div>
      </div>

    </section>
  )
}

export default About
