/**
 * Copyright (c) 2016.
 * All rights reserved.
 *
 * InvoiceStore
 */

"use strict";

import Dispatcher from '../dispatcher/Dispatcher';
import EventEmitter from 'events';
import InvoiceConstants from '../constants/InvoiceConstants';

class InvoiceStore extends EventEmitter {
    constructor() {
        super();
        this.state = {
            invoiceList: [],
            nextId : 1
        };
    }

    _addInvoice(invoice) {
        this.state.invoiceList.push(invoice);
    }

    _deleteInvoice(invoice) {
        for(let i in this.state.invoiceList) {
            if(this.state.invoiceList[i].invoiceNo === invoice.invoiceNo) {
                this.state.invoiceList.splice(i, 1);
            }
        }
    }

    getAll() {
        return this.state.invoiceList;
    }
    getNextId() {
        return this.state.nextId++;
    }

    emitChange() {
        this.emit(this.CHANGE_EVENT);
    }
    addChangeListener(callback) {
        this.on(this.CHANGE_EVENT, callback);
    }
    removeChangeListener(callback) {
        // HACK
        //this.removeListener(callback);
        this.removeAllListeners(this.CHANGE_EVENT);
    }
}

let invoiceStore = new InvoiceStore();

Dispatcher.register(action => {
    switch(action.actionType) {
        case InvoiceConstants.NEW_INVOICE:
            invoiceStore._addInvoice( action.invoice);
            invoiceStore.emitChange();
            break;
        case InvoiceConstants.DELETE_INVOICE:
            invoiceStore._deleteInvoice(action.invoice);
            invoiceStore.emitChange();
            break;
    }
    return true;
});

export default invoiceStore;
