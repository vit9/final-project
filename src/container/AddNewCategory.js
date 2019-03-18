import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions/addNewCategoryAction';

import { bindActionCreators } from 'redux';

import FormAddNewCategory from '../components/FormsAdd/FormAddNewCategory';
import EditModal from '../components/Modal/addNewStaffModal';


class AddNewCategory extends Component {

    closeEditModal = () => {
        const { closeModal } = this.props;
        closeModal();
    }

    render() {
        const { AddNewCategory, isFetching, showModal, error } = this.props
        const str = "Не все поля были заполнены или заполнены не верно"
        return(
            <div>
                <div>
                    <FormAddNewCategory AddNewCategory={AddNewCategory}
                        isFetching={isFetching}
                    /> 
                </div>
                <EditModal visible={showModal}
                    onOk={this.closeEditModal}
                    onCancel={this.closeEditModal}
                    error={error}
                    str={ str }
                />
            </div>      
        )
    }
}

const mapStateToProps = state =>({
    categoryData: state.addCategory.categoryData,
    isFetching: state.addCategory.isFetching,
    showModal: state.addCategory.showModal,
    error: state.addCategory.error
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch);

export default AddNewCategory = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddNewCategory);
