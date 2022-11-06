import React from 'react';

const Callback = ({onClick}) => {
  return (
    <div>
        <h1>Callback</h1>
        <button className='btn btn-success' 
        onClick={onClick}>
            Click
        </button>
    </div>
  )
};

export default Callback;