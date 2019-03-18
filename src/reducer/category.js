import * as types from "../constants/actionTypes";

const initState = {
    allCategory: [],
    mainCategory: [],
    podcategory: [],
    isFetching: false,
    error: null
};

export default (state = initState, { type, payload }) => {
        
    switch (type) {
        
        case types.CATEGORY_REQUEST: {
            return {
                ...state,
                isFetching: true
            }
        }

        case types.CATEGORY_REQUEST_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                allCategory: payload,
                mainCategory: payload.data.filter(el => el.parentId === 0),
                podcategory: payload.data.filter(el => el.parentId === 0),
            }
        }

        case types.CATEGORY_REQUEST_FAIL: {
            return {
                ...state,
                isFetching: false,
                error: "ERROR"
            }
        }

        case types.POD_CATEGORY: {
            return {
                ...state,
                podcategory: state.allCategory.filter(el => el.parentId === payload),
            }
        }

        default: return state;
    }
};
