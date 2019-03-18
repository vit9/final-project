import React, {Component} from 'react'
import { Menu, Icon } from 'antd';

import PodCategory from './PodCategory'

const SubMenu = Menu.SubMenu;

class DrawCategory extends Component {

    render(){

        const { allCategory, mainCategory } = this.props;
        
        return (

            <div >
                {mainCategory.map((el,key)=>
                    <Menu key={key} theme="dark" defaultSelectedKeys={['1']} mode="inline" >    
                        <SubMenu key={key} 
                            title={<span ><Icon type={el.description} /><span >{el.title}</span></span>}
                        > 
                            <PodCategory allCategory={allCategory} 
                                categoryId={el.id}     
                            />  
                        </SubMenu> 
                    </Menu>     
                )}
            </div>
        );
    }
}

export default DrawCategory