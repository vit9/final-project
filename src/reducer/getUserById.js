import * as types from "../constants/actionTypes";

const initState = {
    getUser: [],
    isFetching: false,
    error: null,
    params: null,
    del: ""
    
  };

export default (state = initState, {type, payload} ) => {
    
    switch(type) {
        case types.USER_AUTH_REQUEST_BY_ID: {
            return {
                ...state,
                isFetching: true
            }
        }
        case types.USER_AUTH_REQUEST_SUCCESS_BY_ID: {
            
            return {
                ...state,
                getUser: payload.data,
                isFetching: false,
                del: ""
            }
        }
        case types.USER_AUTH_REQUEST_FAIL_BY_ID: {
            return {
                ...state,
                isFetching: false,
                error: "ERROR"
            }
        }
        case types.GET_PARAMS: {
            return {
                ...state,
                params: payload
            }
        }
        case types.DELETE_STAFF: {
            return {
            ...state,
            isFetching: false,
            error: "ERROR",
            del: payload
            }
          }
        default: return state;

    }
};