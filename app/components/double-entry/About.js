"use strict";

import React, { PropTypes } from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [{
                    "index": "144061F",
                    "name": "Gunasekara M. M. J."
                }, {
                    "index": "144067E",
                    "name": "Harankahawa H. S. B. D. B."
                }, {
                    "index": "144049C",
                    "name": "Fauzil M. A."
                }, {
                    "index": "144208N",
                    "name": "Karunarathne H.M.M.H."
                }, {
                    "index": "144219A",
                    "name": "Peiris H.R.R."
                }, {
                    "index": "144229E",
                    "name": "Sithumini B.S.D."
                }, {
                    "index": "144240E",
                    "name": "P.S.S. De Silva"
                }, {
                    "index": "144150D",
                    "name": "Saajitha A.K.S."
                }, {
                    "index": "144015U",
                    "name": "Asna A.A."
                }, {
                    "index": "144189E",
                    "name": "Welikala J.S."
                }]
        };
    }

    render () {
        let list = this.state.members.map((member, index) => {
            return (
                <tr key={index}>
                  <td>{member.index}</td>
                  <td>{member.name}</td>
                </tr>
            );
        });

        return (
            <div className="row">
                <p className="text-center">Project Team</p>
                <hr/>
                <div className="col-md-6 col-md-offset-1">
                    <table className="table table-striped">
                        <thead>
                          <tr className="success">
                            <th className="col-md-2">Index No</th>
                            <th className="col-md-4">Name</th>
                          </tr>
                        </thead>
                        <tbody>
                            {list}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

export default About;
