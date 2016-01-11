"use strict";

import React, { PropTypes } from 'react';

import InvoiceActions from '../../../actions/InvoiceActions';

import InvoiceStore from '../../../stores/InvoiceStore';

import ItemList from './ItemList';

class Invoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            invoiceNo: InvoiceStore.getNextId(),
            customerName : "Customer's Name",
            itemList: [],
            subTotal: 0,
            tax: 0,
            shipping: 0,
            total: 0,
            date: Date.now(),
            newItem: {
                quantity:1,
                description: '',
                unitPrice:0,
                amount:0
            }
        };
    }

    render () {
        return (
            <div>
                <div className="row">
                    <div className="col-md-1 col-md-offset-1">
                        <img src="./images/comapny-logo.jpg" alt="Logo" className="img-rounded" style={{maxWidth:100}}/>
                    </div>
                    <div className="col-md-4">
                        <address>
                            <strong>Maliban Biscuit Ltd.</strong><br/>
                            389 Galle Raod, Dehiwala<br/>
                        Mount Lavinia, Sri Lanka 94103<br/>
                    <abbr title="Phone">P:</abbr> (011) 456-7890
                        </address>
                    </div>
                    <div className="col-md-3 col-md-offset-1">
                        <h2>Invoice</h2>
                        <h6>{(new Date()).toGMTString()}</h6>
                        <p><strong>Invoice No:</strong></p>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-4 col-md-offset-1">
                        <strong>Bill to:</strong><br/>
                        <input type="text" placeholder="Customer's Name" ref={val => {this.newCustomerName = val;}} onChange={this._onNameChange.bind(this)}></input>
                        <address>
                            1355 Market Street, Suite 900<br/>
                            San Francisco, CA 94103<br/>
                            <abbr title="Phone">P:</abbr> (123) 456-7890
                        </address>
                    </div>
                    <div className="col-md-3 col-md-offset-2">
                        <strong>Shipping Address (if Different) :</strong><br/>
                        <address>
                            {this.state.customerName}<br/>
                            1355 Market Street, Suite 900<br/>
                            San Francisco, CA 94103<br/>
                            <abbr title="Phone">P:</abbr> (123) 456-7890
                        </address>
                    </div>
                </div>

                <hr/>
                <div className="row">
                    <div className="col-md-11 col-md-offset-1">
                        <table className="table table-striped table-bordered">
                            <thead>
                              <tr>
                                <th className="col-md-1">Quantity</th>
                                <th className="col-md-4">Description</th>
                                <th className="col-md-1">Unit Price</th>
                                <th className="col-md-1">Amount</th>
                              </tr>
                            </thead>
                              <ItemList itemList={this.state.itemList}></ItemList>

                            <tbody>
                              <tr>
                                <td><input type="number" placeholder="No of Items" min="1" ref={val => {this.newQuantity = val;}} onChange={this._onItemChange.bind(this)}></input></td>
                                <td><input type="text" className="col-md-12" placeholder="Description" ref={val => {this.newDescription = val;}}></input></td>
                                <td><input type="number" placeholder="Unit Price" min="0" ref={val => {this.newUnitPrice = val;}} onChange={this._onItemChange.bind(this)}></input></td>
                                <td><p className="col-md-8">{this.state.newItem.amount}</p><button type="submit" className="btn btn-info btn-xs" onClick={this._onNewItem.bind(this)}>Add</button></td>
                              </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2 col-md-offset-1">
                        <button type="submit" className="btn btn-primary btn-lg" onClick={this._onCreateInvoice.bind(this)}>Create Invoice</button>
                    </div>
                    <div className="col-md-3 col-md-offset-5">
                        <dl className="dl-horizontal">
                          <dt>Sub Total :</dt>
                          <dd>{this.state.subTotal}</dd>
                          <dt>Sales Tax :</dt>
                          <dd><input type="number" placeholder="Tax percentage" min="0" ref={val => {this.newTax = val;}} onChange={this._onTaxChange.bind(this)}></input></dd>
                          <dt>Shipping Charges :</dt>
                          <dd><input type="number" placeholder="Shipping Charges" min="0" ref={val => {this.newShipping = val;}} onChange={this._onTaxChange.bind(this)}></input></dd>
                          <dt>Total :</dt>
                          <dd>{this.state.total}</dd>
                        </dl>
                    </div>
                </div>
                <div className="row">
                    <p className="text-center">Thank you. Come Again!.</p>
                </div>
            </div>
        );
    }

    _onNameChange(e) {
        e.preventDefault();
        let state = this.state;
        if(this.newCustomerName.value) {
            state.customerName = this.newCustomerName.value;
        } else {
            state.customerName = "Customer's Name";
        }
        this.setState(state);
    }

    _onTaxChange(e) {
        e.preventDefault();
        let state = this.state;
        let subTotal = 0;
        for(let item of state.itemList) {
            subTotal += item.amount;
        }
        state.subTotal = subTotal;
        let tax = 0;
        if(this.newTax.value && !isNaN(this.newTax.value)) {
            tax = subTotal * parseFloat(this.newTax.value);
            state.tax = parseFloat(this.newTax.value);
        }
        let shipping = 0;
        if(this.newShipping.value && !isNaN(this.newShipping.value)) {
            shipping = parseFloat(this.newShipping.value);
            state.shipping = parseFloat(this.newShipping.value);
        }
        let total = subTotal + tax + shipping;
        state.total = total;
        this.setState(state);
    }

    _onItemChange(e) {
        e.preventDefault();
        let state = this.state;
        let newItem = {
            quantity:this.newQuantity.value,
            description: this.newDescription.value,
            unitPrice: this.newUnitPrice.value,
            amount: this.newQuantity.value * this.newUnitPrice.value
        };
        state.newItem = newItem;
        this.setState(state);
    }

    _onNewItem(e) {
        e.preventDefault();
        let state = this.state;
        let newItem = {
            quantity:this.newQuantity.value,
            description: this.newDescription.value,
            unitPrice: this.newUnitPrice.value,
            amount: this.newQuantity.value * this.newUnitPrice.value
        };
        state.itemList.push(newItem);
        state.newItem = {
            quantity:1,
            description: '',
            unitPrice:0,
            amount:0
        };
        this.newQuantity.value = 1;
        this.newDescription.value = '';
        this.newUnitPrice.value = 0;

        // Calculate Taxes
        let subTotal = 0;
        for(let item of state.itemList) {
            subTotal += item.amount;
        }
        state.subTotal = subTotal;
        let tax = 0;
        if(this.newTax.value && !isNaN(this.newTax.value)) {
            tax = subTotal * parseFloat(this.newTax.value);
            state.tax = parseFloat(this.newTax.value);
        }
        let shipping = 0;
        if(this.newShipping.value && !isNaN(this.newShipping.value)) {
            shipping = parseFloat(this.newShipping.value);
            state.shipping = parseFloat(this.newShipping.value);
        }
        let total = subTotal + tax + shipping;
        state.total = total;

        this.setState(state);
    }

    _onCreateInvoice(e) {
        e.preventDefault();
        let state = this.state;
        delete state.newItem;
        InvoiceActions.addInvoice(state);
        // Reset
        this.setState({
            invoiceNo: InvoiceStore.getNextId(),
            customerName : "Customer's Name",
            itemList: [],
            subTotal: 0,
            tax: 0,
            shipping: 0,
            total: 0,
            date: Date.now(),
            newItem: {
                quantity:1,
                description: '',
                unitPrice:0,
                amount:0
            }
        });
    }
}

export default Invoice;
