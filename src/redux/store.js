import { createStore, combineReducers, applyMiddleware } from 'redux';

import CakeReducer from './cake/CakeReducer';
import IceCreamReducer from './iceCream/IceCreamReducer';
import UserReducer from './user/UserReducer';
import ReduxThunk from 'redux-thunk';

// param (reducer, middleware)

const rootReducer = combineReducers({
	CakeReducer: CakeReducer,
	IceCreamReducer: IceCreamReducer,
	UserReducer: UserReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store