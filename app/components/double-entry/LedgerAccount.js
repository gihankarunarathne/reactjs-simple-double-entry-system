"use strict";

import React, { PropTypes } from 'react';

import InvoiceStore from '../../stores/InvoiceStore';

class LedgerAccount extends React.Component {
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

    _onChange() {

    }

}

export default LedgerAccount;
