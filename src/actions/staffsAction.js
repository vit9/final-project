import * as types from "../constants/actionTypes";

const axios = require('axios');

export const getInfoStaffData = payload => ({
	type: types.GET_STAFF_INFO_DATA,
	payload
})

const StaffRequest = payload => ({
	type: types.STAFF_REQUEST,
	payload
});

const StaffRequestSuccess = payload => ({
	type: types.STAFF_REQUEST_SUCCESS,
	payload
});

const StaffRequestFail = payload => ({
	type: types.STAFF_REQUEST_FAIL,
	payload
});

export const getStaffsData = () => {
	return dispatch => {
		dispatch(StaffRequest());
		return axios.get(`http://127.0.0.1:2000/api/staffs`)
			.then(res => {
				setTimeout(() => {
					dispatch(StaffRequestSuccess(res))
				}, 1000);
			})
			.catch(err => {
				dispatch(StaffRequestFail(err));
			})

	};
};