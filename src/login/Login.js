import React, { useState } from 'react';
import loginImage from '../images/login.svg';
import { RadarSpinner } from 'react-epic-spinners';
import { useHistory } from "react-router-dom";
// REDUX STUFF
import { loginUser } from '../redux/actions/userActions';
import { useSelector,useDispatch } from 'react-redux';

export const Login = () =>{

    let history = useHistory();
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    
    const user = {
        email: email,
        password: password
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }
    const updatePassword = (e) => {
        setPassword(e.target.value);
    }
    const dispatch = useDispatch();
    const submitForm = async(e) => {
        e.preventDefault();
        dispatch(loginUser(user,history));
    }
    const uiState = useSelector(state => state.UI)
    const renderButton = () => {
        if(uiState.loading === false){
            return (
                <button onClick={ submitForm } type="button" className="btn btn-lg btn-outline-primary" style={{marginLeft: '12vw'}}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
                   Login
                </button>
            )
        }else{
            return(
                <button onClick={ submitForm } type="button" className="btn btn-lg btn-outline-primary" style={{marginLeft: '12vw'}}>
                    <RadarSpinner color="red" size={30} animationDelay={20} />
                </button>
                )
        }
    }
    
    
    const validateEmail = () => {
        if(uiState.errorState === true && uiState.errors !== undefined){
                return(
                <div className="small alert alert-danger">
                <strong>Email </strong>{uiState.errors.email}
                </div>)
        }
    }
    const validatePassword = () => {
        if(uiState.errorState === true  && uiState.errors !== undefined){
            return(
            <div className="small alert alert-danger">
           {uiState.errors.password}
            <strong>{uiState.errors.general}</strong>
            </div>)
        }
    }

    return(
        <div className="base-container">
            <div className="mx-auto shadow p-3 mb-5 bg-transparent rounded">
            <div className="content">
            <div className="image">
                <img src={ loginImage } alt=""/>
            </div>
            <div className="form">
                <div className="form-groups">
                    <label htmlFor="email" className="custFont">Email:</label>
                    <input value={email} onChange={updateEmail} type="email" name="email" placeholder="johndoe@kabarak.ac.ke" />
                    { validateEmail() }
                </div>
                <div className="form-groups">
                    <label htmlFor="Password" className="custFont">Password:</label>
                    <input value={password} onChange={updatePassword} type="Password" name="Password" placeholder="password" />
                    { validatePassword() }
                </div>
            </div>
            </div>
            <div className="footer">
            {renderButton()}
            </div>
            </div>
        </div>
    );
}