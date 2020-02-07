import { SET_ERRORS,SET_ERRORSTATE, CLEAR_ERRORS, LOADING_UI, UNLOADING_UI,SET_MESSAGE } from '../types';
import Axios from 'axios';
import { bindActionCreators } from 'redux';
// ::::::::::::::::::::::GET ATTACHMENT DATA:::::::::::::::::::://
export const sendAttachmentData = (newData) => (dispatch) => {
    dispatch({type: CLEAR_ERRORS});
    dispatch({type: LOADING_UI});
    const token = localStorage.getItem('USERTOKEN');
    Axios.post('https://us-central1-classof21-615ab.cloudfunctions.net/api/attachment/',newData)
    .then(res => {
      Axios.defaults.headers.common['Authorization'] = token;
        console.log(res.data)
        dispatch({type: UNLOADING_UI});
        dispatch({
            type: SET_MESSAGE,
            payload: res.data
        });
        window.location.href = '/home/#';
    })
    .catch(err => {
        dispatch({type: SET_ERRORSTATE});
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        });
    })
} 