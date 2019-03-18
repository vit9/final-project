import * as types from "../constants/actionTypes";

const axios = require("axios");

const userAuthRequestById = payload => ({
    type: types.USER_AUTH_REQUEST_BY_ID,
    payload
})

const userAuthRequestSuccessById = payload => ({
    type: types.USER_AUTH_REQUEST_SUCCESS_BY_ID,
    payload
})

const userAuthRequestFailById = payload => ({
    type: types.USER_AUTH_REQUEST_FAIL_BY_ID,
    payload
})

export const getUsersDataById = (payload) => {
    return dispatch => {
        dispatch(userAuthRequestById());
        return axios.get(`http://127.0.0.1:2000/api/users?id=${payload}`)
            .then(res => {
                dispatch(userAuthRequestSuccessById(res))
            })
            .catch(err => {
                dispatch(userAuthRequestFailById(err));
            })
    }
}

export const getParams = payload => ({
    type: types.GET_PARAMS,
    payload
})

export const deleteStaffById = (payload) => ({
	type:types.DELETE_STAFF,
	payload
})