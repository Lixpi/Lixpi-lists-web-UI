import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'


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

const decks = (state, action) => {
    switch (action.type) {
        case 'ADD_DECK':
             let newDeck = {
                name: action.data,
                id: +new Date
            };
            return state.concat([newDeck]);
        default:
            return state || [];
    }
}

const addingDeck = (state, action) => {
    switch (action.type) {
        case 'SHOW_ADD_DECK':
            return true;
        case 'HIDE_ADD_DECK':
            return false;
        default:
            return !!state;
    }
};

export default (history) => combineReducers({
    router: connectRouter(history),
    cards,
    decks,
    addingDeck
})
