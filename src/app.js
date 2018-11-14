import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import LoginForm from './components/LoginForm'
import App from './components/App'
import NotFound from './components/NotFound'


const currentKey = location.pathname.split('/')[1] || '/'
const timeout = { enter: 11300, exit: 11200 }

console.log('currentKey');
console.log(currentKey);


function run() {
    ReactDOM.render(
        <BrowserRouter>
        <Route render={({ location }) => (
            <TransitionGroup>
                {/*<CSSTransition key={location.key} timeout={{ enter: 11300, exit: 11300 }} >*/}
                <CSSTransition key={location.key} timeout={{ enter: 1000, exit: 1000 }}  classNames="post">
                    <Switch location={location}>
                        <Route exact path="/" component={LoginForm} />
                        <Route path="/store/:storeId" component={App} />
                        <Route component={NotFound} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        )} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

run();
