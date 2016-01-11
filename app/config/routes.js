
"use strict";

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
// import COMPONENTS
import Main from '../components/Main';
import IdeaList from '../components/idea/IdeaList';

export default (
    <Route path='/' component={Main}>
        <IndexRoute component={IdeaList}></IndexRoute>
    </Route>
);
