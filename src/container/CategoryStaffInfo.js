import React, { Component, Fragment } from 'react';
import { connect} from 'react-redux';
import { getCategorysDataById } from "../actions/getStaffByCategoryIdAction";
import { getUsersDataById } from "../actions/getUserById"
import { bindActionCreators } from "redux";

import CategoryStaffs from '../components/CategoryStaffs'
import LeftMenu from '../container/LeftMenu'
import Header from '../container/Header'

class CategoryStaffInfo extends Component {
    
    componentDidMount(){
        const { getCategorysDataById, match, getUsersDataById } = this.props
        getCategorysDataById(match.params.id)
       
        //getStaffsDataById(match.params.id)
        let localS = JSON.parse(localStorage.getItem("login"));
            if(localS===null){

            }
            else{
                getUsersDataById(localS)
            }
        
    }

    componentDidUpdate(prevProps){
        const { getCategorysDataById, match } = this.props
        if(prevProps.match.params.id !==match.params.id ){
            getCategorysDataById(match.params.id)
        }
    }

    render() {
        const { getUser } = this.props
        const {  infoCategory, isFetching  } = this.props
        console.log(this.props)
        
       
        return (

            <Fragment>
  
            
                <Header  getUser={ getUser }/>
                <div className="menuAndContent">
                    <LeftMenu  getUser={ getUser }/>
                    <CategoryStaffs infoCategory={infoCategory} isFetching={isFetching}  getUser={ getUser }  />

                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({

    infoCategory: state.categoryById.infoCategory,
    isFetching: state.categoryById.isFetching,
    trigger: state.categoryById.trigger,
    getUser: state.getUserById.getUser,

  });
  
  const mapDispatchToProps = dispatch => bindActionCreators({ getCategorysDataById, getUsersDataById }, dispatch);
  
  export default CategoryStaffInfo = connect(
        mapStateToProps,
        mapDispatchToProps
  )(CategoryStaffInfo);