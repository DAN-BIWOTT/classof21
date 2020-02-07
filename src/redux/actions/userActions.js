import { SET_USER, SET_ERRORS,SET_ERRORSTATE, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED, UNLOADING_UI } from '../types';
import Axios from 'axios';
// ::::::::::::::::::::::LOGIN USER:::::::::::::::::::://
export const loginUser = ( userData,history ) => (dispatch) => {
    dispatch({type: LOADING_UI});
     Axios.post('https://us-central1-classof21-615ab.cloudfunctions.net/api/login/',userData)
    .then(res =>{
        setAuthorizationHeader(res.data.token)
        dispatch(getUserData(res.data.token));
        dispatch({type: CLEAR_ERRORS});
        history.push('/home');
    })
    .catch(err=>{
        dispatch({type: SET_ERRORSTATE});
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    }).catch(err => {
        console.error(err);
    })
}
// ::::::::::::::::::::::SIGNUP USER:::::::::::::::::::://
export const signupUser = ( newUserData,history ) => (dispatch) => {
    
    dispatch({type: LOADING_UI});
     Axios.post('https://us-central1-classof21-615ab.cloudfunctions.net/api/signup/',newUserData)
    .then(res =>{
        setAuthorizationHeader(res.data.token);
        dispatch(getUserData(res.data.token));
        dispatch({type: CLEAR_ERRORS});
        history.push('/home');
    })
    .catch(err=>{
        dispatch({type: SET_ERRORSTATE});
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        });
    })
}
// ::::::::::::::::::::::GET USER DATA:::::::::::::::::::://
export const getUserData = (Authorization) => ( dispatch ) => {
    const token = Authorization;
    const headers = {
    headers:{ "Content-Type": "application/json",
              "Cache-Control": "no-cache",
              "Access-Control-Allow-Origin": "*",
              "Authorization":`${token}`,
              "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}
}
    Axios.get('https://us-central1-classof21-615ab.cloudfunctions.net/api/user',headers)
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
// ::::::::::::::::::::::LOGOUT USER:::::::::::::::::::://
export const logoutUser = () => (dispatch) => {
    
    localStorage.clear();
    delete Axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
    window.location.href = '/#';
}

const setAuthorizationHeader = (token) => {
    const USERTOKEN = `Bearer ${token}`;
    localStorage.setItem('USERTOKEN',USERTOKEN);
    Axios.defaults.headers.common['Authorization'] = USERTOKEN;
}
