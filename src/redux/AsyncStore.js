import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import UserReducer from './user/UserReducer';

// param (reducer, middleware)
const AsyncStore = createStore(UserReducer, applyMiddleware(ReduxThunk));

export default AsyncStore