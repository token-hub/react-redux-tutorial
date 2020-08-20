import React from 'react';
import { buyIceCream } from '../redux';
import { connect } from 'react-redux';

const IceCreamComponent = ({ iceCreamCount, buyIceCream }) => {
	return(
		<div>
			<p> Ice Cream Count: {iceCreamCount}</p>
			<button onClick={ () => { buyIceCream() } }> Buy Ice cream </button>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		iceCreamCount: state.IceCreamReducer.iceCreamCount
	}
}

const mapDispatchToProps = dispatch => {
	return {
		buyIceCream: () => dispatch( buyIceCream() )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamComponent)