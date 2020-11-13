import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../redusers/rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


console.log(rootReducer, 'root')

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;