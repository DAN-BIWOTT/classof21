import { SET_USER, SET_ERRORS,SET_ERRORSTATE, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED } from '../types';
import Axios from 'axios';

export const loginUser = ( userData,history ) => (dispatch) => {
    dispatch({type: LOADING_UI});
     Axios.post('https://us-central1-classof21-615ab.cloudfunctions.net/api/login/',userData)
    .then(res =>{
        setAuthorizationHeader(res.data.token)
        dispatch(getUserData());
        dispatch({type: CLEAR_ERRORS});
        history.push('/home');
    })
    .catch(err=>{
        dispatch({type: SET_ERRORSTATE});
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
        
    })
}

export const signupUser = ( newUserData,history ) => (dispatch) => {
    
    dispatch({type: LOADING_UI});
     Axios.post('https://us-central1-classof21-615ab.cloudfunctions.net/api/signup/',newUserData)
    .then(res =>{
        setAuthorizationHeader(res.data.token);
        dispatch(getUserData());
        dispatch({type: CLEAR_ERRORS});
        history.push('/home');
    })
    .catch(err=>{
        dispatch({type: SET_ERRORSTATE});
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    })
}

export const getUserData = () => ( dispatch ) => {
    Axios.get('https://us-central1-classof21-615ab.cloudfunctions.net/api/user')
    .then(res => {
        dispatch({
            type: SET_USER,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err);
    })
}

export const logoutUser = () => (dispatch) => {
    
    localStorage.removeItem('USERTOKEN');
    delete Axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
    window.location.href = '/login';
}

const setAuthorizationHeader = (token) => {
    const USERTOKEN = `Bearer ${token}`;
    localStorage.setItem('USERTOKEN',USERTOKEN);
    Axios.defaults.headers.common['Authorization'] = USERTOKEN;
}