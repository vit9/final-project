import React, { Component, Fragment } from 'react';

import { Link } from "react-router-dom";

import { connect } from 'react-redux';

import { getUsersData } from "../actions/usersAuthActions";

import { getUsersDataById } from "../actions/getUserById"

import { getParams } from "../actions/getUserById"

import { bindActionCreators } from "redux";

import Header from '../container/Header'

class UserProfile extends Component {

    singOut = () => {
        const { getParams, match } = this.props
        localStorage.removeItem("login")
        getParams(match.params.id)
    }

    componentDidMount() {
        const { getUsersDataById } = this.props
        console.log(this.props);


        let localS = JSON.parse(localStorage.getItem("login"));
        if (localS === null) {

        }
        else {
            getUsersDataById(localS)
        }
    }
    render() {

        const { getUser } = this.props

        return (

            <Fragment>
                <Header getUser={getUser} />
                <div className="menuAndContent">
                    <div className="profil">
                        <h2>{getUser.name}</h2>
                        <div className="profilData">
                            <p>{getUser.login}</p>
                            <p>{getUser.email}</p>
                            <p>{getUser.phone}</p>
                            <div className="buttonConteiner">
                                <Link to="/activeStaffs"><button className="profilLink">Активные Товары</button></Link>
                                <Link to="/"><button className="profilBtn" onClick={this.singOut}>Выход</button></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </Fragment>

        );
    }
}


const mapStateToProps = state => ({
    inputData: state.usersAuth.inputData,
    getUser: state.getUserById.getUser,

});

const mapDispatchToProps = dispatch => bindActionCreators({ getUsersData, getUsersDataById, getParams }, dispatch);

export default UserProfile = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile);