import React, { Component, Fragment } from 'react';
import { connect} from 'react-redux';
import {getStaffsDataById} from "../actions/getStaffByIdAction";

import { getUsersDataById } from "../actions/getUserById"

import { bindActionCreators } from "redux";

import FullInfoAboutStaff from '../components/AllStaffs/FullInfoAboutStaff'
import LeftMenu from '../container/LeftMenu'
import Header from '../container/Header'

class MainPageStaffInfo extends Component {
        componentDidMount(){
            const { getStaffsDataById, match, getUsersDataById } = this.props
            getStaffsDataById(match.params.id)
            let localS = JSON.parse(localStorage.getItem("login"));
                if(localS===null){

                }
                else{
                    getUsersDataById(localS)
                }
        }
    render() {
            const { getUser } = this.props
        return (
            <Fragment>

                <Header getUser={ getUser } />
                <div className="menuAndContent">
                    <LeftMenu getUser={ getUser }/>
                    <FullInfoAboutStaff {...this.props} />
                </div>

            </Fragment>
        );
    }
}

const mapStateToProps = state => ({

    InfoStaff: state.staffById.infoStaffs,
    isFetching: state.staffById.isFetching,
    getUser: state.getUserById.getUser,

  });
  
  const mapDispatchToProps = dispatch => bindActionCreators({ getUsersDataById, getStaffsDataById }, dispatch);
  
  export default MainPageStaffInfo = connect(
        mapStateToProps,
        mapDispatchToProps
  )(MainPageStaffInfo);