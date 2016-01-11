"use strict";

import React, { PropTypes } from 'react';

import InvoiceStore from '../../stores/InvoiceStore';

class LedgerAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            invoiceList : InvoiceStore.getAll()
        };
    }

    componentDidMount() {
        InvoiceStore.addChangeListener(this._onChange.bind(this));
    }
    componentWillUnmount() {
        InvoiceStore.removeChangeListener(this._onChange.bind(this));
    }

    render () {
        console.log('Legder: ', this.state.invoiceList);
        let sales = 0;
        let list = this.state.invoiceList.map((invoice, index) => {
            sales += invoice.total;
            return (
                <div className="row" key={index}>
                    <div className="col-md-4 col-md-offset-1">
                        <table className="table table-striped table-bordered">
                            <thead>
                              <tr className="success">
                                <th colSpan="2" className="col-md-6 text-center">Debtor {invoice.customerName} A/C</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>sales {invoice.total}</td>
                                <td></td>
                              </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        });

        return (
            <div className="row">
                    {list}
                <div className="row">
                    <div className="col-md-4 col-md-offset-1">
                    <table className="table table-striped table-bordered">
                        <thead>
                          <tr className="warning">
                            <th colSpan="2" className="col-md-6 text-center">Sales A/C</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td></td>
                            <td>Debtors {sales}</td>
                          </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        );
    }

    _onChange() {
        this.setState({
            invoiceList: InvoiceStore.getAll()
        });
    }

}

export default LedgerAccount;
