"use strict";

import React, { PropTypes } from 'react';

class TrialBalance extends React.Component {
    render () {
        return (
            <div className="row">
                <p className="text-center">Trial Balance</p>
                <p className="text-center">{(new Date()).toGMTString()}</p>
                <hr/>
                <table className="table table-striped table-bordered">
                    <thead>
                      <tr className="success">
                        <th className="col-md-6">Account Title</th>
                        <th className="col-md-3">Debit</th>
                        <th className="col-md-3">Credit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                      </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TrialBalance;
