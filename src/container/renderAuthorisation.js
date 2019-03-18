import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect} from 'react-redux';

import Form from "../components/Auth/authorisation";

import LinkHome from "../components/Btn/linkHome"

import { getUsersData, closeModal } from "../actions/usersAuthActions";


import EditModal from "../components/Modal";

class RenderAuthorisation extends Component { 
  closeEditModal = () => {
    const { closeModal } = this.props;
    closeModal();
}     
    render() {
      const { showModal, inputData } = this.props
      const str = "Данные введены верно";
     
      return (
        <Fragment>
          <LinkHome />
          <Form {...this.props} /> 
          <EditModal visible={showModal}
                    onOk={this.closeEditModal}
                    onCancel={this.closeEditModal}
                    str={ str }
                    inputData={ inputData }
                />
        </Fragment>       

      );
    }
}


const mapStateToProps = state => ({
  inputData: state.usersAuth.inputData,
  showModal: state.usersAuth.showModal
});

const mapDispatchToProps = dispatch => bindActionCreators({ getUsersData, closeModal }, dispatch);

export default RenderAuthorisation = connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderAuthorisation);