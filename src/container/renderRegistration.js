import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';


import { postUsersData, closeModal } from "../actions/usersRegistrActions";
import EditModal from "../components/Modal";
import RegistrForm from "../components/Auth/registration";
import LinkHome from "../components/Btn/linkHome"

class RenderRegistration extends Component {
    closeEditModal = () => {
        const { closeModal } = this.props;
        closeModal();
    } 
    render() {
        const str = "Вы успешно зарегестрировались";
        return (
            <div className="formdiv">
                <LinkHome />
                <RegistrForm {...this.props} />
                <EditModal visible={this.props.showModal}
                    onOk={this.closeEditModal}
                    onCancel={this.closeEditModal}
                    str={ str }
                    inputData={ this.props.inputData }
                />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    showModal: state.usersRegistr.showModal,
    inputData: state.usersRegistr.inputData
});

const mapDispatchToProps = dispatch => bindActionCreators({ postUsersData, closeModal }, dispatch);

export default RenderRegistration = connect(
    mapStateToProps,
    mapDispatchToProps
)(RenderRegistration);