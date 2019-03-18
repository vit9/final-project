import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Loader from 'react-loader-spinner';
import AddNewStaff from '../../components/BtnAddNewStaff'

class AllStaffs extends Component {
    constructor(props){
        super(props)
        this.state = {
            trig: false, 
            maxMin: false
        }
    }
    sortStaffMinMax = () =>{
        this.setState({trig: !this.state.trig})
    }
    sortStaffMaxMin = () =>{
        this.setState({maxMin: !this.state.maxMin})
    }
    render() {
        const { inputStaffs, isFetching, isAdmin, getUser, arr } = this.props
       
        let data;

        if (isFetching === true) {
            data = <div className="loader">
                <Loader type="Triangle"
                    color="#FD7F71"
                    height="100"
                    width="100"
                />
            </div>
        } else if(this.state.trig === true) {
            data = <div className="staffs">
           
                {arr.map((el, key) => (
                 <Link to={`/staff/${el.id}`} key={key}>
                     <div className="staff">
                     {el.state ?  <img src={el.img.substr(0,53)} width="325" height="190" className="imgStaff"  alt="lorem" /> : <img src={el.img} width="325" height="190" className="imgStaff"  alt="lorem" />}
                         <div className="titlleAndPrice">
                             <h4>{el.title}</h4>
                             <h4>Цена: {el.price}</h4>
                         </div>
                     </div>
                 </Link>
             ))}
             </div>

        }else if (this.state.maxMin === true){
             data = <div className="staffs">
                  { arr.map((el, key) => (
                    <Link to={`/staff/${el.id}`} key={key}>
                        <div className="staff">
                        {el.state ?  <img src={el.img.substr(0,53)} width="325" height="190" className="imgStaff"  alt="lorem" /> : <img src={el.img} width="325" height="190" className="imgStaff"  alt="lorem" />}
                            <div className="titlleAndPrice">
                                <h4>{el.title}</h4>
                                <h4>Цена: {el.price}</h4>
                            </div>
                        </div>
                    </Link>
                )).reverse()}
                </div>
        } else {
            data = <div className="staffs">
            {inputStaffs.map((el, key) => (
                    <Link to={`/staff/${el.id}`} key={key}>
                        <div className="staff">
                        {el.state ?  <img src={el.img.substr(0,53)} width="325" height="190" className="imgStaff"  alt="lorem" /> : <img src={el.img} width="325" height="190" className="imgStaff"  alt="lorem" />}
                            <div className="titlleAndPrice">
                                <h4>{el.title}</h4>
                                <h4>Цена: {el.price}</h4>
                            </div>
                        </div>
                    </Link>
                ))}
                  
            </div>
        }
        console.log(arr.reverse())
        return (

            <div className="contentStaffs">
                {data}
                <button className="topPrice" onClick={this.sortStaffMinMax}>Дорогие</button>
                <button className="bottomPrice" onClick={this.sortStaffMaxMin}>Дешевые</button>
                <AddNewStaff isAdmin={isAdmin} getUser={getUser} />
            </div>

        );
    }
}

export default AllStaffs;
