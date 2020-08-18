import React from 'react';
import './App.css';
import store from './redux/store';
import AsyncStore from './redux/AsyncStore';
import { Provider } from 'react-redux';
import CakeComponent from './components/CakeComponent';
import NewCakeComponent from './components/NewCakeComponent';
import HooksCakeComponent from './components/HooksCakeComponent';
import IceCreamComponent from './components/IceCreamComponent';
import UserComponent from './components/UserComponent';


function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <CakeComponent /> <hr/>
            <HooksCakeComponent /> <hr/>
            <NewCakeComponent/> <hr/>
            <IceCreamComponent /> <hr/>
        </Provider>
        <Provider store={AsyncStore}>
            <UserComponent />
        </Provider>
    </div>
  )
}

export default App;
