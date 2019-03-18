import * as types from '../constants/actionTypes'

const initState = {
    inputData: "",
    searchData: [], 
    isFetching: false,
    error: null,
}

export default (state = initState, { type, payload }) => {
    
    switch(type) {
        case types.CHANGE_INPUT_VALUE: {
            return {
                ...state,
                inputData: payload
            }
        }
        case types.SEARCH_STAFF_REQUEST: {
            return {
                ...state,
                isFetching: true
            }
        }
        case types.SEARCH_STAFF_REQUEST_SUCCESS: {
            
            return {
                ...state,
                isFetching: false,
                searchData: payload.data
            }
        }
        
        case types.SEARCH_STAFF_REQUEST_FAIL: {
            
            return {
                ...state,
                isFetching:false,
                error: "error"
            }
        }
       

        default: return state;
    }
}