import { SET_MESSAGE } from '../types';

const initialState = {
    responseMessage : ""
}

export default function(state = initialState,action) {
    switch (action.type) {
        case SET_MESSAGE:
            return{
            ...state,
            responseMessage : action.payload.message
            }
        default:
            return state
    }
}