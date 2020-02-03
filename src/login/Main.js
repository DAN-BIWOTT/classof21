import React, { useState } from 'react';
import { Login } from './Index';
import { Register } from './Index';
import './main.scss';

const Main = () =>{

    const [isLoginActive,setIsLoginActive] = useState(true);
    const currentactive = isLoginActive? "register":"login";
    const rn = () => {setIsLoginActive(isLoginActive ? false : true);}
    
    return(
        <div className="App">
                <div className="login">
                    <div className="container">
                        {isLoginActive && <Login/>}
                        {!isLoginActive && <Register/>}
                    </div>
                    <button onClick={rn}>{currentactive}</button>
                </div>
            </div>
    )
}

export default Main;