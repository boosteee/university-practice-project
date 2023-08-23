import React from 'react';
import waysData from '../waysData';

const Ways = () => {
  return (
    <div className='px-6 max-w-7xl w-full mt-12'>
      <p className='text-[#1B1C1E] mr-auto font-bold text-2xl md:text-3xl'>
        Как добраться
      </p>
      <div className='mt-5 flex gap-x-28 gap-y-6 flex-wrap justify-center'>
        {waysData.map((item) => {
          return (
            <div className='flex flex-col items-center w-[300px] p-4 '>
              {item.icon}
              <p className='text-[#1B1C1E] text-center font-bold text-lg mt-4 '>
                {item.title}
              </p>
              <p className='text-[#49494B] mt-2 text-center'>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ways;
