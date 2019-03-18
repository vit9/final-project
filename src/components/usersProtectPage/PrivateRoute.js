import React from 'react';

import { Route } from "react-router-dom";

export default ({ component: Component, data, params, ...rest }) => (
    <Route
        {...rest}

        render= {props =>{
            
            return <Component {...data}  {...props}  />

        }}
    />

)




