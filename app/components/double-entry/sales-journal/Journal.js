"use strict";

import React, { PropTypes } from 'react';

class Journal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('Journal ', this.props.invoice);
        let list = this.props.invoice.itemList.map((item, index) => {
            return (
                <tr key={index}>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{item.description}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unitPrice}</td>
                  <td>{item.amount}</td>
                  <td></td>
                </tr>
            );
        });

        return (
            <tbody>
                <tr>
                  <td>{(new Date(this.props.invoice.date)).toLocaleDateString()}</td>
                  <td>{this.props.invoice.invoiceNo}</td>
                  <td>{this.props.invoice.customerName}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {list}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{this.props.invoice.total}</td>
                  <td></td>
                </tr>
                <tr className="warning">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Trade Discount</td>
                  <td></td>
                  <td>10%</td>
                  <td>({this.props.invoice.total * 0.1})</td>
                  <td>{this.props.invoice.total * (1 - 0.1)}</td>
                </tr>
                <tr></tr>
            </tbody>
        );
    }

}

Journal.PropTypes = {
    invoice: PropTypes.object.isRequired
};

export default Journal;
