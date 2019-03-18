import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Loader from 'react-loader-spinner';
import AddNewStaff from '../../components/BtnAddNewStaff'

class CategoryStaffs extends Component {
    
    render() {
        const { infoCategory, isFetching, getUser } = this.props
        console.log(this.props)

        let data;
            if(isFetching===true){
                
                data = <div className="loader"> 
                    <Loader type="Triangle"
                        color="#FD7F71"
                        height="100"	
                        width="100"
                    /> 
                </div> 
            }
            else{
                data = <div className="staffs">
                {infoCategory.map((el,key)=>(
                    <Link to={`/staff/${el.id}`} key={key}>
                        <div className="staff">
                           <img src={el.img.substr(0,53)} width="325" height="190" className="imgStaff"  alt="lorem" />
                            <div className="titlleAndPrice">
                                <h4>{el.title}</h4>
                                <h4>Цена: {el.price}</h4>
                            </div>

                        </div>
                    </Link> 
                ))}    
            </div>
            }
        return (

           <div className="content">

                {data}
                <AddNewStaff   getUser={ getUser }/>
           </div> 
            
        );
    }
}

export default CategoryStaffs;


