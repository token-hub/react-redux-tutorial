import { createStore } from 'redux';
import cakeReducer from './cake/cakeReducer';

// param (reducer | middleware)
const store = createStore(cakeReducer);

export default store