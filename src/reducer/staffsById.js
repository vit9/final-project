

import * as types from "../constants/actionTypes";

const initState = {
    infoStaffs: [],
    isFetching: false,
    error: null,
    
  };

  export default (state = initState, { type, payload }) => {
      
      switch (type) {
        
        case types.STAFF_REQUEST_BY_ID: {
          return {
          ...state,
          isFetching: true,
          }
        } 
        case types.STAFF_REQUEST_SUCCESS_BY_ID: { 
          return {
          ...state,
          isFetching: false,
          infoStaffs: [payload.data]
          }
        }
        case types.STAFF_REQUEST_FAIL_BY_ID: {
          return {
          ...state,
          isFetching: false,
          error: "ERROR"
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

  