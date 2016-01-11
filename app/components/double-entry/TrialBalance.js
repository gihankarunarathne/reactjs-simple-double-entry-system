"use strict";

import React, { PropTypes } from 'react';

import InvoiceStore from '../../stores/InvoiceStore';

class TrialBalance extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        InvoiceStore.addChangeListener(this._onChange.bind(this));
    }
    componentWillUnmount() {
        InvoiceStore.removeChangeListener(this._onChange.bind(this));
    }

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

    _onChange() {

    }
}

export default TrialBalance;
