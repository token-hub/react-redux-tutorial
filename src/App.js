import React from 'react';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import CakeComponent from './components/CakeComponent';
import IceCreamComponent from './components/IceCreamComponent';

function App() {
  return (
    <div className="App">
        <Provider store={store} >
            <CakeComponent />
        </Provider>
        <Provider store={store} >
            <IceCreamComponent />
        </Provider>
    </div>
  )
}

export default App;
