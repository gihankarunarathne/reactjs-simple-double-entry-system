"use strict";

import React, { PropTypes } from 'react';

class ItemList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let list = this.props.itemList.map((item, index) => {
            let amount = item.quantity * item.unitPrice;
            return (<tr key={index}>
              <td>{item.quantity}</td>
              <td>{item.description}</td>
              <td>{item.unitPrice}</td>
              <td>{amount}</td>
            </tr>);
        });

            return (
                <tbody>
                    {list}
                </tbody>
            );
    }
}

ItemList.PropTypes = {
    itemList: PropTypes.array.isRequired
};

export default ItemList;
