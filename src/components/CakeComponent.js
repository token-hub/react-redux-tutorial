import React from 'react';
import { buyCake } from '../redux/';
import { useSelector, useDispatch } from 'react-redux';

const CakeComponent = () => {

	const cakeCount = useSelector( state => state.CakeReducer.cakeCount );
	const dispatch = useDispatch();

	return(
		<div>
			<p>Cake Count: {cakeCount} </p>
			<button onClick = { () => dispatch( buyCake() ) } >Buy Cake</button>
		</div>
	)
}

export default CakeComponent