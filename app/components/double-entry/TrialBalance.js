"use strict";

import React, { PropTypes } from 'react';

import InvoiceStore from '../../stores/InvoiceStore';

class TrialBalance extends React.Component {
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
        console.log('Trial Balance: ', this.state.invoiceList);
        let sales = 0;
        let list = this.state.invoiceList.map((invoice, index) => {
            sales += invoice.total;
            return (
                <tr key={index}>
                  <td>{invoice.customerName}</td>
                  <td>{invoice.total}</td>
                  <td></td>
                </tr>
            );
        });

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
                        {list}
                      <tr>
                        <td>Sales</td>
                        <td></td>
                        <td>{sales}</td>
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
