import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import * as reducers from './reducers';

import App from './components/App';
import Sidebar from './components/Sidebar';


const store = createStore(combineReducers(reducers));




function run() {
    let state = store.getState();

    ReactDOM.render((<Provider store={store}>
        <App>
            <Sidebar />
        </App>
        </Provider>), document.getElementById('root'));
}

run();

store.subscribe(run);

