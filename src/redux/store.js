import { createStore } from 'redux';
import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';

// param {}
const rootReducer = combineReducers({
	cakeReducer: cakeReducer,
	iceCreamReducer: iceCreamReducer
})

// param (reducer, middleware)
const store = createStore(rootReducer);

export default store