import * as types from "../constants/actionTypes";

const axios = require("axios");

export const closeModal = payload => ({
    type: types.CLOSE_MODAL_WINDOW,
    payload
})

const userAuthRequest = payload => ({
    type: types.USER_AUTH_REQUEST,
    payload
})

const userAuthRequestSuccess = payload => ({
    type: types.USER_AUTH_REQUEST_SUCCESS,
    payload
})

const userAuthRequestFail = payload => ({
    type: types.USER_AUTH_REQUEST_FAIL,
    payload
})

export const getUsersData = (payload) => {
    return dispatch => {
        dispatch(userAuthRequest());
        return axios.post(`http://127.0.0.1:2000/api/users-check`, payload)
            .then(res => {
                dispatch(userAuthRequestSuccess(res))
            })
            .catch(err => {
                dispatch(userAuthRequestFail(err));
            })
    }
}

    
