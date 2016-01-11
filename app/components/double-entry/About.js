"use strict";

import React, { PropTypes } from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [{
                index: "123",
                name: "abc"
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
