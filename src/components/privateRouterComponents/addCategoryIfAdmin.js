import React, { Component } from 'react';


import { Menu, Icon } from 'antd';
import { Link } from "react-router-dom";





class addCategoryIfAdmin extends Component {
    render() {
        return (
            <div>
                <Menu key="addCatigory1" theme="dark" defaultSelectedKeys={['1']} mode="inline">    
                            <Menu.Item key="addCatigory">
                                <Link to="/addCategory">
                                    <Icon type="plus" />
                                    <span >Добавить категорию</span>
                                </Link>
                            </Menu.Item>
                        </Menu>          
            </div>
        );
    }
}

export default addCategoryIfAdmin;
 