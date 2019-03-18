import React, { Component } from 'react';

import { Icon } from 'antd';
import { Link } from "react-router-dom";

class LinkHome extends Component {
    render() {
    
        return (
            <div>
                <Link to="/" className="linkTopButton">
                    <Icon type="home" style={{ fontSize: '30px' }} />
                </Link>
            </div>
        );
    }
}

export default LinkHome;