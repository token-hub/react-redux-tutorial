import axios from 'axios';

import { 
	fetchUserRequest, 
	fetchUserSuccess,
	fetchUserFailed
} from './UserAction';

export const UserDispatch = () => {
	return dispatch => {
		dispatch(fetchUserRequest());

		axios.get('https://jsonplaceholder.typicode.com/users')
		.then( response => {
			dispatch(fetchUserSuccess(response.data.map(user => user.id)));
		} )
		.catch( error => {
			dispatch(fetchUserFailed(error.message));
		} )

	}
}