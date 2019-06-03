import React from 'react';
import Select from 'react-select';
import classnames from 'classnames';

//Select
const options = [
  { value: '123', label: 'John Doe' },
  { value: '1234', label: 'Jane Doe' },
  { value: '12345', label: 'Veeeryyyyyy Looooooooooong' }
];

function getSelectOption({ icon, label }) { // option has keys `icon`, `label` and `value`
  return (
    <div className="d-flex justify-content-start align-items-center">
        <img className="avatar" src="/images/avatar.jpg" alt="Kate" />
        <span >{label}</span>
    </div>
  );
}

class NewTaskRow extends React.Component {

    render() {
        return (
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
        )
    }
}

export default NewTaskRow;




