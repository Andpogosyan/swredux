const { CHANGE_MODAL_STATUS } = require("../actions/modalAction");


const initialState = {
    status: false,
    whoclick: '',
}

export const modalReducer = (state = initialState, action) =>{
    switch(action.type){
        case CHANGE_MODAL_STATUS:
            return {
                ...state,
                status: !state.status,
                whoclick: action.payload.whoclick
            }
        default:
            return state
    }
}