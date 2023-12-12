import { FaCode } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";


const Services = () => {
  return (
    <div className="py-10">
        <h2 className="text-4xl text-center text-orange-500">Services</h2>
        <div className=" max-w-7xl mx-auto grid grid-cols-1 py-8 px-3 md:grid-cols-3 gap-3">
        <div className="border p-5 text-center">
              <FaCode className="mx-auto text-4xl pb-2" />
              <h3 className="font-bold pb-2 text-lg">Web Design</h3>
              <p className="text-sm text-gray-300">
                I can create any type of website for your business, portfolio,
                company, e-commerce store, blog etc. I provide unique, clean &
                awesome graphical design interface.
              </p>
            </div>
            
            <div className="border p-5 text-center">
           
            <SiVisualstudiocode className="mx-auto text-4xl pb-2" />
              <h3 className="font-bold pb-2 text-lg">Web Development</h3>
              <p className="text-sm text-gray-300">
                I can create a fully functional online store with any type of
                payment gateway support and add shopping cart functionality into
                you’re existing website.
              </p>
            </div>
           
            <div className="border p-5 text-center">
            <FaLaptopCode className="mx-auto text-4xl pb-2" />
              <h3 className="font-bold pb-2 text-lg">Responsive Design</h3>
              <p className="text-sm text-gray-300">>
                Website problem & bugs it's a common problem for every website.
                Don't worry about bugs and problems. I can fix any type of
                problems & bugs for any website.
              </p>
            </div>
        </div>
    </div>
  )
}

export default Services