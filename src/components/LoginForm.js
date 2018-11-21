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
        // const storeName = this.storeName.current.value;
        // this.props.history.push(`/store/${storeName}`);
        this.props.history.push(`/lists/1`);
    }
    render() {
        return (
            <div className="container full-height" id="login-page-container">
              <div className="row full-height " id="logo-container">
                <div className="col align-self-center d-flex flex-column" >
                    <img src="images/logo.png" alt="Lixpi Lists" />
                </div>
              </div>
              <div className="row full-height " id="login-form-container">
                 <form className="store-selector  d-flex flex-column" onSubmit={this.goToStore}>
                     <h2>Who are you?</h2>
                     <input type="text" required placeholder="Username" defaultValue="jira-admin" ref={this.loginName} />
                     <input type="password" required placeholder="Password" defaultValue="asdf" ref={this.loginPassword} />
                     <div className=" d-flex justify-content-end">
                        <button className="" type="submit">Go</button>
                     </div>
                 </form>
              </div>
            </div>
        )
    }
}

export default LoginForm;




