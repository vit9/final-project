import React, { Component, Fragment } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";


import MainPage from "./container/MainPage";

import RenderAuthorisation from "./container/renderAuthorisation"
import RenderRegistration from "./container/renderRegistration"
import CategoryStaffInfo from './container/CategoryStaffInfo'
import MainPageStaffInfo from './container/MainPageStaffInfo'
import SearchStaffs from './container/SearchStaff'
import SearchStaffsInfo from './container/SearchStaffsInfo'
import AddNewStaff from './container/AddNewStaff'
import AddNewCategory from './container/AddNewCategory'
import ActiveStaffs from './container/activeStaffs'
import redactorForm from './container/redactorForm'
// import Form from './components/Auth/index'
// import RegistrForm from './components/Auth/registration'
// import UserProtect from './components/usersProtectPage/'
// import UserProfile from './components/Header/Myprofile'
import PrivateRoute from './components/usersProtectPage/PrivateRoute'
import userProfile from  './container/UserProfile'

import { getUsersDataById } from "./actions/getUserById"

import { getUsersData } from './actions/usersAuthActions'



class Router extends Component {

   render() {
       
       const { inputData, params} = this.props
      
       return (
    <Fragment>
	    <Switch>
            <PrivateRoute path="/"   data= { inputData } params = {params} exact component={MainPage} />
            <Route path="/user/:id" exact component={userProfile} />
            <Route path="/authorisation" exact component={RenderAuthorisation} />
            <Route path="/auth" exact component= {RenderAuthorisation}/>
            <Route path="/registration" exact component={RenderRegistration} />
            <Route path="/category/staff/:id" exact component={CategoryStaffInfo} />
            <Route path="/staff/:id" exact component={MainPageStaffInfo} />
            <Route path="/search/:title"   exact component={SearchStaffs} />
                <Route path="/search/Staff/:id" exact component={SearchStaffsInfo} />
            <Route path="/newStaff" exact component={AddNewStaff} />
            <Route path="/addCategory" exact component={AddNewCategory} />
            <Route path="/activeStaffs" exact component={ ActiveStaffs } />
            <Route path="/activeStaffs/:id" exact component={ redactorForm } />
	    </Switch>
    </Fragment>
       )
   }

}

const mapStateToProps = state => ({
    inputData: state.usersAuth.inputData,
    params: state.getUserById.params,
})
const mapDispatchToProps = dispatch => bindActionCreators({ getUsersData, getUsersDataById }, dispatch);

export default withRouter(connect(
    mapStateToProps, 
    mapDispatchToProps
)(Router));

