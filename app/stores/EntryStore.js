/**
 * Copyright (c) 2016.
 * All rights reserved.
 *
 * EntryStore
 */

"use strict";

import Dispatcher from '../dispatcher/Dispatcher';
import EventEmitter from 'events';
import EntryConstants from '../constants/EntryConstants';

class EntryStore extends EventEmitter {
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

let ideaStore = new EntryStore();

Dispatcher.register(action => {
    switch(action.actionType) {
        case EntryConstants.NEW_IDEA:
            ideaStore._addIdea( action.idea);
            ideaStore.emitChange();
            break;
        case EntryConstants.REMOVE_IDEA:
            ideaStore._removeIdea(action.idea);
            ideaStore.emitChange();
            break;
    }
    return true;
});

export default ideaStore;
