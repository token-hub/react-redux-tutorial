import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import userReducer from './user/userReducer';

const store2 = createStore(userReducer, applyMiddleware(ReduxThunk));

export default store2