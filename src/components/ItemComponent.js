import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

const ItemComponent = ({ category = 'cake', item, dispatch }) => {
	return(
		<div>
			<p> count of {category} - {item}</p>
			<button onClick={dispatch} >Buy {category}</button>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	const item = ownProps.cake
		? state.CakeReducer.cakeCount
		: state.IceCreamReducer.iceCreamCount;

	return {
		item: item
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	const dispatcher = ownProps.cake 
		? () => dispatch( buyCake() )
		: () => dispatch( buyIceCream() )

	return {
		dispatch: dispatcher
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemComponent);