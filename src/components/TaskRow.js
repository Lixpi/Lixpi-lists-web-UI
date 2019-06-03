import React from 'react';
import Select from 'react-select';
import classnames from 'classnames';

//Select
const options = [
  { value: '123', label: 'John Doe' },
  { value: '1234', label: 'Jane Doe' },
  { value: '12345', label: 'Kate Wilson' }
];

function getSelectOption({ icon, label }) { // option has keys `icon`, `label` and `value`
  return (
    <div className="d-flex justify-content-start align-items-center">
        <img className="avatar" src="/images/avatar.jpg" alt="Kate" />
        <span >{label}</span>
    </div>
  );
}

function TaskAssignee({isEditing, selectedOption, handleChange}) {
    if (!isEditing) {
        return (<span className="task-assignee">Kate Wilson</span>);
    }
    return (
    <div style={{width: '100px'}} >
        <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            getOptionValue={getSelectOption}
            getOptionLabel={getSelectOption}
            className="user-select"
        />
    </div>
    )
}

class TaskRow extends React.Component {

    state = {
        dates: null,
        selectedOption: null,
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    render() {
        const { selectedOption } = this.state;

        return (
            <div className={classnames(`color-coded-row task-row code-${this.props.colorCode}`)}>
                <div className="row no-gutters align-items-center">
                    <div className="col-md-auto task-status">
                        <span className={classnames(`icon-${this.props.taskType}`)}></span>
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
                        <span className="task-title">{this.props.taskTitle}</span>
                    </div>
                    <div className="col">
                        <div className="row no-gutters align-items-center d-flex justify-content-end">
                            <div className="col-md-auto datepicker-container">
                                <span className="task-due">Apr/01/19</span>
                                {/* <Calendar
                                    date={new Date()}
                                    onChange={this.handleSelect}
                                />*/}
                            </div>
                            <div className="col-md-auto task-assignee-avatar">
                                <img className="avatar" src="/images/avatar.jpg" alt="Kate" />
                            </div>
                            <div className="col-md-auto">
                                {/*<span className="task-assignee">Kate Wilson</span>*/}
                                <TaskAssignee isEditing={this.props.isEditing} selectedOption={selectedOption} handleChange={this.handleChange} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskRow;




