import React, { useState } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { FiX, FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'обзор',
    },
    {
      id: 2,
      link: 'история',
    },
    {
      id: 3,
      link: 'интересные места',
    },
    {
      id: 4,
      link: 'как добраться',
    },
  ];

  return (
    <div className=' w-full max-w-7xl'>
      <div>
        <div className='flex lg:flex-row flex-col lg:mt-0 mt-5 justify-between items-center h-20 w-full'>
          <div>
            <Logo className='w-full mr-72 md:mr-20 lg:mr-20' />
          </div>
          <ul className='hidden sm:flex'>
            {links.map(({ id, link }) => (
              <li
                key={id}
                className='md:px-14 px-8 xl:px-16 lg:px-10 cursor-pointer font-medium hover:scale-105 duration-200 text-[#49494B] '
              >
                {link}
              </li>
            ))}
          </ul>
          <div
            className='z-10 cursor-pointer flex items-end justify-end sm:hidden'
            onClick={() => setNav(!nav)}
          >
            {nav ? <FiX color='#FCFCFA' size={25} /> : <FiMenu size={25} />}
          </div>
        </div>
      </div>
      {nav && (
        <ul className='flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0 m-0 p-0 w-screen bg-[#6571F9] '>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className=' text-center py-10 text-3xl cursor-pointer font-medium text-[#FCFCFA] hover:scale-105 duration-200'
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
