import React, { Component } from 'react';

import { getUsersDataById, deleteStaffById } from "../actions/getUserById"

import { Link } from "react-router-dom";
import { Icon } from 'antd';
import { connect } from 'react-redux';

import { bindActionCreators } from "redux";

import Header from '../container/Header'
import { stat } from 'fs';



class activeStaffs extends Component {
    componentDidUpdate(prevProps){   
        if(prevProps.del !== this.props.del){
            const { getUsersDataById } = this.props

        let localS = JSON.parse(localStorage.getItem("login"));
        if (localS === null) {

        }
        else {
            getUsersDataById(localS)
        }
        }
    }
    componentDidMount() {
        const { getUsersDataById } = this.props

        let localS = JSON.parse(localStorage.getItem("login"));
        if (localS === null) {

        }
        else {
            getUsersDataById(localS)
        }
    }
    deleteStaff = (id) => {
        const { deleteStaffById } = this.props
        var qs = require("querystring");
var http = require("http");

var options = {
  "method": "DELETE",
  "hostname": [
   "127.0.0.1:2000/api/staffs"
  ],
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "cache-control": "no-cache",
    "mode":'cors'
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    deleteStaffById(body.toString());
  });
});

req.write(qs.stringify({ id: `${id}`, undefined: undefined }));
req.end();
    }
    render() {

        const { getUser } = this.props
        const { name, id, del } = this.props
        const { staffs } = getUser
        
        
        return (
            <div >
                <Header name={name} getUser={getUser} id={id} />

                <div className="menuAndContent">
                    <div className="contentStaffs">
                        <div className="staffs">
                            {staffs !== undefined && staffs.reverse().map((el, key) => <div className="staff" key={key}>
                                {el.state ? <img src={el.img.substr(0, 53)} width="325" height="190" className="imgStaff" alt="lorem" /> : <img src={el.img} width="325" height="190" className="imgStaff" alt="lorem" />}
                                <div className="titlleAndPrice">
                                    <h4>{el.title}</h4>
                                    <h4>Цена: {el.price}</h4>
                                </div>
                                <div className="titlleAndPrice">
                                    <Link to={`/activeStaffs/${el.id}`} className="allMyStaff">
                                        <Icon type="edit" style={{ fontSize: '30px' }} />
                                    </Link>
                                    <button className="Exit" onClick={() => this.deleteStaff(el.id)} >
                                        <Icon type="delete" style={{ fontSize: '30px' }} />
                                    </button>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    getUser: state.getUserById.getUser,
    params: state.getUserById.params,
    del: state.getUserById.del

});

const mapDispatchToProps = dispatch => bindActionCreators({ getUsersDataById, deleteStaffById }, dispatch);

export default activeStaffs = connect(
    mapStateToProps,
    mapDispatchToProps
)(activeStaffs);