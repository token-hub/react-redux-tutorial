import axios from 'axios';
import { 
	FETCH_USER_REQUEST,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAILED
} from './UserTypes';

const fetchUserRequest = () => {
	return {
		type: FETCH_USER_REQUEST
	}
}

const fetchUserSuccess = data => {
	return {
		type: FETCH_USER_SUCCESS,
		payload: data
	}
}

const fetctUserFailed = error => {
	return {
		type: FETCH_USER_FAILED,
		payload: error
	}
}

const fetchUsers = () => {
	return dispatch => {
		dispatch(fetchUserRequest());
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then( response => {
			dispatch(fetchUserSuccess(response.data.map(user => user.name)))
		} )
		.catch( error => {
			dispatch(fetctUserFailed(error.message))
		} )
	}
}

export {
	fetchUserRequest,
	fetchUserSuccess,
	fetctUserFailed,
	fetchUsers
}

