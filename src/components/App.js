import React from 'react';

// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';


class App extends React.Component {
    // state = {
    //     fishes: {},
    //     order: {}
    // }
    // addFish = fish => {
    //     const fishes = { ...this.state.fishes };
    //     fishes[`fish${Date.now()}`] = fish;
    //     this.setState({
    //         fishes
    //     });
    // }
    render() {
        return (
            <div className="task-tracker">
                <h1>Root</h1>
                <Lists />
                <List />


                {/*<div className="menu">
                    <Header tagLine="Wes Is Cool"/>
                </div>
                <Order />
                <Inventory addFish={this.addFish} />*/}
            </div>
        );
    }
}

export default App;