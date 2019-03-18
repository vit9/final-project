

import * as types from "../constants/actionTypes";

const initState = {
    fullInfoSearchData: [],
    isFetching: false,
    error: null
  };

  export default (state = initState, { type, payload }) => {
      
      switch (type) {
        
        case types.SEARCH_STAFF_REQUEST_BY_ID: {
          return {
          ...state,
          isFetching: true,
           
          
          }
        } 
        case types.SEARCH_STAFF_REQUEST_SUCCESS_BY_ID: { 
          return {
          ...state,
          isFetching: false,
          fullInfoSearchData: [payload.data]
          }
        }
        case types.SEARCH_STAFF_REQUEST_FAIL_BY_ID: {
          return {
          ...state,
          isFetching: false,
          error: "ERROR"
          }
        }
        default: return state;    
    }
  };

  