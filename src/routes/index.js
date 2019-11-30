import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Blog from '../pages/blog';

export default function Routes() {
    return (
        <Switch>
            <Route path='/blog' component={Blog} />
            <Route component={Blog} />
        </Switch>
    );
}
