import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/categoryAction';

import { bindActionCreators } from 'redux';

import MDSpinner from "react-md-spinner";
import Form from '../FormAddNewCategory/SendingCategoryForm'
import LinkHome from "../../Btn/linkHome"

class FormAddNewStaff extends Component {
    componentDidMount() {
        this.props.getCategoriesData(); 
    }

    render() {
        
        const { isFetching, AddNewCategory, allCategory, podcategory } = this.props
        
        return (
            <div>
                <LinkHome />
               <Form AddNewCategory={AddNewCategory} allCategory={allCategory} podcategory={podcategory} />
               {isFetching===true ? <div><MDSpinner size={100} duration={1000} /></div> : null}
            </div>
        );
    }
}

const mapStateToProps = state =>({
    allCategory: state.category.allCategory,
    podcategory: state.category.podcategory,
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch);

export default FormAddNewStaff = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormAddNewStaff);;