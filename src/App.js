import React from 'react';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import UserComponent from './components/UserComponent';
import ItemComponent from './components/ItemComponent';
import CakeComponent from './components/CakeComponent';
import IceCreamComponent from './components/IceCreamComponent';

function App() {
  return (
    <div className="App">
		<Provider store={store}>
		{/*	<CakeComponent /> 
			<IceCreamComponent />*/}
			<ItemComponent />
			<ItemComponent cake category='Ice Cream'/>
			
			<UserComponent />
		</Provider>
    </div>
  )
}

export default App;
