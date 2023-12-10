import { IoIosDesktop } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className='py-10 bg-orange-100 min-h-screen'>
      <h2 className='text-4xl text-center font-bold'>My recent Projects</h2>
      <div className='max-w-7xl mx-auto mt-5 '>
        {/* single projects */}
        <div className="border p-3 md:flex">
          {/* slider img */}
          <div className="flex-1"></div>
          {/* body of project */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-orange-600">BodyFlex Hub </h2>
            <p className="pt-2 text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, officiis sunt vero minus nesciunt culpa saepe numquam? Corporis, debitis provident?</p>
            {/* technology */}
            <div>
              <ul>
                <li>Front-End: <span>React, React,React </span></li>
                <li>Back-End: <span>Nodejs, MongoDB</span></li>
              </ul>
            </div>
            <div className="flex gap-2 my-3">
              <Link className='py-1 px-4 w-fit bg-blue-600 text-white rounded-lg font-semibold mr-3 flex items-center' to="" ><IoIosDesktop className="text-2xl  pr-2" /> Live Link</Link>
              <Link className='py-1 px-4 w-fit bg-blue-600 text-white rounded-lg font-semibold mr-3 flex items-center' to="" ><FaCode className="text-2xl  pr-2" /> Client Source Code</Link>
              <Link className='py-1 px-4 w-fit bg-blue-600 text-white rounded-lg font-semibold mr-3 flex items-center' to="" ><FaCode className="text-2xl  pr-2" /> Server Source Code</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects