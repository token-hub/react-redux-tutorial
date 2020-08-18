import React, {useEffect} from 'react';
import { UserDispatch } from '../redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const UserComponent = ({ loading, data, error, fetchUser }) => {

	useEffect( () => fetchUser() , [] );
	console.log(error);
	return(
		<div>
			<p>users</p>
			<ul>
				{
					data.length > 0 && data.map(item => (
						<li>{item}</li>
					))
				}
				{
					error !== '' && <li>{error}</li>
				}
			</ul>
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
		fetchUser: () => dispatch( UserDispatch() )
	}
}

UserComponent.propTypes = {
	loading : PropTypes.bool.isRequired,
	data : PropTypes.array.isRequired,
	error : PropTypes.string.isRequired,
	fetchUser : PropTypes.func.isRequired
}

export default connect(reduxStateToProps, reduxDispatchToProps)(UserComponent)