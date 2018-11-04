import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router'
import createRootReducer from './reducers'
import App from './components/App';
import VisibleCards from './components/VisibleCards';

import * as localStore from './localStore';

const history = createBrowserHistory();
const store = createStore(createRootReducer(history), localStore.get());

function run() {
    let state = store.getState();
    localStore.set(state, ['decks', 'cards']);

    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App>
                    <Switch>
                        <Route path='/deck/:deckId' component={VisibleCards}></Route>
                    </Switch>
                </App>

            </ConnectedRouter>
        </Provider>,
        document.getElementById('root')
    );
}

run();

store.subscribe(run);

