import React from 'react';
import Sidebar from './Sidebar';

const App = ({ children }) => {
    console.log('children');
    console.log(children);

    return (<div className="app">
        <Sidebar />
        {children}
    </div>);
}

export default App;