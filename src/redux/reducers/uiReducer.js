import { SET_ERRORSTATE,SET_ERRORS,CLEAR_ERRORS,LOADING_UI,UNSET_ERRORSTATE,UNLOADING_UI } from '../types';

const initialState = {
    errorState: false,
    loading: false,
    errors: null
}

export default function(state = initialState,action){
    switch (action.type) {
        case SET_ERRORSTATE:
            return {
                errorState: true
            } 
        case UNSET_ERRORSTATE:
            return {
                errorState: false
            } 
        case SET_ERRORS:
            return{
                ...state,
                loading: false,
                errors: action.payload
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                loading: false,
                errors: null
            }
        case LOADING_UI:
            return{
                ...state,
                loading: true
            }
        case UNLOADING_UI:
            return{
                ...state,
                loading: false
            }
        default:
            return state;
    }
}