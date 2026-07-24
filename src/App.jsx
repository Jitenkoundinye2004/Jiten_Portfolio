import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Skill from './components/Skill/Skill'
import Experience from './components/Experience/Experience'
import Work from './components/Work/Work'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import BlurBlob from './BlurBlob'
import SmoothScroll from './components/SmoothScroll'
import StructuredData from './components/StructuredData'
import ATSResume from './components/ATSResume/ATSResume'

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleDownloadResume = () => {
    setIsResumeOpen(true);
    // Tiny delay to allow state update and DOM changes to register before print dialog opens
    setTimeout(() => {
      window.print();
    }, 150);
  };

  return (
    <SmoothScroll>
      <StructuredData />
      <div className="bg-[#050414]">

        <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="relative pt-20">
          <Navbar />
          <About />
          <Skill />
          <Experience />
          <Work />
          <Education />
          <Contact />
          <Footer />
        </div>

        <ATSResume isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </div>
    </SmoothScroll>
  )
}

export default App
