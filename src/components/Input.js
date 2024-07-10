import React from 'react';
import imges from "../imges/icons8-attach-50.png";

const Input = () => {
  return (
    <>
      <div className='input'>
        <input type="text" placeholder='Type something' />
        <div className='inputimg'>
          <img src={imges} alt="1" />
          <img src={imges} alt="2" />
          <button>Send</button>
        </div>
      </div>
    </>
  );
}

export default Input;
