import React from 'react';
import "./Style.css";
import imglogo from "../imges/icons8-img.gif"

function Register() {
    return (
        <>
            <div className='formContainer'>
                <div className='formWrapper'>
                    <span className='logo'>Sandeep chat</span>
                    <span className='title'>Register</span>
                    <form action=''>
                        <input type="text" placeholder='Display Name' />
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='password' />
                        <input style={{display:"none"}} type="file" id='file' />
                        <label className='filename' htmlFor='file'>
                            <img src={imglogo} alt=''/>
                        </label>
                        <button>Sign up</button>
                        <p>You do have an account? Login</p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
