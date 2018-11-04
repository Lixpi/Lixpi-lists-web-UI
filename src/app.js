import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// import { Router, Route, Switch } from 'react-router';

import { Router, Route, Switch } from 'react-router-dom';

// import { Router, Route, browserHistory } from 'react-router';
import { createBrowserHistory } from 'history';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
reducers.routing = routerReducer;

import * as reducers from './reducers';

import App from './components/App';
import VisibleCards from './components/VisibleCards';



const store = createStore(combineReducers(reducers));
const history = syncHistoryWithStore(createBrowserHistory(), store);

console.log('asdf');


function run() {
    let state = store.getState();

    ReactDOM.render((<Provider store={store}>
        
        <Router history={history}> 
            <App>
                <Switch>
                    <Route path='/deck/:deckId' component={VisibleCards}></Route>
                </Switch>
            </App>

        </Router>

        </Provider>), document.getElementById('root'));
}

run();

store.subscribe(run);

