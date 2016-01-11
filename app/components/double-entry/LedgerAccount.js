"use strict";

import React, { PropTypes } from 'react';

class LedgerAccount extends React.Component {
    render () {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-1">
                    <table className="table table-striped table-bordered">
                        <thead>
                          <tr className="success">
                            <th colSpan="2" className="col-md-6 text-center">Account Title</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>John</td>
                            <td>Doe</td>
                          </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default LedgerAccount;
