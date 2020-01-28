import React, { useState } from 'react';
import { Login } from './Index';
import { Register } from './Index';
import './main.scss';

const Main = () =>{

    const [isLoginActive,setIsLoginActive] = useState(true);
    const current = isLoginActive? "Register":"Log in";
    const currentactive = isLoginActive? "log in":"register";
    
    return(
        <div className="App">
            <div className="login">
                <div className="container">
                    {isLoginActive && <Login/>}
                    {!isLoginActive && <Register/>}
                </div>
                <RightSide/>
            </div>
        </div>
    )
}

const RightSide = (props) => {
    return(
        <div className="right-side">
            <div className="inner-container">
                <div className="text">
                    {props.current}
                </div>
            </div>
        </div>
    )
}

export default Main;