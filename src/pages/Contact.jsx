import React from 'react'

const Contact = () => {
  return (
    <div className='py-10 bg-gray-900'>
      <h2 className='text-orange-500 text-5xl font-bold text-center pb-5'>Contact Me</h2>
      <div className="max-w-7xl mx-auto">
        <form className="flex px-3 flex-col gap-3">
          <input className='py-2 px-2 outline-none text-white placeholder:text-white bg-gray-500 rounded-md' type="text" placeholder="Enter Your Name" required />
          <input className='py-2 px-2 outline-none text-white placeholder:text-white bg-gray-500 rounded-md' type="email" placeholder="Enter Your Email" required />
          <textarea
            name=""
            className='py-2 px-2 outline-none text-white placeholder:text-white bg-gray-500 rounded-md'
            cols="30"
            rows="10"
            placeholder="What's on your mind...."
          ></textarea>
          <button className='bg-orange-500 py-2 rounded-md text-white font-bold hover:bg-blue-700'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact