import React from 'react';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import CakeComponent from './components/CakeComponent';
import UserComponent from './components/UserComponent';
import CakeComponent2 from './components/CakeComponent2';
import ItemComponent from './components/ItemComponent';
import IceCreamComponent from './components/IceCreamComponent';


function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <CakeComponent /> <hr/>
            <CakeComponent2 /> <hr/>
            <IceCreamComponent /> <hr/>
            <ItemComponent category='cake' cake /> <hr/>
            <UserComponent /> <hr/>
        </Provider>
    </div>
  )
}

export default App;
