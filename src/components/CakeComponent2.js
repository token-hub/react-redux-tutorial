import React, {useState} from 'react';
import { buyCake } from '../redux';
import { useSelector, useDispatch } from 'react-redux';

const CakeComponent2 = () => {
		
	const [cakeCnt, setCakeCnt] = useState(1);
	const numberOfCakes = useSelector( state => state.CakeReducer.numberOfCakes );
	const dispatch = useDispatch();

	const changeHandler = e => {
		setCakeCnt(e.target.value);
	}

	const clickHandler = () => {
		 dispatch(buyCake(cakeCnt));
	}

	return(
		<div>
			<p> number of Cakes - {numberOfCakes} </p>
			<input type="number" onChange={changeHandler} value={cakeCnt} />
			<button onClick={clickHandler}> Buy {cakeCnt} Cakes </button>
		</div>
	)
}

export default CakeComponent2