import * as types from '../constants/actionTypes'

const axios = require('axios')

const CategoryRequestById = payload => ({
	type: types.CATEGORY_REQUEST_BY_ID,
	payload
});

const CategoryRequestSuccessById = payload => ({
	type: types.CATEGORY_REQUEST_SUCCESS_BY_ID,
	payload
});

const CategoryRequestFailById = payload => ({
	type: types.CATEGORY_REQUEST_FAIL_BY_ID,
	payload
});

export const getCategorysDataById = (payload) => {
	console.log(payload)
	return dispatch => {
		dispatch(CategoryRequestById());
		return axios.get(`http://127.0.0.1:2000/api/categories?id=${payload}`)
			.then(res => {
				setTimeout(() => {
					dispatch(CategoryRequestSuccessById(res))
				}, Math.random() * 1000);
			})
			.catch(err => {
				dispatch(CategoryRequestFailById(err));
			})

	};
};