import React from 'react';
import userimges from "../imges/pexels-hikaique-307847.jpg"

const Chats = () => {
    return (
        <>
            <div className='chats'>

                <div className='userChat'>
                    <img src={userimges} alt='' />
                    <div className='userChatInfo'>
                        <span>jane</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className='userChat'>
                    <img src={userimges} alt='' />
                    <div className='userChatInfo'>
                        <span>jane</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className='userChat'>
                    <img src={userimges} alt='' />
                    <div className='userChatInfo'>
                        <span>jane</span>
                        <p>Hello</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chats;
