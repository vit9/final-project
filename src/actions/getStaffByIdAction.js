import * as types from '../constants/actionTypes'

const axios = require('axios')

const StaffRequestById = payload => ({
	type: types.STAFF_REQUEST_BY_ID,
	payload
});

const StaffRequestSuccessById = payload => ({
	type: types.STAFF_REQUEST_SUCCESS_BY_ID,
	payload
});

const StaffRequestFailById = payload => ({
	type: types.STAFF_REQUEST_FAIL_BY_ID,
	payload
});

export const getStaffsDataById = (payload) => {
	return dispatch => {
		dispatch(StaffRequestById());
		return axios.get(`http://127.0.0.1:2000/api/staffs?id=${payload}`)
			.then(res => {
				setTimeout(() => {
					dispatch(StaffRequestSuccessById(res))
				}, Math.random() * 1000);
			})
			.catch(err => {
				dispatch(StaffRequestFailById(err));
			})

	};
};

