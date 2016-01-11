
"use strict";

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
// import COMPONENTS
import Main from '../components/Main';
import Invoice from '../components/double-entry/invoice/Invoice';
import LedgerAccount from '../components/double-entry/LedgerAccount';
import SalesJournal from '../components/double-entry/sales-journal/SalesJournal';
import TrialBalance from '../components/double-entry/TrialBalance';
import About from '../components/double-entry/About';

export default (
    <Route path='/' component={Main}>
        <IndexRoute component={Invoice}></IndexRoute>
        <Route path='ledgerAccount' component={LedgerAccount}></Route>
        <Route path='salesJournal' component={SalesJournal}></Route>
        <Route path='trialBalance' component={TrialBalance}></Route>
        <Route path='about' component={About}></Route>
    </Route>
);
