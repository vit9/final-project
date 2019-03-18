import * as types from '../constants/actionTypes';

const axios = require('axios');

export const podCategory = (payload) => ({
	type: types.POD_CATEGORY,
	payload
});

const CategoryRequest = (payload) => ({
	type: types.CATEGORY_REQUEST,
	payload
});

const CategoryRequestSuccess = payload => ({
	type: types.CATEGORY_REQUEST_SUCCESS,
	payload
});

const CategoryRequestFail = payload => ({
	type: types.CATEGORY_REQUEST_FAIL,
	payload
});

export const getCategoriesData = () => {
    return dispatch => {
        dispatch(CategoryRequest());
        return axios.get(`http://127.0.0.1:2000/api/categories`)
            .then(res => {
                setTimeout(() => {
                    dispatch(CategoryRequestSuccess(res))
                }, 1000);
            })
            .catch(err => {
                dispatch(CategoryRequestFail(err));
            })

    };
};