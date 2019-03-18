import * as types from '../constants/actionTypes';

const axios = require('axios')

const addNewCategoryRequest = payload => ({
    type: types.ADD_NEW_CATEGORY_REQUEST,
    payload
})

const addNewCategoryRequestSuccess = payload => ({
    type: types.ADD_NEW_CATEGORY_REQUEST_SUCCESS,
    payload
})

const addNewCategoryRequestFail = payload => ({
    type: types.ADD_NEW_CATEGORY_REQUEST_FAIL,
    payload
})

export const closeModal = payload => ({
    type: types.CLOSE_MODAL_WINDOW,
    payload
})

export const AddNewCategory = payload => {
    return dispatch => {
        dispatch(addNewCategoryRequest())
        axios.post(`http://127.0.0.1:2000/api/categories`, payload)
            .then(res =>
                setTimeout(() => dispatch(addNewCategoryRequestSuccess(res)), 1000))
            .catch(err =>
                dispatch(addNewCategoryRequestFail(err)))
    }
}