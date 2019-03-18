import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions/categoryAction";
import { bindActionCreators } from "redux";

import CategoryMenu from '../components/LeftMenu';

class LeftMenu extends Component {

    componentDidMount() {
       
        this.props.getCategoriesData();
        
        // this.props.getAllCategory()
       
    }

    render() {
        
        const { allCategory, mainCategory, podCategory, isAdmin, getUser } = this.props
        
        return (
            <Fragment>
                <CategoryMenu allCategory={allCategory.data} 
                    mainCategory={mainCategory} 
                    podCategory={podCategory}
                    isAdmin = { isAdmin }
                    getUser={ getUser } 
                    
                />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    allCategory: state.category.allCategory,
    mainCategory: state.category.mainCategory,
    isFetching: state.category.isFetching,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch);

export default LeftMenu = connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftMenu);