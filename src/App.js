import React from 'react';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import CakeComponent from './components/CakeComponent';

function App() {
  return (
    <Provider store={store}>
         <div className="App">
            <CakeComponent />
        </div>
    </Provider>
  )
}

export default App;
