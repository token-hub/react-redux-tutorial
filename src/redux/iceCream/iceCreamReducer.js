import { BUY_ICE_CREAM } from './IceCreamTypes';

const initialState = {
	IceCreamCount: 20
}

const IceCreamReducer = (state = initialState, action) => {
	switch(action.type) {
		case BUY_ICE_CREAM:
			return {
				IceCreamCount: state.IceCreamCount - 1
			}

		default:
			return state;
	}
}

export default IceCreamReducer