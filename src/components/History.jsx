import React from 'react';

import timelineElements from '../timelineElements';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

const History = () => {
  return (
    <div name='история' className='px-6 max-w-7xl w-full mt-12'>
      <p className='mr-auto font-bold text-2xl md:text-3xl mb-5'>История</p>
      <VerticalTimeline lineColor={'#6571F9'}>
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              contentStyle={{
                boxShadow: 'none',
                borderRadius: '20px',
                background: '#EAF194',
                color: '#49494B',
              }}
              iconStyle={{
                color: '#6571F9',
                background: '#C6D6F7',
                boxShadow:
                  ' 0 0 0 4px #6571F9, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)',
              }}
              key={element.key}
              date={element.date}
              icon={element.icon}
            >
              <p
                style={{
                  marginTop: '0.5rem',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  lineHeight: '2rem',
                  color: '#1B1C1E',
                }}
              >
                {element.title}
              </p>
              <p
                style={{
                  fontWeight: 'normal',
                  fontSize: '1.125rem',
                  lineHeight: '1.75rem',
                  color: '#49494B',
                }}
              >
                {element.description}
              </p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default History;
