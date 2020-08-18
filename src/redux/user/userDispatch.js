import axios from 'axios';
import { _fetch_user_request, _fetch_user_success, _fetch_user_failed } from './UserActions';

export const UserDispatch = () => {
	return dispatch => {
		dispatch(_fetch_user_request());

		axios.get('https://jsonplaceholder.typi2code.com/users')
		.then( response => {
			dispatch(_fetch_user_success(response.data.map(user => user.id)));
		} )
		.then( error => {
			dispatch(_fetch_user_failed(error));
		} )
	}
}