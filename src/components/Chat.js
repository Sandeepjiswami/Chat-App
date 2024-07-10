import React from 'react';
import Input from './Input';
import Massages from './Massages';
import cam from "../imges/icons8-cam-24.png";
import more from "../imges/icons8-more-32.png";
import user from "../imges/icons8-user-30.png";

const Chat = () => {
    return (
        <>
            <div className='chat'>
                <div className='chatInfo'>
                    <span>Jane</span>
                    <div className='chatIcons'>
                        <img src={cam} alt='cam' />
                        <img src={user} alt='add' />
                        <img src={more} alt='More' />
                    </div>
                </div>
                <Massages />
                <Input />
            </div>
        </>
    );
}

export default Chat;
