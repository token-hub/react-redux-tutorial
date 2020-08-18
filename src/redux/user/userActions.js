import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from './UserTypes';

const _fetch_user_request = () => {
	return {
		type: FETCH_USER_REQUEST
	}
}

const _fetch_user_success = data => {
	return {
		type: FETCH_USER_SUCCESS,
		data: data
	}
}

const _fetch_user_failed = data => {
	return {
		type: FETCH_USER_FAILED,
		data: data
	}
}

export { _fetch_user_request, _fetch_user_success, _fetch_user_failed }