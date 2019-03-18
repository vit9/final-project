import React, { Component, Fragment } from 'react';

import { Icon } from 'antd';
import { Link } from "react-router-dom";


class BtnAddNewStaff extends Component {
    render() {
        const { isAdmin, getUser } = this.props
        let localS = JSON.parse(localStorage.getItem("login"));

        let data;
        if (localS === null) {
            data = <div><Link to="/auth" className="topbutton"><Icon type="plus" style={{ fontSize: '30px' }} /></Link></div>
        }
        else if (isAdmin !== undefined || getUser.isAdmin !== undefined) {
            data = <div> <Link to="/newStaff" className="topbutton"><Icon type="plus" style={{ fontSize: '30px' }} /></Link></div>
        }
        return (
            <Fragment>
                {data}
            </Fragment>
        );
    }
}

export default BtnAddNewStaff;