import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Homepage from '../pages/homepage.page';

const Routes = () => (
    <BrowserRouter basename="/">
        <Switch>
            <Route path="/" exact component={Homepage} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
