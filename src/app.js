import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StorePicker from './components/StorePicker'
import App from './components/App'
import NotFound from './components/NotFound'

function run() {
    ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={StorePicker} />
                <Route path="/store/:storeId" component={App} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

run();
