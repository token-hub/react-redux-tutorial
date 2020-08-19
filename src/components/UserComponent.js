import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserDispatch } from '../redux';

/* import { connect } from 'react-redux';
const UserComponent ({ userData, dispatch }) => {
const { loading, data, error } = userData; */

const UserComponent = () => {
	const { loading, data, error } = useSelector( state => state.UserReducer);
	const dispatch = useDispatch();

	useEffect( () => {
		dispatch( UserDispatch() )
	}, [] )

	return(
		<div>
			<p>Users</p>
			<ul>
				{
					data.length > 0 && data.map(user => (
						<li key={user}>{user}</li>
					))
				}
				{
					error !== '' && <li>{error}</li>
				}
			</ul>
		</div>
	)
}

/*
const mapStateToProps = state => {
	return {
		userData: state.UserReducer
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch: () => dispatch( UserDispatch() )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)
 */

export default UserComponent