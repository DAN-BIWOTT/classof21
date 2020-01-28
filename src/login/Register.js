import React from 'react';
import loginImage from '../images/login.jpg';

export const Register = () =>{
    return(
        <div className="base-container">
            <div className="content">
            <div className="image">
                <img src={ loginImage } alt="" />
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
                <div className="form-group">
                    <label htmlFor="confirmPass">Confirm Password</label>
                    <input type="password" name="confirmPassword" placeholder="confirm Password" />
                </div>
            </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">
                    Register
                </button>
            </div>
        </div>
    )
}