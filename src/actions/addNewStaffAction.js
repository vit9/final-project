import * as types from '../constants/actionTypes';

const axios = require('axios')

const addNewStaffRequest = payload => ({
    type: types.ADD_NEW_STAFF_REQUEST,
    payload
})

const addNewStaffRequestSuccess = payload => ({
    type: types.ADD_NEW_STAFF_REQUEST_SUCCESS,
    payload
})

const addNewStaffRequestFail = payload => ({
    type: types.ADD_NEW_STAFF_REQUEST_FAIL,
    payload
})

export const closeModal = payload => ({
    type: types.CLOSE_MODAL_WINDOW,
    payload
})


export const AddNewStaffAction = payload => {
    return dispatch => {
        dispatch(addNewStaffRequest())
        axios.post(`http://127.0.0.1:2000/api/staffs`, payload)
            .then(res =>
                setTimeout(() => dispatch(addNewStaffRequestSuccess(res)), 1000))
            .catch(err =>
                dispatch(addNewStaffRequestFail(err)))
    }
}

export const base64 = payload => ({
    type: types.BASE_64_REQUEST,
    payload
})
export const base641 = payload => ({
    type: types.BASE1_64_REQUEST,
    payload
})
export const base642 = payload => ({
    type: types.BASE2_64_REQUEST,
    payload
})
export const base643 = payload => ({
    type: types.BASE3_64_REQUEST,
    payload
})

const addPhotoRequest = payload => ({
    type: types.PUSH_NEW_PHOTO_REQUEST,
    payload
})

const addNewPhotoRequestSuccess = payload => ({
    type: types.PUSH_NEW_PHOTO_REQUEST_SUCCESS,
    payload
})

const addNewPhotoRequestFail = payload => ({
    type: types.PUSH_NEW_PHOTO_REQUEST_FAIL,
    payload
})


export const pushPhoto = payload => {
    console.log(payload)
    return dispatch => {
        dispatch(addPhotoRequest())
        axios.post(`http://127.0.0.1:2000/upload`, payload)
            .then(res =>
                setTimeout(() => dispatch(addNewPhotoRequestSuccess(res)), 1000))
            .catch(err =>
                dispatch(addNewPhotoRequestFail(err)))
    }
}



 export const inputchangeHandler = payload => ({
    type: types.INPUT_CHANGE_VALUE,
    payload
})

export const inputchangeHandler1 = payload => ({
    type: types.INPUT_CHANGE_VALUE1,
    payload
})
export const inputchangeHandler2 = payload => ({
    type: types.INPUT_CHANGE_VALUE2,
    payload
})
export const inputchangeHandler3 = payload => ({
    type: types.INPUT_CHANGE_VALUE3,
    payload
})




const editStaffRequest = payload => ({
    type: types.ADD_NEW_STAFF_REQUEST,
    payload
})

const editStaffRequestSuccess = payload => ({
    type: types.ADD_NEW_STAFF_REQUEST_SUCCESS,
    payload
})

const editStaffRequestFail = payload => ({
    type: types.ADD_NEW_STAFF_REQUEST_FAIL,
    payload
})

export const EditStaffAction = payload => {
    console.log(payload)
    return dispatch => {
        dispatch(editStaffRequest())
        axios.put(`http://127.0.0.1:2000/api/staffs`, payload)
            .then(res =>
                setTimeout(() => dispatch(editStaffRequestSuccess(res)), 1000))
            .catch(err =>
                dispatch(editStaffRequestFail(err)))
    }
}