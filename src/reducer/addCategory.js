import * as types from '../constants/actionTypes';

const initState = {
    categoryData: [],
    isFetching: false,
    error: null,
    showModal: false
}

export default ( state = initState, { type, payload } ) => {
    
    switch (type){
        case types.ADD_NEW_CATEGORY_REQUEST: {
            return {
                ...state,
                isFetching: true
            }
        }
        case types.ADD_NEW_CATEGORY_REQUEST_SUCCESS: {
            return {
                ...state,
                categoryData: state.categoryData.concat(JSON.parse(payload.config.data)),
                isFetching:false,
                showModal: true
            }
        }
        case types.ADD_NEW_CATEGORY_REQUEST_FAIL: {
            return {
                ...state,
                isFetching: false,
                error: "error",
                showModal: true
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
}