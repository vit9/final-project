import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getStaffsData } from "../actions/staffsAction";

import { getUsersDataById } from "../actions/getUserById"

import { bindActionCreators } from "redux";

import Header from '../container/Header'
import LeftMenu from '../container/LeftMenu'
import AllStaffs from "../components/AllStaffs"

class MainPage extends Component {
   
    componentDidMount() {
        
        const { getStaffsData, getUsersDataById } = this.props

        getStaffsData()

        let localS = JSON.parse(localStorage.getItem("login"));
        if (localS === null) {

        } else {
            getUsersDataById(localS)
        }

    }

    render() {
        const { inputStaffs, isFetching, getUser } = this.props
        const {  name, isAdmin, id } = this.props
        let arr = [];
        function compareNumeric(a, b) {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
          }
          arr = inputStaffs.slice()
      arr.sort(compareNumeric);
        return (
            <Fragment>
                <Header name={ name } getUser={ getUser } id={ id }/>
                <div className="menuAndContent">
                    <LeftMenu isAdmin = {isAdmin} getUser={ getUser } />
                    <AllStaffs inputStaffs={inputStaffs} arr={arr} isFetching={isFetching} isAdmin = {isAdmin} getUser={ getUser } />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    inputStaffs: state.staffs.inputStaffs,
    isFetching: state.staffs.isFetching,
    getUser: state.getUserById.getUser,
    params: state.getUserById.params,
});

const mapDispatchToProps = dispatch => bindActionCreators({ getStaffsData, getUsersDataById }, dispatch);

export default MainPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);