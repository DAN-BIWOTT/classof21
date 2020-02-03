import React,{ useState } from 'react';
import './register.scss';
import { useHistory } from "react-router-dom";
import { RadarSpinner } from 'react-epic-spinners';
import reg from '../images/reg.svg';
// redux stuff
import {useSelector, useDispatch} from 'react-redux';
import { signupUser } from '../redux/actions/userActions';

export const Register = () =>{
    const[email,setEmail] = useState("");
    const[username,setUserName] = useState("");
    const[password,setPassword] = useState("");
    const[confirmPassword,setConfirmPassword] = useState("");
    let history = useHistory();
  
    const newUser = {
        handle: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    }
    
    const updateEmail = (e) => {
        setEmail(e.target.value);
    }
    const updateUserName = (e) => {
        setUserName(e.target.value);
    }
    const updatePassword = (e) => {
        setPassword(e.target.value);
    }
    const updateConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }
    const UIstate = useSelector(state => state.UI);
    const dispatch = useDispatch();
    const submitForm = async(e) => {
        e.preventDefault();
        dispatch(signupUser(newUser,history));
    }

    const validateEmail = () => {
        if(UIstate.errorState === true && UIstate.errors !== undefined){
            if(UIstate.errors.email !== ""){
            return(
                <div className="small alert alert-danger">
                <strong>Email </strong>{UIstate.errors.email}
                </div>
            )}
        }
    }
    const validatePassword = () => {
        if(UIstate.errorState === true && UIstate.errors !== undefined){
            if(UIstate.errors.password !== ""){
            return(
                <div className="small alert alert-danger">
                <strong>Password </strong>{UIstate.errors.password}{UIstate.errors.confirmPassword}
                </div>
            )}
        }
    }
    const validateUsername = () => {
        if(UIstate.errorState === true && UIstate.errors !== undefined){
            if(UIstate.errors.handle !== ""){
            return(
                <div className="small alert alert-danger">
                <strong>Username </strong>{UIstate.errors.handle}
                </div>
            )}
        }
    }
    const renderButton = () =>{
        if(UIstate.loading === false){
            return (
                <button onClick={ submitForm } type="button" className="btn btn-lg btn-outline-primary" style={{marginLeft: '12vw'}}>
                   Register
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

    return(
        <div className="container">
           
            <div className="row">
                <div className="mx-auto shadow p-3 mb-5 bg-transparent rounded" style={{marginTop:"2vh"}}>
                <h4>User Registration</h4><hr/>
                <div className="image">
                <img src={ reg } alt=""/>
            </div>
                    <div className="row">
                    <div className="form-group col-md-6">
                            <label htmlFor="email" className="custFont">Email</label>
                            <input onChange={ updateEmail } value={email} className="form-control" type="email" placeholder="johndoe@kabarak.ac.ke" />
                            { validateEmail() }
                    </div>
                    <div className="form-group col-md-6">
                            <label htmlFor="username" className="custFont">Username</label>
                            <input onChange={ updateUserName } value={username} className="form-control" type="text" placeholder="Captain" />
                            { validateUsername() }
                    </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password" className="custFont">Password</label>
                        <input onChange={ updatePassword } value={password} className="form-control" type="Password" placeholder="password" />
                        { validatePassword() }
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPass" className="custFont">Confirm Password</label>
                        <input onChange={ updateConfirmPassword } value={confirmPassword} className="form-control" type="password" placeholder="confirm Password" />
                    </div>
                    {renderButton()}
                </div>
            </div>
        </div>
    )
}