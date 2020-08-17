import { BUY_ICE_CREAM } from './iceCreamTypes';

const initialState = {
	numIceCream: 20
}

const iceCreamReducer = (state = initialState, action) => {
	switch(action.type) {
		case BUY_ICE_CREAM:
			return {
				numIceCream: state.numIceCream - 1
			}
		default:
			return state;
	}
}

export default iceCreamReducer