import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { _FETCH_USER_REQUEST, _FETCH_USER_SUCCESS, _FETCH_USER_FAILED } from '../redux';
import PropTypes from 'prop-types';

const UserComponent = ({ loading, data, error, fetchUsers }) => {
	
	useEffect( () => {
		fetchUsers();
	}, [] )

	return(
		<div>
			<p>Users ID</p>
			{
				data.length > 0 && data.map( id => (
					<li key={id}> {id} </li>
				) )
			}
			{
				error !== '' && <p> {error} </p>
			}
		</div>
	)
}

const reduxStateToProps = state => {
	return {
		loading: state.loading,
		data: state.data,
		error: state.error
	}
}

const reduxDispatchToProps = dispatch => {
	return {
		fetchUsers: () => dispatch( fetchUsers() )
	}
}

const fetchUsers = () => {
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

// prop types
UserComponent.propTypes = {
	loading: PropTypes.bool.isRequired,
	data: PropTypes.array.isRequired,
	error: PropTypes.string.isRequired,
	fetchUsers: PropTypes.func.isRequired
}

export default connect(reduxStateToProps, reduxDispatchToProps)(UserComponent)