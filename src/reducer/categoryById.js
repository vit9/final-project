import * as types from "../constants/actionTypes";

const initState = {
    infoCategory: [],
    isFetching: false,
    error: null,
};

export default (state = initState, { type, payload }) => {
    switch (type) {

        case types.CATEGORY_REQUEST_BY_ID: {
            return {
                ...state,
                isFetching: true,
                infoCategory: [],
            }
        }
        case types.CATEGORY_REQUEST_SUCCESS_BY_ID: {
            return {
                ...state,
                isFetching: false,
                infoCategory: payload.data.staffs,
            }
        }
        case types.CATEGORY_REQUEST_FAIL_BY_ID: {
            return {
                ...state,
                isFetching: false,
                error: "ERROR"
            }
        }
        default: return state;
    }
};