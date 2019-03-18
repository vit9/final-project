import React, { Component } from 'react';

import { Link } from "react-router-dom";

class SearchLine extends Component {
    
    changeHandler = e => {
        this.props.changeInputValue(e.target.value)
        //athis.props.searchStaff(e.target.value)        
    }
    
    send = () => {
        const { inputData, searchStaff } = this.props
        searchStaff(inputData)
    } 

    render() {
        const { inputData } = this.props
        return (
            <div className="header__searchLine">
                <input onChange={this.changeHandler}  className="searchInput" placeholder="Что будем покупать?"/>
                    <Link to = {`/search/${inputData}`} >
                        <button onClick={this.send} className="searchBtn" > 
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" className="icon">
                                <rect className="fill-none" width="30" height="30"/>
                                    <path className="fill-currentcolor" d="M29.82861,24.17139,25.56519,19.908A13.0381,13.0381,0,1,0,19.908,25.56525l4.26343,4.26337a4.00026,4.00026,0,0,0,5.65723-5.65723ZM5,14a9,9,0,1,1,9,9A9.00984,9.00984,0,0,1,5,14Z"/>
                            </svg>
                        </button>
                    </Link>
            </div>
        );
    }
}

export default SearchLine;
