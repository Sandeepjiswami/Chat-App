import React from 'react';
import './List.css';
import Chatlist from './chatList/Chatlist';
import Uselinfo from './uselinfo/uselinfo';

const List = () => {
    return (
        <>
            <div>
                list
     
                <Uselinfo />
                <Chatlist />
            </div>
        </>

    );
}

export default List;
