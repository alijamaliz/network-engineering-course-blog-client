import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Blog from '../pages/blog';
import NewPost from '../pages/newPost';

export default function Routes() {
    return (
        <Switch>
            <Route path='/blog' component={Blog} />
            <Route path='/new-post' component={NewPost} />
            <Route component={Blog} />
        </Switch>
    );
}
