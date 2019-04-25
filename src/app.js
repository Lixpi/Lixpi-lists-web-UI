import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import LoginForm from './components/LoginForm'
import App from './components/App'
import ProjectsListing from './components/ProjectsListing'
import TasksListing from './components/TasksListing'
import NotFound from './components/NotFound'


const currentKey = location.pathname.split('/')[1] || '/'
const timeout = { enter: 200, exit: 1000 }

console.log('currentKey');
console.log(currentKey);


function run() {
    ReactDOM.render(
        <BrowserRouter>
        <Route render={({ location }) => (
            <TransitionGroup>
                {/*<CSSTransition key={location.key} timeout={{ enter: 11300, exit: 11300 }} >*/}
                <CSSTransition key={location.key} timeout={timeout}  classNames="route">
                    <Switch location={location}>
                        <Route exact path="/" component={LoginForm} />
                        <Route exact path="/projects" component={ProjectsListing} />
                        <Route exact path="/tasks" component={TasksListing} />
                        {/*<Route path="/lists/:listId" component={App} />*/}
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
