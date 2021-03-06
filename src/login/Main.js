import React, { useState } from 'react';
import { Login } from './Index';
import { Register } from './Index';
import './main.scss';
import { useSpring, animated as a } from 'react-spring';

const Main = () =>{

    const [isLoginActive,setIsLoginActive] = useState(true);
    const currentactive = isLoginActive? "register":"login";
    const rn = () => {set(state => !state);setIsLoginActive(isLoginActive ? false : true);}
    // animated
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 40, tension: 500, friction: 170 }
    })
    return(
        <div className="App">
                <div className="login">
                    <div className="container-fluid">
                    <button id="switchBtn" className="btn btn-outline-primary" onClick={rn}>{currentactive}</button>
                    <div className="row">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <a.div style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
                                {isLoginActive && <Login />}
                                </a.div>
                                <a.div style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
                                {!isLoginActive && <Register />}
                                </a.div>
                            </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default Main;