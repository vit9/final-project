import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Loader from 'react-loader-spinner'

class searchStaffs extends Component {
    render() {
        
        const {searchData, isFetching } = this.props
            
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
                      {searchData.map((el,key)=>(
                      <Link to={`/search/Staff/${el.id}`}  key={key}>
                      <div className="staff">
                      {el.state ?  <img src={el.img.substr(0,53)} width="325" height="190" className="imgStaff"  alt="lorem" /> : <img src={el.img} width="325" height="190" className="imgStaff"  alt="lorem" />}
                          <div className="titlleAndPrice">
                              <h4>{el.title}</h4>
                              <h4>Цена: {el.price}</h4>
                          </div>
                      </div>
                      </Link>
                                                )
                                    )}
                      </div>
            }
        return (
            <div>
                
               {data} 
                 
            </div>
        );
    }
}


export default searchStaffs;
