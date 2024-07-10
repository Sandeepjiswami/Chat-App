import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';

const Sidebar = () => {
    return (
        <>
         <div className='sidebar'>
            <Navbar/>
            <Search/>
            <Chats/>
            {/* <h1>sidebar</h1> */}
         </div>
        </>
    );
}

export default Sidebar;
