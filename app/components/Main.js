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
import User from './user/User';
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
                <User></User>
                {this.props.children}
                <div id="info" className="row">
                    <p className="text-center text-muted small">Idea Hub
                        Copyrights at <em><a href="http://thinkcube.com/">ThinkCube Systems (pvt) Ltd.</a></em></p>
                </div>
            </div>
        );
    }

}

export default Main;
