const { CHANGE_MODAL_STATUS } = require("../actions/modalAction");


export type InitialStateType = {
    status: boolean
    whoclick: string
}

const initialState : InitialStateType = {
    status: false,
    whoclick: '',
}

export const modalReducer = (state = initialState, action: any) : InitialStateType =>{
    switch(action.type){
        case CHANGE_MODAL_STATUS:
            return {
                ...state,
                status: !state.status,
                whoclick: action.payload
            }
        default:
            return state
    }
}