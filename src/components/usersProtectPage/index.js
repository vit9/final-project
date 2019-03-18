import React, { Component } from 'react';
import { throws } from 'assert';

class UsersProtect extends Component {
    render() {
        
       const { id, name, email } = this.props
        return (
            <div>
               { name } 
            </div>
        );
    }
}

export default UsersProtect;