"use strict";

import React, { PropTypes } from 'react';

// import Actions
import InvoiceActions from '../../actions/InvoiceActions';
// import Stores
import EntryStore from '../../stores/EntryStore';
// import Components

class SalesJournal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entryList: EntryStore.getAll()
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render () {

        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-2">
                    SalesJournal
                </div>
            </div>
        );
    }

    _onChange() {
    }

}

export default SalesJournal;
