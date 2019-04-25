import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Calendar } from 'react-date-range';




class TasksListing extends React.Component {

    state = {
    dates: null
  }

  onSelect = dates => this.setState({dates})




    render() {
        return (
            <CSSTransition timeout={11000} classNames="post">


                <div className="container full-height" id="login-page-container">
                <Calendar
                date={new Date()}
                onChange={this.handleSelect} />

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
                                <div className="col-md-auto task-status">
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
                                    <span className="task-title">Blocker task, requires immediate attention</span>
                                </div>
                                <div className="col">
                                    <div className="row no-gutters align-items-center d-flex justify-content-end">
                                        <div className="col-md-auto">
                                            <span className="task-due">Apr/01/19</span>
                                        </div>
                                        <div className="col-md-auto task-assignee-avatar">
                                            <img className="avatar" src="/images/avatar.jpg" alt="Kate" />
                                        </div>
                                        <div className="col-md-auto">
                                            <span className="task-assignee">Kate Wilson</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="color-coded-row code-yellow task-row">
                            <div className="row no-gutters align-items-center">
                                <div className="col-md-auto task-status">
                                    <span className="icon-attention"></span>
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
                                    <span className="task-title">Important task that requires special attention</span>
                                </div>
                                <div className="col">
                                    <div className="row no-gutters align-items-center d-flex justify-content-end">
                                        <div className="col-md-auto">
                                            <span className="task-due">Apr/01/19</span>
                                        </div>
                                        <div className="col-md-auto task-assignee-avatar">
                                            <img className="avatar" src="/images/avatar.jpg" alt="Kate" />
                                        </div>
                                        <div className="col-md-auto">
                                            <span className="task-assignee">Kate Wilson</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="color-coded-row code-green task-row">
                            <div className="row no-gutters align-items-center">
                                <div className="col-md-auto task-status">
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
                                    <span className="task-title">Higher than regular priority task</span>
                                </div>
                                <div className="col">
                                    <div className="row no-gutters align-items-center d-flex justify-content-end">
                                        <div className="col-md-auto">
                                            <span className="task-due">Apr/01/19</span>
                                        </div>
                                        <div className="col-md-auto task-assignee-avatar">
                                            <img className="avatar" src="/images/avatar.jpg" alt="Kate" />
                                        </div>
                                        <div className="col-md-auto">
                                            <span className="task-assignee">Kate Wilson</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="color-coded-row code-grey task-row">
                            <div className="row no-gutters align-items-center">
                                <div className="col-md-auto task-status">
                                    <span className="icon-info"></span>
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
                                    <span className="task-title">Regular priority task</span>
                                </div>
                                <div className="col">
                                    <div className="row no-gutters align-items-center d-flex justify-content-end">
                                        <div className="col-md-auto">
                                            <span className="task-due">Apr/01/19</span>
                                        </div>
                                        <div className="col-md-auto task-assignee-avatar">
                                            <img className="avatar" src="/images/avatar.jpg" alt="Kate" />
                                        </div>
                                        <div className="col-md-auto">
                                            <span className="task-assignee">Kate Wilson</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="color-coded-row code-grey task-row new-task-input">
                            <div className="row no-gutters align-items-center">
                                
                                <div className="col-md-auto">
                                    <span className="icon-hash"></span>
                                </div>
                                
                                
                                <div className="col">
                                    {/*<span className="task-title">Regular priority task</span>*/}
                                    <input type="text" name="new-task" autoFocus={true} placeholder="New task" />
                                </div>
                                <div className="col-md-auto">
                                    <div className="row no-gutters align-items-center d-flex justify-content-end">
                                        <div className="col-md-auto">
                                            <span className="task-due">Apr/01/19</span>
                                        </div>
                                        <div className="col-md-auto task-assignee-avatar">
                                            <img className="avatar" src="/images/avatar.jpg" alt="Kate" />
                                        </div>
                                        <div className="col-md-auto">
                                            <span className="task-assignee">Kate Wilson</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>








                    </div>



                </div>





            </CSSTransition>
        )
    }
}

export default TasksListing;















