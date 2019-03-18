import React, { Component } from 'react';
import DrawCategory from './DrawCategory'

import { Layout, Menu, Icon } from 'antd';
import { Link } from "react-router-dom";

const { Sider } = Layout;

class LeftMenu extends Component {

    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    }

    render() {

        const { allCategory, mainCategory,  getUser, isAdmin } = this.props
        
            let localS = JSON.parse(localStorage.getItem("login")); 
            
            let data; 
           
            if(localS===null) {
                data = [];
                }
               
             else if(Boolean(isAdmin) || Boolean(getUser.isAdmin)){
                data =  <Menu key="addCatigory1" theme="dark" defaultSelectedKeys={['1']} mode="inline">    
                <Menu.Item key="addCatigory">
                    <Link to="/addCategory">
                        <Icon type="plus" />
                        <span >Добавить категорию</span>
                    </Link>
                </Menu.Item>
            </Menu>
            }
             
            else{
                data =[];
            }

        return (
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        {data}                        
                        <DrawCategory allCategory={allCategory} 
                            mainCategory={mainCategory}  
                        />  
                    </Sider>
                </Layout>
            </div>
        );
    }
}

export default LeftMenu;