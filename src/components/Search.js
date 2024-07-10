import React from 'react';
import userimges from '../imges/pexels-danxavier-1121796.jpg';

const Search = () => {
    return (
        <>
            <div className='seach'>
                <div className='seachForm'>
                    <input type='text' placeholder='find a user' />
                </div>
                <div className='userChat'>
                    <img src={userimges} alt='' />
                    <div className='userChatInfo'>
                        <span>jane</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Search;
