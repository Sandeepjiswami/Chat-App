import React from 'react';
import uger from "../imges/pexels-chetan-menaria-31592-237697.jpg";

const Message = () => {
    return (
        <>
            <div className='message'>
                <div className='messageInfo'>
                    <img src={uger} alt='' />
                    <span>John Doe</span>
                </div>
                <div className='messageContent'>
                    <p>Hello</p>
                    <img src={uger} alt=''/>
                </div>
            </div>
        </>
    );
}

export default Message;
