/*
* Copyright (c) 2016.
* All rights reserved.
*
* User React Component
 */

"use strict";

import React, { PropTypes } from 'react';

class User extends React.Component {
    render () {
        return (
            <div className="row">
                <div className="col-sm-10 col-sm-offset-2">
                    <div className="row">
                        <div className="col-xs-6 col-sm-4">
                            <samp>John Smith</samp>
                        </div>
                        <div className="col-xs-4 col-sm-4">
                            <samp>username</samp>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default User;
