import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Calendar } from 'react-date-range';
import Select from 'react-select';

import TopNavBar from './TopNavBar';
import TaskRow from './TaskRow';
import NewTaskRow from './NewTaskRow';

class TasksListing extends React.Component {
    render() {

        return (
            <CSSTransition timeout={11000} classNames="post">
                <div className="container full-height" id="login-page-container">
                    <TopNavBar />
                    <div className="taksk-listing mt-4">

                        <TaskRow colorCode="red" taskType="info-circled" taskTitle={'Important task that requires special attention'} isEditing="true"/>
                        <TaskRow colorCode="yellow" taskType="info" taskTitle={'Higher than regular priority task'} />
                        <TaskRow colorCode="green" taskType="info-circled" taskTitle={'Regular priority task'} />
                        <NewTaskRow colorCode="grey" taskType="info-attention"/>

                    </div>
                </div>
            </CSSTransition>
        )
    }
}

export default TasksListing;
