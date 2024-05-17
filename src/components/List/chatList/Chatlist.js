import React, { useState } from 'react';
import './Chatlist.css';
import search from '../img/search.png';
import plus from '../img/plus.png';
import minus from "../img/minus.png";
import avatar from "../img/avatar.png";


const Chatlist = () => {
    const [addMode, setaddMode] = useState(false);
    return (
        <>
            <div className='Chatlist'>
                <div className='search'>
                    <div className='searchBar'>
                        <img src={search} alt='' />
                        <input type='text' placeholder='search' />
                    </div>
                    <img src={addMode ? minus : plus} alt='' className='add' onClick={() => setaddMode((prev) => !prev)} />
                </div>
                <div className='item'>
                    <img src={avatar} alt="" />
                    <div className='texts'>
                        <span>jane Doe</span>
                        <p>Hello </p>
                    </div>
                </div>
                <div className='item'>
                    <img src={avatar} alt="" />
                    <div className='texts'>
                        <span>jane Doe</span>
                        <p>Hello </p>
                    </div>
                </div>
                <div className='item'>
                    <img src={avatar} alt="" />
                    <div className='texts'>
                        <span>jane Doe</span>
                        <p>Hello </p>
                    </div>
                </div>
                <div className='item'>
                    <img src={avatar} alt="" />
                    <div className='texts'>
                        <span>jane Doe</span>
                        <p>Hello </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chatlist;
