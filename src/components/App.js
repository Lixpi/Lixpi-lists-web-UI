import React from 'react';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ deckId: state.router.location.pathname.split("/").pop() });

const App = ({ deckId, children }) => {
    return (<div className="app">
        <Toolbar deckId={deckId} />
        <Sidebar />

        {children}
    </div>);
}

export default connect(mapStateToProps)(App);
// export default App;