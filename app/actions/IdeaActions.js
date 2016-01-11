/**
 * Copyright (c) 2016.
 * All rights reserved.
 *
 * IdeaActions
 */

"use strict";

import axios from 'axios';

import Dispatcher from '../dispatcher/Dispatcher';
import IdeaConstants from '../constants/IdeaConstants';

class IdeaActions {
    constructor() {}

    /**
     * Add new idea
     */
    static addIdea(idea) {
        console.log('addIdea : ', idea);

                Dispatcher.dispatch({
                    actionType: IdeaConstants.NEW_IDEA,
                    idea: idea
                });
    }
}

export default IdeaActions;
