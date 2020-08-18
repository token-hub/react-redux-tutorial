import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from './UserTypes';

const initialState = {
	loading: false,
	data: [],
	error: ''
}

const UserReducer = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_USER_REQUEST:
			return {
				...state,
				loading: true
			}

		case FETCH_USER_SUCCESS:
			return {
				loading: false,
				data: action.data,
				error: ''
			}

		case FETCH_USER_FAILED:
			return {
				loading: false,
				data: [],
				error: action.data
			}

		default:
			return state
	}
}

export default UserReducer