import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import usersRegistration from './usersRegistration'
import usersAuthorisation from './usersAuthorisation'
import getUserById from './getUserById'

import staffs from './staffs'
import searchStaff from './searchStaff'
import addStaff from './addStaff'
import staffById from './staffsById'
import searchStaffById from './searchStaffById'

import category from './category'
import addCategory from './addCategory'
import categoryById from './categoryById'

export default  combineReducers({
    usersRegistr: usersRegistration,
    usersAuth: usersAuthorisation,
    getUserById,
    
    staffs,
    searchStaff,
    addStaff,

    staffById,
    searchStaffById,

    category,
    addCategory,
    categoryById,

    form: formReducer
})