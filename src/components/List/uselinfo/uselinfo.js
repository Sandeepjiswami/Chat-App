import React from 'react';
import "./userInfo.css";
import more from '../img/more.png'
import video from '../img/video.png'
import edit from '../img/edit.png'
import avatar from '../img/avatar.png'


const Uselinfo = () => {
    return (
        <>
            <div className='userInfo'>
                <div className='user'>
                    <img src={avatar} alt=''/>
                    <h2>John Doe</h2>
                </div>
                <div className='icons'>
                    <img src={more} alt=""/>
                    <img src={video} alt=""/>
                    <img src={edit} alt=""/>
                </div>
            </div>
        </>
    );
}

export default Uselinfo;
