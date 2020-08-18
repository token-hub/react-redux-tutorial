import React from 'react';
import PropTypes from 'prop-types';
import { buyCake } from '../redux';
import { connect } from 'react-redux';

const CakeComponent = ({ numCakes, buyCake }) => {
	return(
		<div>
			<p> Number of Cakes - {numCakes}</p>
			<button onClick={buyCake}>Buy Cake</button>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		numCakes: state.cakeReducer.numCakes
	}
}

const mapDispatchToProps = dispatch => {
	return {
		buyCake: () => dispatch( buyCake() )
	}
}

CakeComponent.propTypes = {
	numCakes: PropTypes.number.isRequired,
	buyCake: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent)