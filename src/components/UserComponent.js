import React, {useEffect} from 'react';
import { fetchUsers } from '../redux';
import { connect } from 'react-redux';

const UserComponent = ({ userState, dispatch }) => {

	const { loading, data, error } = userState;

	useEffect( () => {
		dispatch();
	}, [] )

	return(
		<div>
			<p> Users </p>
			<ul>
				{
					data.length > 0 && data.map( user => (
						<li>{ user }</li>
					) )
				}
				{
					error !== '' && <li>{ error }</li>
				}
			</ul>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		userState: state.UserReducer
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch: () => dispatch( fetchUsers() )
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)