import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { buyCake } from '../redux';

const NewCakeComponent = () => {
	
	const [cakeNum, setCakeNum] = useState(1);

	const dispatch = useDispatch();

	const changeHandler = e => {
		setCakeNum(e.target.value);
	}

	const clickHandler = () => {
		dispatch( buyCake(cakeNum) );
	}

	return(
		<div>
			<p> Number of Cakes </p>
			<input type="number" value={cakeNum}  onChange={changeHandler} />
			<button onClick={ clickHandler } > Buy { cakeNum } Cakes </button>
		</div>
	)
}

export default NewCakeComponent