import React, { Component } from 'react';
import HeaderLogo from '../components/Header/logo'
import SearchLine from '../components/Header/searchLine'
import Myprofile from '../components/Header/Myprofile'
import 'antd/dist/antd.css';

import { connect } from 'react-redux';
import * as actions from "../actions/searchStaffAction";
import { getUsersData } from '../actions/usersAuthActions'
import { bindActionCreators } from "redux";

class Header extends Component {

    render() {
        const { inputData, searchStaff, changeInputValue, name, getUser, id } = this.props
        return (
            <div className="header">
                <HeaderLogo />
                <SearchLine inputData={inputData}
                    searchStaff={searchStaff}
                    changeInputValue={changeInputValue}
                />
                <Myprofile name={name}
                    getUser={getUser}
                    id={id}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    inputData: state.searchStaff.inputData,
    isFetching: state.searchStaff.isFetching,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions, getUsersData }, dispatch);

export default Header = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);