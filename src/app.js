import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
// import { createStore, combineReducers } as Redux from 'redux';

const cards = (state, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            let newCard = Object.assign({}, action.data, {
                score: 1,
                id: +new Date
            });
            return state.concat([newCard]);
        default:
            return state || [];
    }
};

const App = (props) => {
    return (<div className="app">
        <h1>{props.children}</h1>
        </div>);
}

ReactDOM.render(<App> Test 2 </App>, document.getElementById('root'));