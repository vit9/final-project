import * as types from "../constants/actionTypes";

const initState = {
    inputStaffs: [],
    infoStaffs: [],
    isFetching: false,
    error: null
};

export default (state = initState, { type, payload }) => {
    switch (type) {
        case types.STAFF_REQUEST: {
            return {
                ...state,
                isFetching: true
            }
        }
        case types.STAFF_REQUEST_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                inputStaffs: payload.data.reverse()
            }
        }
        case types.STAFF_REQUEST_FAIL: {
            return {
                ...state,
                isFetching: false,
                error: "ERROR"
            }
        }
        case types.GET_STAFF_INFO_DATA: {
            return {
                ...state,
                infoStaffs: payload
            }
        }
        default: return state;
    }
};  