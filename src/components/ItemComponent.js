import React from 'react';
import { buyCake, buyIceCream } from '../redux';
import { connect } from 'react-redux';

const ItemComponent = ({ count, dispatch, category }) => {
	return(
		<div>
			<p>Number of {category} - {count}</p>
			<button onClick={dispatch}> buy {category} </button>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	const item = ownProps.cake
		? state.CakeReducer.numberOfCakes
		: state.IceCreamReducer.IceCreamCount

	return {
		count: item
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	const item = ownProps.cake
		? () => dispatch( buyCake() )
		: () => dispatch( buyIceCream() )

	return {
		dispatch: item
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemComponent)