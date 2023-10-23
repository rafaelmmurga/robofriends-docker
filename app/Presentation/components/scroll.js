import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '72vh'}}>
      {props.children}
    </div>
  );
};

export default Scroll;