import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import Router from "./router";
import store from "./state/state";



import "./style/index.scss";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Router/>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);

serviceWorker.unregister();
