import React from 'react';
import u from '../imges/pexels-danxavier-1121796.jpg'

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <span className='logo'>Lama chat</span>
                <div className='user'>
                    <img src={u} />
                    <span>John</span>
                    <button>logout</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
