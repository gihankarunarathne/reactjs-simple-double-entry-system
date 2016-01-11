/*
* Copyright (c) 2016.
* All rights reserved.
*
* NaveBar React Component
 */

"use strict";

import React, { PropTypes } from 'react';

class NaveBar extends React.Component {

    render () {
        return (
            <div className="row">
                <nav className="navbar navbar-inverse">
                      <div className="container-fluid">
                        <div className="navbar-header">
                          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                          </button>
                          <a className="navbar-brand" href="#">Double Entry 2.0</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                          <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Invoice<span className="sr-only">(current)</span></a></li>
                            <li><a href="#salesJournal">Sales Journal</a></li>
                            <li><a href="#ledgerAccount">Ledger Account</a></li>
                            <li><a href="#trialBalance">Trail Balance</a></li>
                          </ul>
                        </div>
                      </div>
                  </nav>
           </div>
        );
    }

}

export default NaveBar;
