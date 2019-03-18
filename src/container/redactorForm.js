import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { getUsersDataById } from "../actions/getUserById"
import { getCategoriesData } from '../actions/categoryAction';
import { getStaffsDataById } from "../actions/getStaffByIdAction"
import {  inputchangeHandler, inputchangeHandler1, inputchangeHandler2, inputchangeHandler3, EditStaffAction, closeModal, pushPhoto, base64, base641, base642, base643 } from "../actions/addNewStaffAction"; 

import FormRedactorStaff from '../components/FormsAdd/redForm'
import EditModal from "../components/Modal/addNewStaffModal";

class redactorForm extends Component {
    // componentDidUpdate(prevProps){
    //     const {getStaffsDataById, match } = this.props
    //     console.log(prevProps, this.props)
        
    // }
    componentDidMount(){
        const { getStaffsDataById, match, getUsersDataById } = this.props
        getStaffsDataById(match.params.id)
            this.props.getCategoriesData();
            let localS = JSON.parse(localStorage.getItem("login"));
        if(localS===null){
        }
        else{
            getUsersDataById(localS)
        }     

    }
    closeEditModal = () => {
        const { closeModal } = this.props;
        closeModal();
    }
    render() {
        const { allCategory } = this.props
        const str = "Объявление успешно отредактировано"
        let data; 
        if (allCategory.data===undefined){
            data = []
        }
        else{ 
            data = <Fragment>
            <FormRedactorStaff {...this.props}/>  
            <EditModal visible={this.props.showModal}
            onOk={this.closeEditModal}
            onCancel={this.closeEditModal}
 
            str={ str }   
        /> 
                </Fragment>
        }
       
        return (
            <div>
              {data}  
            </div>
        );
    }
}

const mapStateToProps = state => ({
    allCategory: state.category.allCategory,
    InfoStaff: state.staffById.infoStaffs,
    isFetching: state.staffById.isFetching,
    getUser: state.getUserById.getUser,
    photo: state.addStaff.photo,
    inputData: state.addStaff.inputData,
    inputData1: state.addStaff.inputData1,
    inputData2: state.addStaff.inputData2,
    inputData3: state.addStaff.inputData3,
    showModal: state.addStaff.showModal,
    base64Photo: state.addStaff.base64Photo,
    base64Photo1: state.addStaff.base64Photo1,
    base64Photo2: state.addStaff.base64Photo2,
    base64Photo3: state.addStaff.base64Photo3,
    addOrnot: state.addStaff.addOrnot,
    addOrnot1: state.addStaff.addOrnot1,
    addOrnot2: state.addStaff.addOrnot2,
    addOrnot3: state.addStaff.addOrnot3
  });
  
  const mapDispatchToProps = dispatch => bindActionCreators({ base64, base641, base642, base643, closeModal, getUsersDataById, getStaffsDataById, getCategoriesData, pushPhoto, inputchangeHandler, inputchangeHandler1, inputchangeHandler2, inputchangeHandler3, EditStaffAction }, dispatch);
  
  export default redactorForm = connect(
        mapStateToProps,
        mapDispatchToProps
  )(redactorForm);