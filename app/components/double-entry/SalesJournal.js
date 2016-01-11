"use strict";

import React, { PropTypes } from 'react';

// import Actions
import InvoiceActions from '../../actions/InvoiceActions';
// import Stores
import InvoiceStore from '../../stores/InvoiceStore';
// import Components

class SalesJournal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entryList: InvoiceStore.getAll()
        };
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
                <table className="table table-striped table-bordered">
                    <thead>
                      <tr className="success">
                        <th className="col-md-1">Date</th>
                        <th className="col-md-1">Invoice No</th>
                        <th className="col-md-2">Customer</th>
                        <th colSpan="4" className="col-md-6"></th>
                        <th className="col-md-1">Total Value</th>
                      </tr>
                      <tr className="info">
                          <th colSpan="3"></th>
                          <th className="col-md-3">Description</th>
                          <th className="col-md-1">Qty</th>
                          <th className="col-md-1">Unit Price</th>
                          <th className="col-md-1">Value</th>
                          <th className="col-md-1"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                        <td>john@example.com</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
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

export default SalesJournal;
