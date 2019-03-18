import * as types from '../constants/actionTypes';

const axios = require('axios')

const SeacrhStaffRequestById = payload => ({
	type: types.SEARCH_STAFF_REQUEST_BY_ID,
	payload
});

const SeacrhStaffRequestSuccessById = payload => ({
	type: types.SEARCH_STAFF_REQUEST_SUCCESS_BY_ID,
	payload
});

const SeacrhStaffRequestFailById = payload => ({
	type: types.SEARCH_STAFF_REQUEST_FAIL_BY_ID,
	payload
});

export const getSeacrhStaffsDataById = (payload) => {
	return dispatch => {
		dispatch(SeacrhStaffRequestById());
		return axios.get(`http://127.0.0.1:2000/api/staffs?id=${payload}`)
			.then(res => {
				setTimeout(() => {
					dispatch(SeacrhStaffRequestSuccessById(res))
				}, Math.random() * 1000);
			})
			.catch(err => {
				dispatch(SeacrhStaffRequestFailById(err));
			})
	};
};