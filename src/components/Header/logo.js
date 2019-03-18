import React, { Component } from 'react';
import logo from '../../img/logoBazar.png';
import { Link } from "react-router-dom";

class HeaderLogo extends Component {
    render() {
        return (
            <div className="header__logo">
               <Link to="/"><img src={logo} alt="Logo"/></Link> 
            </div>
        );
    }
}

export default HeaderLogo;