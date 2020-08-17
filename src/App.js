import React from 'react';
import './App.css';
import store from './redux/store';
import store2 from './redux/store2';
import { Provider } from 'react-redux';
import CakeComponent from './components/CakeComponent';
import IceCreamComponent from './components/IceCreamComponent';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <div className="App">
        <Provider store={store} >
            <CakeComponent />
            <IceCreamComponent />
        </Provider>

        <Provider store={store2} >
            <UserComponent />
        </Provider>
    </div>
  )
}

export default App;
