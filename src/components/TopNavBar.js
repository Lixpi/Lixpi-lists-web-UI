import React from 'react';


class TopNavBar extends React.Component {


    render() {
        return (
            <div className="row align-items-center " id="nav-bar">
                <div className="col-md-auto">
                    <img className="logo" src="/images/logo.png" alt="Lixpi Lists" />
                </div>
                <div className="col-md-auto">
                    <span className="mr-4">Feed</span>
                </div>

                <div className="col-md-auto">
                    <span>Projscts</span>
                </div>

                <div className="col-md-auto">
                    <span>Tasks</span>
                </div>

                <div className="col-md-auto">
                    <div className="create-new-wrapper">
                        <button className="create-new mr-1">Create</button>
                        <ul>
                            <li>Task</li>
                            <li>List</li>
                            <li>Project</li>
                        </ul>
                    </div>
                </div>

                <div className="col">
                    <div className="navbar-search-wrapper">
                        <input type="text" className="navbar-search" placeholder="Search"/>
                    </div>
                </div>
                <div className="col-md-auto">
                    <div className="switch">
                        <span className="switch-icon-container">
                            <span className="icon-tasks"></span>
                        </span>
                    </div>
                </div>
                <div className="col col-lg-2 d-flex justify-content-end">
                    <div className="user-menu">
                        <img className="avatar" src="/images/avatar.jpg" alt="Kate" />
                    </div>
                </div>
                {/*<div className="col align-self-center d-flex flex-column" >
                asdf
                    <img src="images/logo.png" alt="Lixpi Lists" />
                </div>*/}
            </div>
        )
    }
}

export default TopNavBar;




