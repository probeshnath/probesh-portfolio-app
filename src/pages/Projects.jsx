import { IoIosDesktop } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';


const projects = [
  {
    title: "Trust Online Marketplace",
    description: "Trust Online Marketplace is a marketplace website. Where a buyer can post jobs and give his budget and Seller can bit on jobs. After if buyer accept that bit request , then that job status updated as a progress. After complete this job then it status will be complete.",
    frontEnd: "React, Daisyui, Tailwindcss, React-tabs, firebase, Axios, aos",
    backEnd: "Nodejs, Express js, MongoDB, Dotenv,JsonWebToken",
    live_link: "https://trust-mern-marketplace.web.app/",
    client_git: "https://github.com/probeshnath/trust-online-marketplace-client",
    server_git: "https://github.com/probeshnath/trust-online-marketplace-server",
    image: ["/projects/trust1.PNG",
    "/projects/trust2.PNG",
    "/projects/trust3.PNG",
    "/projects/trust4.PNG",
    "/projects/trust5.PNG",
    "/projects/trust6.PNG",]
  },
  {
    title: "BodyFlex Hub",
    description: "Body Flex Hub is a gym center MERN Website, where user can register as a member. And if he is knowledge as a trainer , he can apply for become a trainer. After admin confirmation he will be a trainer or rejected .Also there is stripe payment for purchase a class of a trainer as a general member.",
    frontEnd: "React, Daisyui, Tailwindcss,firebase, Axios, aos, Stripe",
    backEnd: "Nodejs,Stripe payment, Express js, MongoDB, Dotenv, JsonWebToken",
    live_link: "https://bodyflex-hub.web.app/",
    client_git: "https://github.com/probeshnath/body-flex-hub-frontend",
    server_git: "https://github.com/probeshnath/body-flex-hub-backend",
    image: ["/projects/body1.PNG",
    "/projects/body2.PNG",
    "/projects/body3.PNG",
    "/projects/body4.PNG",
    "/projects/body5.PNG",]
  },
  {
    title: "Brand Shop",
    description: "Brand Shop is a shop, where is sell many types of car. Seller can find lots of company car here.",
    frontEnd: "React, Daisyui, React-router-dom, aos, TailwindCss, Firebase",
    backEnd: "Nodejs, Express js, MongoDB",
    live_link: "https://brand-shop-mern.web.app/",
    client_git: "https://github.com/probeshnath/brand-shop-client-mern/",
    server_git: "https://github.com/probeshnath/brand-shop-server-mern",
    image: ["/projects/brand1.PNG",
    "/projects/brand2.PNG",
    "/projects/brand3.PNG",
    "/projects/brand4.PNG"]
  }
]

const Projects = () => {
  return (
    <div className='py-16 bg-gray-900 min-h-screen'>
      <h2 className='text-4xl text-center font-bold'>My recent Projects</h2>
      <div className='max-w-7xl mx-auto mt-5 '>
        {/* all projects */}
        <div className="flex flex-col gap-4 ">
          {
            projects.map((project,inx) =>(
              <>
         
              <div key={inx} className="border px-3 py-5 bg-white md:flex" >
    
                <div className="flex-1 px-6 h-32 w-52" >
                  <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    {
                      project?.image?.map((img,inx) =>(
                        <SwiperSlide key={inx}>
                          <img className="w-full h-52 rounded-lg" src={img} key={inx} alt={inx}/>
                        </SwiperSlide>
                      ))
                    }
                  </Swiper>
                </div>
    
                <div className="flex-1" >
                  <h2 className="text-3xl font-semibold text-orange-600">{project?.title} </h2>
                  <p className="p-2 text-gray-500">{project?.description}</p>
    
                  <div>
                    <ul>
                      <li className="list-disc font-semibold">Front-End: <span className="text-orange-600">{project?.frontEnd}</span></li>
                    <li className="list-disc font-semibold">Back-End: <span className="text-orange-600">{project?.backEnd}</span></li>
                    </ul>
                  </div>
    
                  <div className="flex gap-2 my-3">
                    <Link className='py-1 px-4 w-fit bg-blue-600 text-white rounded-lg font-semibold mr-3 flex items-center' target="_blank" to={project?.live_link} ><IoIosDesktop className="text-2xl  pr-2" /> Live Link</Link>
                    <Link className='py-1 px-4 w-fit bg-blue-600 text-white rounded-lg font-semibold mr-3 flex items-center' target="_blank" to={project?.client_git} ><FaCode className="text-2xl  pr-2" /> Client Source Code</Link>
                    <Link className='py-1 px-4 w-fit bg-blue-600 text-white rounded-lg font-semibold mr-3 flex items-center' target="_blank" to={project?.server_git}><FaCode className="text-2xl  pr-2" /> Server Source Code</Link>
                  </div>
                </div>
              </div>
            </>
            ))
          }
        </div>

      

      </div >
    </div >
  )
}

export default Projects