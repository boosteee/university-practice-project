import React from 'react';
import { ReactComponent as Region } from '../assets/map.svg';

function Map() {
  return (
    <div className='max-w-7xl mt-5 md:mt-20'>
      <p className='text-[#1B1C1E] px-6 text-center font-bold md:text-5xl text-4xl'>
        Добро пожаловать в Чериков!
      </p>
      <div className='flex flex-col mt-10 items-center'>
        <Region className='px-4 w-full h-full' />
      </div>
    </div>
  );
}

export default Map;
