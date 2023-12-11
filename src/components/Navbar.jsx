import React from 'react';

const Navbar = () => {
  return (
    <div className='relative overflow-x-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between bg-base-100'>
          <div className=''>
            <a className='btn btn-ghost text-xl'>daisyUI</a>
          </div>

          <div className='lg:hidden relative z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute'
            >
              <li><a>Item 1</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>

          <div className='hidden lg:flex'>
            <ul className='menu menu-horizontal px-1'>
              <li><a>Item 1</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
