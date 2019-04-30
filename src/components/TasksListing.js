import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Calendar } from 'react-date-range';
import Select from 'react-select';

import TopNavBar from './TopNavBar';


//Select
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];



class TasksListing extends React.Component {

    state = {
        dates: null,
        selectedOption: null,
    }

    onSelect = dates => this.setState({dates})


    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }


    render() {
        const { selectedOption } = this.state;

        return (
            <CSSTransition timeout={11000} classNames="post">


                <div className="container full-height" id="login-page-container">
                {/*<Calendar
                    date={new Date()}
                    onChange={this.handleSelect}
                />*/}

                    <TopNavBar />


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
                                            {/*<span className="task-assignee">Kate Wilson</span>*/}
                                            <Select
                                                value={selectedOption}
                                                onChange={this.handleChange}
                                                options={options}
                                            />
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















