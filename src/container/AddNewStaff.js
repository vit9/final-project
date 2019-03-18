import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { AddNewStaffAction, closeModal, pushPhoto, base64, base641, base642, base643 } from "../actions/addNewStaffAction";

import { getUsersDataById } from "../actions/getUserById"

import { bindActionCreators } from "redux";

import FormAddNewStaff from '../components/FormsAdd/FormAddNewStaff';
import EditModal from "../components/Modal/addNewStaffModal";

class AddNewStaff extends Component {
    componentDidMount() {

        const { getUsersDataById } = this.props
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
        const { showModal, error } = this.props
        const str = "Ваше объявление успешно добавлено"
        return (

            <Fragment>
                <Fragment>
                    <FormAddNewStaff {...this.props}

                    />
                </Fragment>
                <EditModal visible={showModal}
                    onOk={this.closeEditModal}
                    onCancel={this.closeEditModal}
                    error={error}
                    str={ str }
                />
            </Fragment>

        );
    }
}


const mapStateToProps = state => ({
    staffData: state.addStaff.staffData,
    photo: state.addStaff.photo,
    isFetching: state.addStaff.isFetching,
    showModal: state.addStaff.showModal,
    error: state.addStaff.error,
    getUser: state.getUserById.getUser,
    base64Photo: state.addStaff.base64Photo,
    base64Photo1: state.addStaff.base64Photo1,
    base64Photo2: state.addStaff.base64Photo2,
    base64Photo3: state.addStaff.base64Photo3,
    addOrnot: state.addStaff.addOrnot,
    addOrnot1: state.addStaff.addOrnot1,
    addOrnot2: state.addStaff.addOrnot2,
    addOrnot3: state.addStaff.addOrnot3
});

const mapDispatchToProps = dispatch => bindActionCreators({ AddNewStaffAction, getUsersDataById, closeModal, pushPhoto, base64, base641, base642,base643 }, dispatch);

export default AddNewStaff = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddNewStaff);