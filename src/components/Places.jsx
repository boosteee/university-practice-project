import React, { useState } from 'react';
import placesData from '../placesData';
import { PiMapPinFill } from 'react-icons/pi';
import useBodyScrollLock from '../useBodyScrollLock';

const Places = () => {
  const [isLocked, toggle] = useBodyScrollLock();
  const [popUpContent, setPopUpContent] = useState([]);
  const [popUpToggle, setPopUpToggle] = useState(false);
  const changeContent = (item) => {
    setPopUpContent([item]);
    setPopUpToggle(!popUpToggle);
    toggle();
  };
  return (
    <div name='интересные места' className='px-6 max-w-7xl w-full mt-12'>
      <p className='text-[#1B1C1E] mr-auto font-bold text-2xl md:text-3xl'>
        Интересные места
      </p>
      <div className='mt-5 flex gap-x-28 gap-y-8 flex-wrap justify-center'>
        {placesData.map((item) => {
          return (
            <div
              onClick={() => changeContent(item)}
              className=' cursor-pointer flex flex-col w-[300px] h-[400px] p-4 bg-[#FCFCFA] rounded-3xl shadow-xl'
            >
              <img
                className='w-[270px] h-[270px] rounded-2xl object-cover'
                src={item.image}
                alt=''
              />
              <p className=' font-bold text-lg mt-2 min-h-[3.5rem]'>
                {item.title}
              </p>
              <p className='mt-1 text-[#6571F9]'>подробнее</p>
            </div>
          );
        })}
      </div>
      {popUpToggle && (
        <div
          onClick={changeContent}
          className=' fixed top-0 left-0 bottom-0 right-0 bg-gray-950 bg-opacity-75 flex flex-col justify-center overflow-auto z-50 items-center'
        >
          {popUpContent.map((place) => {
            return (
              <div
                onClick={(event) => event.stopPropagation()}
                className='bg-[#FCFCFA] gap-x-14 max-w-6xl shadow-xl rounded-3xl items-center flex flex-col gap-y-10 lg:flex-row  p-8 m-8'
              >
                <img
                  className='rounded-2xl w-[300px] md:w-5/12 aspect-square object-cover'
                  src={place.image}
                  alt=''
                ></img>
                <div className='flex flex-col gap-y-7'>
                  <p className='text-[#1B1C1E] font-bold text-2xl md:text-3xl'>
                    {place.title}
                  </p>
                  <p className='text-[#49494B] md:text-lg'>
                    {place.description}
                  </p>
                  <div className='flex items-center gap-x-2'>
                    <PiMapPinFill size={32} color='#6571F9' />
                    <p className='text-[#6571F9] font-medium md:text-lg'>
                      {place.adress}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Places;
