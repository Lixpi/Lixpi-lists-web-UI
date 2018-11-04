import React from 'react';
import { showAddDeck } from '../actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    showAddDeck: () => dispatch(showAddDeck())
});

const Toolbar = ({ deckId, showAddDeck }) => {
    let deckTools = deckId ? (
        <div>
            <Link className='btn' to={`/deck/${deckId}/new`}> ✚ New card </Link>
            <Link className='btn' to={`/deck/${deckId}/study`}> Study deck </Link>
        </div>
    ) : null;
    return (
        <div className='toolbar'>
            <div>
                <button onClick={showAddDeck}> ✚ New deck </button>
            </div>
            {deckTools}
        </div>
    );
};

export default connect(null, mapDispatchToProps)(Toolbar);