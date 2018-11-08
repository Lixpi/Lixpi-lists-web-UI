import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

    storeName = React.createRef();

    goToStore = event => {
        event.preventDefault();
        console.log(this);
        const storeName = this.storeName.current.value;
        this.props.history.push(`/store/${storeName}`);
    }
    render() {
        return (
            <div id="login-page-container">
                <div id="logo-container">
                    <img src="images/logo.png" alt="Lixpi Lists" />
                </div>
                <div id="login-form-container">
                    <form className="store-selector" onSubmit={this.goToStore}>
                        <h2>Who are you?</h2>
                        <input type="text" required placeholder="Username" ref={this.storeName} />
                        <input type="text" required placeholder="Password" ref={this.storeName} />
                        <button type="submit">Enter</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default StorePicker;