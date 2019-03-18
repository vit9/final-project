import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { searchStaff } from "../actions/searchStaffAction";


import { getUsersDataById } from "../actions/getUserById"

import { bindActionCreators } from "redux";



import SearchStaffsPage from "../components/SearchStaffsPage"
import LeftMenu from '../container/LeftMenu'
import Header from '../container/Header'




class SearchStaff extends Component {
    componentDidMount() {
        const { searchStaff, match, getUsersDataById } = this.props
        searchStaff(match.params.title)
        let localS = JSON.parse(localStorage.getItem("login"));
        if (localS === null) {

        }
        else {
            getUsersDataById(localS)
        }
    }
    render() {
        const { getUser } = this.props

        console.log(this.props)

        return ( 
          <Fragment>
          <Header  getUser={ getUser } />
          <div className="menuAndContent">
              <LeftMenu    getUser={ getUser }/>
              <SearchStaffsPage {...this.props} />
          </div>
          </Fragment>       
        );
    }
}


const mapStateToProps = state => ({
    searchData: state.searchStaff.searchData,
    isFetching: state.searchStaff.isFetching,
    getUser: state.getUserById.getUser,
});

const mapDispatchToProps = dispatch => bindActionCreators({ searchStaff, getUsersDataById }, dispatch);

export default SearchStaff = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchStaff);