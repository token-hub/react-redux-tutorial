import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { userDispatch }  from '../redux';
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
		fetchUsers: () => dispatch( userDispatch() )
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