import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {

    //Specifying required props format
    static propTypes = {
        loginName: PropTypes.string,
        loginPassword: PropTypes.string
    }

    storeName = React.createRef();

    goToStore = event => {
        event.preventDefault();
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
                        <input type="text" required placeholder="Username" ref={this.loginName} />
                        <input type="text" required placeholder="Password" ref={this.loginPassword} />
                        <button type="submit">Enter</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default LoginForm;