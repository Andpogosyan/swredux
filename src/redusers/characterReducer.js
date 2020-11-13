import {GET_CHARACTERS_REQUEST, GET_CHARACTERS_SUCCESS, GET_CHARACTERS_FAIL} from '../actions/characterActions'


const initialState = {
    data: {},
    next: 'http://swapi.dev/api/people/?page=1',
    previous: null,
    isFetching: false,
    error: false,
}

const characterReducer = ( state = initialState, action ) =>{
    switch(action.type){
        case GET_CHARACTERS_REQUEST:
            return {
                ...state, 
                isFetching: true,
                error: ''
            }
        case GET_CHARACTERS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isFetching: false
            }
        case GET_CHARACTERS_FAIL:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}

export default characterReducer;