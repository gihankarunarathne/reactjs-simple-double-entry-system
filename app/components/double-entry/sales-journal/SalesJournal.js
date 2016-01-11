"use strict";

import React, { PropTypes } from 'react';

// import Actions
import InvoiceActions from '../../../actions/InvoiceActions';
// import Stores
import InvoiceStore from '../../../stores/InvoiceStore';
// import Components
import Journal from './Journal';

class SalesJournal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            invoiceList: InvoiceStore.getAll()
        };
    }

    componentDidMount() {
        InvoiceStore.addChangeListener(this._onChange.bind(this));
    }
    componentWillUnmount() {
        InvoiceStore.removeChangeListener(this._onChange.bind(this));
    }

    render () {
        let tot = 0;
        let list = this.state.invoiceList.map((invoice, index) => {
            tot += (invoice.total * (1 - 0.1));
            return (
                <Journal key={index} invoice={invoice}></Journal>
            );
        });

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
                    {list}
                    <tbody>
                      <tr>
                          <td colSpan="7" className="text-center">Transfered to Sales A/C</td>
                          <td>{tot}</td>
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
