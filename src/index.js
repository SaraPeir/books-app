import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./js/App";

import { BrowserRouter, HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, document.getElementById('root'));