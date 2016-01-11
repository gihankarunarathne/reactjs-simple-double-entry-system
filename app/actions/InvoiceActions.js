/**
 * Copyright (c) 2016.
 * All rights reserved.
 *
 * EntryActions
 */

"use strict";

import axios from 'axios';

import Dispatcher from '../dispatcher/Dispatcher';
import InvoiceConstants from '../constants/InvoiceConstants';

class EntryActions {
    constructor() {}

    /**
     * Add new Invoice
     */
    static addInvoice(invoice) {
        console.log('addInvoice : ', invoice);

        Dispatcher.dispatch({
            actionType: InvoiceConstants.NEW_INVOICE,
            invoice: invoice
        });
    }
}

export default EntryActions;
