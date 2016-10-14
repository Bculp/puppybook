import {createStore, applyMiddleware} from 'redux';
import puppyReducer from './reducer';
import thunkMiddleware from 'redux-thunk';

let store = createStore(puppyReducer, applyMiddleware(thunkMiddleware));

export default store;