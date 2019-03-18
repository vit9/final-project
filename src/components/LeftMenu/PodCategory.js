import React, { Component } from 'react'
import { Link } from "react-router-dom";

class PodCatygory extends Component {
    constructor(props) {
        super(props)
        
        this.podCaty= [];
       

    }

    render() {
        const { allCategory, categoryId } = this.props;
        this.podCaty = allCategory.filter(el => el.parentId === categoryId)

        let datacat = this.podCaty.map((el, key) =>
            <Link to={`/category/staff/${el.id}`}  key={`podCaty${key}`}>
                <li key={`${el.id}`} 
                    className="ant-menu-item" 
                    role="menuitem" 
                    style={{"paddingLeft": "48px"}}
                >
                    {el.title}
                </li>
            </Link>
        ) 

        return (
            <ul className="ant-menu ant-menu-sub ant-menu-inline" 
                role="menu" 
                style={{"background": "#e06b62","color": "#fff"}} 
            >
                {datacat}
            </ul>
        );
    }
}

export default PodCatygory