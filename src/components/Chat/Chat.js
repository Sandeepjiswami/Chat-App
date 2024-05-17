import React from 'react';
import './Chat.css';
import avatar from "../img/avatar.png"


const Chat = () => {
    return (
        <>
            <div className='chat'>
                <div className='top'>
                    <div className='user'>
                        <img src={avatar} alt="" />
                        <div className='texts'>
                            <span>jane Doe</span>
                            <p>lorem flwihksdbvkn uvldfblxvjsx cjhsd xvndxjzh vdnzx hsjd vxcn sdfxvhl adnzxc vhd zxvn,sd zjhlv adnb vhdvndjhvx</p>
                        </div>
                    </div>
                    <div className='icons'>
                        <img src="./img/phone.png" alt=""/>
                        <img src="./img/video.png" alt=""/>
                        <img src="./img/info.png" alt=""/>
                    </div>
                </div>
                <div className='center'></div>
                <div className='bottom'>
                    <div className='icons'></div>
                    <input type='text' placeholder='type a message...'/>
                </div>
            </div>
        </>
    );
}

export default Chat;
