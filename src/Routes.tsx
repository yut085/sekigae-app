import React from 'react';
import { Router, BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory();

export class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;