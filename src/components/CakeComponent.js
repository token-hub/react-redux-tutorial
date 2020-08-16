import React from 'react';
import { buyCake } from '../redux';
import { connect } from 'react-redux';

const CakeComponent = ({numOfCakes, buycake}) => {
	return(
		<div>
			<p>Number of Cake - {numOfCakes}</p>
			<button onClick={buycake}>Buy Cake</button>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		numOfCakes: state.numCakes
	}
}

const mapDispatchToProps = dispatch => {
	return {
		buycake: () => dispatch(buyCake())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent)