import { Link } from 'react-router-dom'
import probeshPic from '../../public/probesh-deb-nath.jpg'
// import resumeLink from "../assets/Probesh's Resume.pdf"

const About = () => {
  return (
    <div className="about bg-[#f4f4fa] py-10 " id="about">
    <div className="container max-w-7xl mx-auto">
     
        <h2 className='text-4xl mb-8 text-center'>About Me</h2>
     
      <div className="about_wrapper">
        <div className="header_about_me">
          <div className="single_test">
            <div className="top_test">
              
                <img className='mx-auto' src={probeshPic} alt="probesh" />
              
             
                <h3>Probesh Deb Nath</h3>
                <p>Full Stack Web Developer</p>
             
            </div>
          </div>
        </div>
        <div className="about_skills lg:flex  justify-center ">
          <div className="right_side w-full  flex-1" >
       
              <h3 className='px-3'>~I'm Probesh Deb Nath~</h3>
          
            
              <p>
                Hi i'm Probesh. I'm a Professional Full Stack Web Developer,
                with 2 years of experience! I'm quick to grab new ideas and
                concepts to develop creative and attractive Web design and
                development. I'm much experienced in HTML, CSS, Bootstrap,
                JAVASCRIPT, SCSS, TALIWIND CSS ,REACT, NODE JS, EXPRESS JS
                ,MONGODB ,Material-UI ,GIT & GITHUB Also.Your Satisfaction is
                my first priority.I pride myself on doing quality work and
                maintain excellent communication.Already I have created 20+
                 websites. My goal is to deliver work with
                honesty and timely.Feel free to Inbox me for your project
                plan. Thanks
              </p>
          
            
             <div className='flex justify-center'>
             <a className='w-fit py-2 px-5 text-xl bg-orange-500 text-white rounded-lg uppercase'  href={"./Probesh's_Resume.pdf"} download={"./Probesh's_Resume.pdf"}>
                Download CV
              </a>
             </div>
           
          </div>
          <div className="silll_progrress flex-1">
            <ul className="box">
              
                <li>
                  <h5>HTML</h5>
                  <span className="bar bar5"></span>
                </li>
                <li>
                  <h5>CSS & Tailwind Css</h5>
                  <span className="bar bar4"></span>
                </li>
                <li>
                  <h5>Javascript </h5>
                  <span className="bar bar6"></span>
                </li>
                <li>
                  <h5>React Js</h5>
                  <span className="bar bar1"></span>
                </li>
                
                <li>
                  <h5>Node Js</h5>
                  <span className="bar bar2"></span>
                </li>
                
                <li>
                  <h5>MongoDB</h5>
                  <span className="bar bar3"></span>
                </li>
                
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About