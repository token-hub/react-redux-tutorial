import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import CakeReducer from './cake/CakeReducer';
import IceCreamReducer from './iceCream/IceCreamReducer';
import UserReducer from './user/UserReducer';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
	CakeReducer: CakeReducer,
	IceCreamReducer: IceCreamReducer,
	UserReducer: UserReducer
})

// param (reducer, middleware)
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)) );

export default store