import axios from 'axios';
import { _FETCH_USER_REQUEST, _FETCH_USER_SUCCESS, _FETCH_USER_FAILED } from './userActions';

export const userDispatch = () => {
	return dispatch => {
		dispatch(_FETCH_USER_REQUEST());

		axios.get('https://jsonplaceholder.typicode.com/users')
		.then( response => {
			dispatch(_FETCH_USER_SUCCESS(response.data.map(user => user.id )));
		} )
		.catch( error => {
			dispatch(_FETCH_USER_FAILED(error.message))
		} )
	}
}
