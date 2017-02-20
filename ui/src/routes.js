import React from 'react';
import { Route } from 'react-router';
import TaskContainer from 'containers/task.container';

export default (
    <Route>
        <Route path="/" component={TaskContainer} />
    </Route>
);
