import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

const TasksListing = () => (
    <CSSTransition timeout={11000} classNames="post">


        <div className="container full-height" id="login-page-container">
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

            <div className="taksk-listing mt-4">

                <div className="color-coded-row code-red task-row">
                    <div className="row no-gutters align-items-center">
                        <div className="col-md-auto">
                            <span className="icon-info-circled"></span>
                        </div>
                        <div className="col-md-auto">
                            <span className="icon-hash"></span>
                        </div>
                        <div className="col-md-auto">
                            <span className="task-key">ICC-215</span>
                        </div>
                        <div className="col-md-auto">
                            <span className="vertical-divider"></span>
                        </div>
                        <div className="col-md-auto">
                            <span className="task-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam dignissimos minus id</span>
                        </div>
                        <div className="col-md-auto">
                            <span className="task-due">Apr/01/19</span>
                        </div>
                        <div className="col-md-auto">
                            <div className="row no-gutters align-items-center task-assignee">
                                <div className="col-md-auto">
                                    <img className="avatar" src="/images/avatar.jpg" alt="Kate" />
                                </div>
                                <div className="col-md-auto">
                                    <span className="">Kate Wilson</span>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>




            </div>



        </div>





    </CSSTransition>
)

export default TasksListing;