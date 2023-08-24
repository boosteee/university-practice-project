import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='flex flex-col items-center min-h-[200px] mt-20 py-8 w-full bg-[#C6D6F7]'>
      <ul className='text-[#6571F9] mt-2 flex flex-wrap justify-center gap-x-48 gap-y-4 pb-6 px-6 max-w-7xl w-full list-none'>
        <Link to='чериков' smooth duration={100}>
          <li className='cursor-pointer text-2xl font-bold '>cherikov</li>
        </Link>
        <Link to='обзор' smooth duration={100}>
          <li className='cursor-pointer font-medium hover:scale-105 duration-200'>
            обзор
          </li>
        </Link>
        <Link to='история' smooth duration={100}>
          <li className='cursor-pointer font-medium hover:scale-105 duration-200'>
            история
          </li>
        </Link>
        <Link to='интересные места' smooth duration={100}>
          <li className='cursor-pointer font-medium hover:scale-105 duration-200'>
            интересные места
          </li>
        </Link>
        <Link to='как добраться' smooth duration={100}>
          <li className='cursor-pointer font-medium hover:scale-105 duration-200'>
            как добраться
          </li>
        </Link>
      </ul>
      <span className='text-[#49494B] text-sm mt-auto '>
        © Copyright 2023, All Rights Reserved
      </span>
    </div>
  );
};

export default Footer;
