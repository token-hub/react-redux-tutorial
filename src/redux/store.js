import { createStore } from 'redux';
import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import IceCreamReducer from './iceCream/IceCreamReducer';

const rootReducer = combineReducers({
	cakeReducer: cakeReducer,
	IceCreamReducer: IceCreamReducer
});

// param (reducer, middleware)
const store = createStore(rootReducer);

export default store