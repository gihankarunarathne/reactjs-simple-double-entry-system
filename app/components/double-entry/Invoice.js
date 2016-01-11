"use strict";

import React, { PropTypes } from 'react';

class Invoice extends React.Component {
    render () {
        return (
            <div>
                <div className="row">
                    <div className="col-md-1 col-md-offset-1">
                        <img src="./images/comapny-logo.jpg" alt="Logo" className="img-rounded" style={{maxWidth:100}}/>
                    </div>
                    <div className="col-md-4">
                        <address>
                            <strong>Twitter, Inc.</strong><br/>
                            1355 Market Street, Suite 900<br/>
                            San Francisco, CA 94103<br/>
                            <abbr title="Phone">P:</abbr> (123) 456-7890
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
                        <select className="form-control">
                          <option value="Gayan">Gayan</option>
                          <option value="Kumari">Kumari</option>
                        </select>
                        <address>
                            1355 Market Street, Suite 900<br/>
                            San Francisco, CA 94103<br/>
                            <abbr title="Phone">P:</abbr> (123) 456-7890
                        </address>
                    </div>
                    <div className="col-md-3 col-md-offset-2">
                        <strong>Shipping Address (if Different) :</strong><br/>
                        <address>
                            Twitter, Inc.<br/>
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
                                <th className="col-md-1">Firstname</th>
                                <th className="col-md-4">Lastname</th>
                                <th className="col-md-1">Email</th>
                                <th className="col-md-1">Email</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>John</td>
                                <td>Doe</td>
                                <td>john@example.com</td>
                                <td>john@example.com</td>
                              </tr>
                              <tr>
                                <td>Mary</td>
                                <td>Moe</td>
                                <td>mary@example.com</td>
                                <td>mary@example.com</td>
                              </tr>
                              <tr>
                                <td><input type="number" placeholder="No of Items"></input></td>
                                <td><input type="text" className="col-md-12" placeholder="Description"></input></td>
                                <td><input type="number" placeholder="Unit Price"></input></td>
                                <td><p className="col-md-8">123</p><span>  </span><button type="submit" className="btn btn-info btn-xs">Add</button></td>
                              </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 col-md-offset-9">
                        <dl className="dl-horizontal">
                          <dt>Sub Total :</dt>
                          <dd>123</dd>
                          <dt>Sales Tax :</dt>
                          <dd>123</dd>
                          <dt>Shipping Charges :</dt>
                          <dd>123</dd>
                          <dt>Total :</dt>
                          <dd>123</dd>
                        </dl>
                    </div>
                </div>
                <div className="row">
                    <p className="text-center">Thank you. Come Again!.</p>
                </div>
            </div>
        );
    }
}

export default Invoice;
