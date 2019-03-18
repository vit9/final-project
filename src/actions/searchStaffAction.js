import * as types from '../constants/actionTypes';

const axios = require('axios');

export const changeInputValue = payload => ({
    type: types.CHANGE_INPUT_VALUE,
    payload
})

const searchStaffRequest = payload => ({
    type: types.SEARCH_STAFF_REQUEST,
    payload
})

const searchStaffRequestSuccess = payload => ({
    type: types.SEARCH_STAFF_REQUEST_SUCCESS,
    payload
})

const searchStaffrequestFail = payload => ({
    type: types.SEARCH_STAFF_REQUEST_FAIL,
    payload
})

export const searchStaff = payload => {
    return dispatch => {
        dispatch(searchStaffRequest())
        return axios.get(`http://127.0.0.1:2000/api/staffs?search=${payload}`)
            .then(
                res => {
                    setTimeout(() => {
                        dispatch(searchStaffRequestSuccess(res))
                    }, Math.random()*1000)
                })
            .catch(
                err => {
                    dispatch(searchStaffrequestFail(err))
                })

    }
}