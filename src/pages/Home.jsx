import React from 'react'
import HeroSection from '../components/HeroSection'
import Education from '../components/Education'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

const Home = () => {
    return (
        <div className='bg-black'>
            <HeroSection />
            <About />
            <Education />
            <Projects />
            <Contact />
            
        </div>
    )
}

export default Home