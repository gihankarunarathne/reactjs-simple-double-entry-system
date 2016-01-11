"use strict";

import React, { PropTypes } from 'react';

// import Actions
import IdeaActions from '../../actions/IdeaActions';
// import Stores
import IdeaStore from '../../stores/IdeaStore';
// import Components

class IdeaList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ideaList: []
        };
    }

    componentDidMount() {
        IdeaStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        IdeaStore.removeChangeListener(this._onChange.bind(this));
    }

    render () {
        var list = this.state.ideaList.map((idea, index) => {
            return <li value={idea.id} key={index}>{idea.idea}</li>;
        });

        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-2">
                    <form className="form-inline">
                      <div className="form-group">
                        <label className="sr-only" htmlFor="inputIDea">New Idea</label>
                        <input type="text" className="form-control" id="inputIDea" placeholder="Enter your idea here ..." ref={idea => {this.newIdea = idea;}}/>
                      </div>
                      <button type="submit" className="btn btn-default" onClick={this._addIdea.bind(this)}>Add</button>
                    </form>
                </div>
                <div className="col-md-6 col-md-offset-2">
                    <ul>
                        {list}
                    </ul>
                </div>
            </div>
        );
    }

    _onChange() {
        console.log('Idea List -> _onChange');
        console.log(IdeaStore.getAll());
        this.setState({
            ideaList: IdeaStore.getAll()
        });
    }

    _addIdea(e) {
        e.preventDefault();
        IdeaActions.addIdea(this.newIdea.value);
        this.newIdea.value = '';
    }
}

export default IdeaList;
