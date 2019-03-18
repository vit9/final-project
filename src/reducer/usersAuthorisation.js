import * as types from "../constants/actionTypes";

const initState = {
    inputData: [],
    isFetching: false,
    
    trig: true,
    showModal: false
  };

export default (state = initState, {type, payload} ) => {
 
    switch(type) {
        case types.USER_AUTH_REQUEST: {
            return {
                ...state,
                isFatching: true,
            }
        }
        case types.USER_AUTH_REQUEST_SUCCESS: {
            
            if (payload.data===null){
                payload.data = false
            }
            else if (payload.data!==null && payload.data.id !==undefined ){
                const { id } = payload.data
                localStorage.setItem("login",JSON.stringify(id))
            }
            return {
                ...state,
                inputData: payload.data,
                isFatching: false,
                showModal: true,
                
            }
        }
        case types.USER_AUTH_REQUEST_FAIL: {
            return {
                ...state,
                isFatching: false,
                error: "ERROR",
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