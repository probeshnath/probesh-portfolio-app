import React from 'react'
import HeroSection from '../components/HeroSection'
import Education from '../components/Education'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Count from '../components/Count'

const Home = () => {
    return (
        <div className='bg-black'>
            <HeroSection />
            <About />
            <Education />
            <Count />
            <Projects />
            <Contact />
            
        </div>
    )
}

export default Home