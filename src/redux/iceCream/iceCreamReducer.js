import { BUY_ICE_CREAM } from './IceCreamTypes';
 
const initialState = {
	iceCreamCount: 20
}

const IceCreamReducer = (state = initialState, action) => {
	switch(action.type) {
		case BUY_ICE_CREAM:
			return {
				iceCreamCount: state.iceCreamCount - 1
			}

		default:
			return state;
	}
}

export default IceCreamReducer