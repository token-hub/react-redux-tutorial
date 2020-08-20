import { BUY_CAKE } from './CakeTypes';

const initialState = {
	cakeCount: 10
}

const CakeReducer = (state = initialState, action) => {
	switch(action.type) {
		case BUY_CAKE:
			return {
				cakeCount: state.cakeCount - 1
			}

		default:
			return state;
	}
}

export default CakeReducer