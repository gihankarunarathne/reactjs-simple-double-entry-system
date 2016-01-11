/**
 * Copyright (c) 2016.
 * All rights reserved.
 *
 * IdeaStore
 */

"use strict";

import Dispatcher from '../dispatcher/Dispatcher';
import EventEmitter from 'events';
import IdeaConstants from '../constants/IdeaConstants';

class IdeaStore extends EventEmitter {
    constructor() {
        super();
        this.state = {
            ideaList: [],
            nextId : 0
        };
    }

    _addIdea(idea) {
        let newIdea = {
            id: this.state.nextId++,
            idea: idea
        };
        this.state.ideaList.push(newIdea);
    }

    _removeIdea(idea) {
        for(let i in this.state.ideaList) {
            if(this.state.ideaList[i].id === idea.id) {
                this.state.ideaList.splice(i, 1);
            }
        }
    }

    getAll() {
        return this.state.ideaList;
    }

    emitChange() {
        this.emit(this.CHANGE_EVENT);
    }
    addChangeListener(callback) {
        this.on(this.CHANGE_EVENT, callback);
    }
    removeChangeListener(callback) {
        this.removeListener(callback);
    }
}

let ideaStore = new IdeaStore();

Dispatcher.register(action => {
    switch(action.actionType) {
        case IdeaConstants.NEW_IDEA:
            ideaStore._addIdea( action.idea);
            ideaStore.emitChange();
            break;
        case IdeaConstants.REMOVE_IDEA:
            ideaStore._removeIdea(action.idea);
            ideaStore.emitChange();
            break;
    }
    return true;
});

export default ideaStore;
