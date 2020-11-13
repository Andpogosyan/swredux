import {combineReducers} from 'redux'
import characterReducer from './characterReducer';
import {modalReducer} from './modalReducer'





const rootReducer = combineReducers({
    characterReducer,
    modalReducer,
    })

export default rootReducer;