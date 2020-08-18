import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux'; 

const HooksCakeComponent = () => {
	// param ( func(state) ) returns the selected state
	const numCakes = useSelector( state => state.cakeReducer.numCakes );

	// return dispatch method
	const dispatch = useDispatch();
	return(
		<div>
			<p>Hook Number of Cakes - {numCakes} </p>
			<button onClick={ () => dispatch( buyCake() ) }> Buy cake </button>
		</div>
	)
}

export default HooksCakeComponent