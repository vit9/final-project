import * as types from "../constants/actionTypes";

const initState = {
    inputData: [],
    isFetching: false,
    error: null,
    showModal: false
  };

  export default (state = initState, { type, payload }) => {
    
      switch (type) {
        case types.USER_REG_REQUEST: {
          return {
          ...state,
          inputData: payload,
          isFetching: true
          }
        }

        case types.USER_REG_REQUEST_SUCCESS: {
          return {
            ...state,
            isFetching: false,
            inputData: payload.data,
            showModal: true
          }
        }

        case types.USER_REG_REQUEST_FAIL: {
          return {
            ...state,
            isFetching: false,
            error: "ERROR"
          }
        }
        case types.CLOSE_MODAL_WINDOW: {
          return {
              ...state,
              showModal: false
          }
      }
        
        default: return state;    
    }
  };