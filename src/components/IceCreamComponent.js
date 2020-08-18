import React from 'react';
import PropTypes from 'prop-types';
import { buyIceCream } from '../redux';
import { connect } from 'react-redux';

const IceCreamComponent = ({ numberOfIceCream, buyIceCream }) => {
	return(
		<div>
			<p>Number of IceCream - {numberOfIceCream}</p>
			<button onClick={buyIceCream}>Buy IceCream</button>
		</div>
	)
}

const reduxStateToProps = state => {
	return {
		numberOfIceCream: state.IceCreamReducer.numberOfIceCream
	}
}

const reduxDispatchToProps = dispatch => {
	return {
		buyIceCream: () => dispatch( buyIceCream() )
	}
}

IceCreamComponent.propTypes = {
	numberOfIceCream: PropTypes.number.isRequired,
	buyIceCream: PropTypes.func.isRequired
}

export default connect(reduxStateToProps, reduxDispatchToProps)(IceCreamComponent)