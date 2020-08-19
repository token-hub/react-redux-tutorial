import React from 'react';
import { buyCake } from '../redux'
import { useSelector, useDispatch } from 'react-redux';

const CakeComponent = () => {

	const numberOfCakes = useSelector( state => state.CakeReducer.numberOfCakes );
	const dispatch = useDispatch();
	
	const clickHandler = () => {
		dispatch( buyCake() );
	}

	return(
		<div>
			<p>Number of Cakes - {numberOfCakes}</p>
			<button onClick={clickHandler} > Buy Cakes </button>
		</div>
	)
}

export default CakeComponent