import { BUY_CAKE } from './CakeTypes';

const initialState = {
	numberOfCakes: 10
}

const CakeReducer = (state = initialState, action) => {
	switch(action.type) {
		case BUY_CAKE:
			return {
				numberOfCakes: state.numberOfCakes - action.count
			}
		default:
			return state;
	}
}

export default CakeReducer