import React from 'react';
import { buy_ice_cream } from '../redux';
import { connect } from 'react-redux';

const IceCreamComponent = ({ numIceCream, buy_ice_cream }) => {
	return(
		<div>
			<p>Number of IceCream - {numIceCream}</p>
			<button onClick={buy_ice_cream}> Buy IceCream </button>
		</div>
	)
}

const reduxStateToProps = state => {
	return {
		numIceCream: state.iceCreamReducer.numIceCream
	}
}

const reduxDispatchToProps = dispatch => {
	return {
		buy_ice_cream: () => dispatch(buy_ice_cream())
	}
}

export default connect(reduxStateToProps, reduxDispatchToProps)(IceCreamComponent)