import React from 'react';
import { buy_cake } from '../redux';
import { connect } from 'react-redux';

const CakeComponent = ({ numCakes, buy_cake }) => {
	return(
		<div>
			<p>Number of Cakes - {numCakes}</p>
			<button onClick={buy_cake}>Buy Cakes</button>
		</div>
	)
}

const reduxStateToProps = state => {
	return {
		numCakes: state.cakeReducer.numCakes
	}
}

const reduxDispatchToProps = dispatch => {
	return {
		buy_cake: () => dispatch(buy_cake())
	}
}

export default connect(reduxStateToProps, reduxDispatchToProps)(CakeComponent)