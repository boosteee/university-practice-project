import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { FiX, FiMenu } from 'react-icons/fi';
import useBodyScrollLock from '../useBodyScrollLock';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isLocked, toggle] = useBodyScrollLock();

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
    <div name='чериков' className='w-full max-w-7xl'>
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
              <Link to={link} smooth duration={100}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className='z-50 cursor-pointer flex items-end justify-end sm:hidden'
          onClick={() => {
            setNav(!nav);
            toggle();
          }}
        >
          {nav ? <FiX color='#FCFCFA' size={25} /> : <FiMenu size={25} />}
        </div>
      </div>

      {nav && (
        <ul className='flex flex-col items-center justify-center absolute top-0 left-0  m-0 p-0 z-40 h-screen w-full bg-[#6571F9] '>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className=' text-center py-10 text-3xl cursor-pointer font-medium text-[#FCFCFA] hover:scale-105 duration-200'
            >
              <Link
                onClick={() => {
                  setNav(!nav);
                  toggle();
                }}
                to={link}
                smooth
                duration={100}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
