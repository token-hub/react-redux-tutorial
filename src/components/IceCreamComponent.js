import React from 'react';
import { buyIceCream } from '../redux'
import { useSelector, useDispatch } from 'react-redux';

const IceCreamComponent = () => {

	const iceCreamCount =  useSelector( state => state.IceCreamReducer.IceCreamCount );
	const dispatch = useDispatch();

	return(
		<div>
			<p>Number of Ice Cream - {iceCreamCount}</p>
			<button onClick={ () => dispatch( buyIceCream() ) }> Buy Ice Cream </button>
		</div>
	)
}

export default IceCreamComponent