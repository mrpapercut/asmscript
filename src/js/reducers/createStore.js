import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';

import mainReducer from './mainReducer';

const combinedReducer = combineReducers({
    mainReducer
});

export default () => createStore(combinedReducer, applyMiddleware(thunk));
