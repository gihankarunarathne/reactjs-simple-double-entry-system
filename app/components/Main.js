/*
 * Copyright (c) 2016.
 * All rights reserved.
 *
 * Main React Component
 */

"use strict";

import React, {
    PropTypes
}
from 'react';
// import COMPONENTS
import NavBar from './dashboard/NavBar';
// import ACTIONS
// import  STORES

class Main extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <div className="container-fluid">
                <NavBar></NavBar>
                {this.props.children}
                <div id="info" className="row">
                    <p className="text-center text-muted small">Double-Entry System
                        Copyrights at <em><a href="http://abc.com/">ABC (pvt) Ltd.</a></em></p>
                </div>
            </div>
        );
    }

}

export default Main;
