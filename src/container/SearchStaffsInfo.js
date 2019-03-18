import React, { Component, Fragment } from 'react';
import { connect} from 'react-redux';
import {getSeacrhStaffsDataById} from "../actions/searchStaffByIdAction";

import { getUsersDataById } from "../actions/getUserById"

import { bindActionCreators } from "redux";

import SearchFullInfoStaff from '../components/SearchStaffsPage/SearchFullInfoStaff'
import LeftMenu from '../container/LeftMenu'
import Header from '../container/Header'

class SearchInfoStaffsInfo extends Component {
        componentDidMount(){
            const { getSeacrhStaffsDataById, match, getUsersDataById } = this.props
            getSeacrhStaffsDataById(match.params.id)
            let localS = JSON.parse(localStorage.getItem("login"));
            if(localS===null){

            }
            else{
                getUsersDataById(localS)
            }
        }
    render() {
        const {  getUser } = this.props
        return (
            <Fragment>
                <Header getUser={ getUser } />
                <div className="menuAndContent">
                    <LeftMenu getUser={ getUser } />
                    <SearchFullInfoStaff {...this.props}/>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({

    fullInfoSearchData: state.searchStaffById.fullInfoSearchData,
    isFetching: state.searchStaffById.isFetching,
    getUser: state.getUserById.getUser,

  });
  
  const mapDispatchToProps = dispatch => bindActionCreators({ getSeacrhStaffsDataById, getUsersDataById }, dispatch);
  
  export default SearchInfoStaffsInfo = connect(
        mapStateToProps,
        mapDispatchToProps
  )(SearchInfoStaffsInfo);