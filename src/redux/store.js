import { createStore } from 'redux';
import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import userReducer from './user/userReducer';

// param {}
const rootReducer = combineReducers({
	cakeReducer: cakeReducer,
	iceCreamReducer: iceCreamReducer
})

// param (reducer, middleware)
const store = createStore(rootReducer);

export default store