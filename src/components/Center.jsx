import React from 'react';

function Center(props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {props.children}
    </div>
  );
}

export default Center;
