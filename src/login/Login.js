import React from 'react';
import loginImage from '../images/login.jpg';

export const Login = () =>{
    return(
        <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
            <div className="image">
                <img src={ loginImage } alt=""/>
            </div>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="johndoe@kabarak.ac.ke" />
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input type="Password" name="Password" placeholder="password" />
                </div>
            </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">
                    Login
                </button>
            </div>
        </div>
    )
}