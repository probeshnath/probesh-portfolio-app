import { IoCallOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";
import { useForm, ValidationError } from '@formspree/react';
import { toast } from 'react-toastify';

const Contact = () => {
  const [state, handleSubmit] = useForm("mqkvkege");
  if (state.succeeded) {
    toast.success("Thanks for Message.")     
  }
  return (
    <div className='py-10 bg-gray-900'>
      <h2 className='text-orange-500 text-5xl font-bold text-center pb-5'>Contact Me</h2>
      <div className="max-w-7xl mx-auto md:grid grid-cols-12 ">
       <div className="flex flex-col col-span-4  gap-4 py-10 justify-center items-center md:items-start ">
        {/*  */}
       <div className="flex gap-3">
         <IoCallOutline className="text-orange-600" />
          <div>
            <h3 className="text-xl font-bold">Call Me</h3>
            <p>+8801764613220</p>
          </div>
        </div>
       <div className="flex gap-3">
        <CgMail className="text-orange-600" />
        
          <div>
            <h3 className="text-xl font-bold">Email Me</h3>
            <p>probeshn@gmail.com</p>
          </div>
        </div>
       <div className="flex gap-3">
         <IoLocationSharp className="text-orange-600" />
          <div>
            <h3 className="text-xl font-bold">Location</h3>
            <p>Sylhet, Bangladesh</p>
          </div>
        </div>
       </div>
        <form onSubmit={handleSubmit} className="flex px-3 flex-col col-span-8 flex-1 gap-3">
          <input className='py-2 px-2 outline-none text-white placeholder:text-white bg-gray-500 rounded-md' name="name" type="text" placeholder="Enter Your Name" required />
          <input className='py-2 px-2 outline-none text-white placeholder:text-white bg-gray-500 rounded-md' name="email" type="email" placeholder="Enter Your Email" required />
          <textarea
            name="message"
            className='py-2 px-2 outline-none text-white placeholder:text-white bg-gray-500 rounded-md'
            cols="30"
            rows="10"
            placeholder="What's on your mind...."
          ></textarea>
          <button type="submit" disabled={state.submitting} className='bg-orange-500 py-2 rounded-md text-white font-bold hover:bg-blue-700'>Send Message</button>
        </form>

      </div>
    </div>
  )
}

export default Contact