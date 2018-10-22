import React from 'react';

// console.log('visibleCards');
const Cards = ({ match }) => {
    console.log('match visibleCards');
    console.log(match);
    return (<div>Deck will display here and ID will be: {match.params.deckId}</div>);
};

export default Cards;