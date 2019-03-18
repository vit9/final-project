import * as types from '../constants/actionTypes';

const initState = {
    addOrnot: false,
    addOrnot1: false,
    addOrnot2: false,
    addOrnot3: false,
    base64Photo: "",
    base64Photo1: "",
    base64Photo2: "",
    base64Photo3: "",
    inputData: '',
    inputData1: '',
    inputData2: null,
    inputData3: null,
    staffData: [],
    photo: [],
    editData: [],
    isFetching: false,
    error: null,
    showModal: false
}

export default ( state = initState, { type, payload } ) => {
    
    switch (type){
        case types.ADD_NEW_STAFF_REQUEST: {
            return {
                ...state,
                isFetching: true,
                base64Photo: "",
                base64Photo1: "",
                base64Photo2: "",
                base64Photo3: "",
                photo: [],
                addOrnot: false,
                addOrnot1: false,
                addOrnot2: false,
                addOrnot3: false,
                
            }
        }
        case types.ADD_NEW_STAFF_REQUEST_SUCCESS: {
            return {
                ...state,
                staffData: state.staffData.concat(JSON.parse(payload.config.data)),
                isFetching:false,
                showModal: true,
                error: null
            }
        }
        case types.ADD_NEW_STAFF_REQUEST_FAIL: {
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
        case types.PUSH_NEW_PHOTO_REQUEST: {
            return {
                ...state,
                isFetching: true,
            }
        }
        case types.PUSH_NEW_PHOTO_REQUEST_SUCCESS: {
            return {
                ...state,
                photo: state.photo.concat(payload),
                isFetching: false,
               
            }
        }
        case types.PUSH_NEW_PHOTO_REQUEST_FAIL: {
            return {
                ...state,
                isFetching: false,
                error: "error",
                
            }
        }
        case types.INPUT_CHANGE_VALUE: {
            return {
                ...state,
                isFetching: false,
                error: "error",
                inputData: payload
                
            }
        }
        case types.INPUT_CHANGE_VALUE1: {
            return {
                ...state,
                isFetching: false,
                error: "error",
                inputData1: payload
                
            }
        }
        case types.INPUT_CHANGE_VALUE2: {
            return {
                ...state,
                isFetching: false,
                error: "error",
                inputData2: payload
                
            }
        }
        case types.INPUT_CHANGE_VALUE3: {
            return {
                ...state,
                isFetching: false,
                error: "error",
                inputData3: payload
                
            }
        }
        case types.EDIT_STAFF_REQUEST: {
            return {
                ...state,
                isFetching: true,
                base64Photo: "",
                base64Photo1: "",
                base64Photo2: "",
                base64Photo3: "",
                photo: [],
                addOrnot: false,
                addOrnot1: false,
                addOrnot2: false,
                addOrnot3: false,
            }
        }
        case types.EDIT_STAFF_REQUEST_SUCCESS: {
            return {
                ...state,
               
                isFetching:false,
                showModal: true
            }
        }
        case types.EDIT_STAFF_REQUEST_FAIL: {
            return {
                ...state,
                isFetching: false,
                error: "error",
                showModal: true
            }
        }
        case types.BASE_64_REQUEST: {
            return {
            ...state,
            isFetching: false,
            base64Photo: payload,
            addOrnot: !state.addOrnot
            }
          }
          case types.BASE1_64_REQUEST: {
            return {
            ...state,
            isFetching: false,
            base64Photo1: payload,
            addOrnot1: !state.addOrnot1
            }
          }
          case types.BASE2_64_REQUEST: {
            return {
            ...state,
            isFetching: false,
            base64Photo2: payload,
            addOrnot2: !state.addOrnot2
            }
          }
          case types.BASE3_64_REQUEST: {
            return {
            ...state,
            isFetching: false,
            base64Photo3: payload,
            addOrnot3: !state.addOrnot3
            }
          }
         default: return state;
    }
}