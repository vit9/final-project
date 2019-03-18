import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Avatar } from 'antd';

class Myprofile extends Component {

    render() {

        const { name, getUser, id } =this.props
        let localS = JSON.parse(localStorage.getItem("login"));
        let data;

        if((!name && !getUser.name) || localS===null){

            data = <Link to="/auth" className="link">
                <div className="header__auth__container">
                    <div className="avatar">
                        <Avatar icon="user" size={60} style={{ backgroundColor: '#FD7F71' }}/>
                    </div>
                    <div className="text">
                        Мой профиль
                    </div>
                        
                </div>    
            </Link>
        } else {
            
            data = <Link to={`/user/id:${getUser.id || id }`} className="link">
                <div className="header__auth__container">
                    <div className="avatar">
                        <Avatar icon="user" size={60} style={{ backgroundColor: '#FD7F71' }}/>
                    </div>
                    <div className="text">
                        {name || getUser.name }
                    </div>                    
                </div>    
            </Link> 
        }
            
        return (
            <div className="header__auth">
                { data }
            </div>
        );
    }
}

export default Myprofile;