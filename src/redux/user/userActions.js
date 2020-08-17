import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from './userTypes';

const _FETCH_USER_REQUEST = () => {
	return {
		type: FETCH_USER_REQUEST
	}
}

const _FETCH_USER_SUCCESS = users => {
	return {
		type: FETCH_USER_SUCCESS,
		data: users
	}
}

const _FETCH_USER_FAILED = users => {
	return {
		type: FETCH_USER_FAILED,
		data: users
	}
}

export { _FETCH_USER_REQUEST, _FETCH_USER_SUCCESS, _FETCH_USER_FAILED }
