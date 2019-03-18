import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/categoryAction';

import { bindActionCreators } from 'redux';

import MDSpinner from "react-md-spinner";
import Form from '../FormAddNewStaff/SendingStaffForm'
import LinkHome from "../../Btn/linkHome"

class FormAddNewStaff extends Component {
    componentDidMount() {
        this.props.getCategoriesData();
        
    }
    render() {
        
        const { isFetching, allCategory } = this.props
        let data;
        if (allCategory.data===undefined){
            data = []
        }
        else{ 
            const category = allCategory.data.filter(el => el.parentId !== 0)
            data = <Form {...this.props} allCategory={ category }/>
        }
        return (
            <Fragment>
                <LinkHome />
                {data}
                {isFetching===true ? <div><MDSpinner size={100} duration={1000} /></div> : null}
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    allCategory: state.category.allCategory,
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch);
export default FormAddNewStaff = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormAddNewStaff);