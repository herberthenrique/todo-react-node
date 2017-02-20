import React, { PropTypes } from 'react';

export default class TaskCreate extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const name = this.refs.name.value;
    this.props.saveTask({ name });
    this.refs.taskForm.reset();
    this.refs.name.focus();
  }
  render() {
    return (
        <div className="task-form-container">
          <form onSubmit={this.handleSubmit} ref="taskForm" className="task-form">
            <input type="text" className="input-control" ref="name" placeholder="Task Name" />
            <input type="submit" hidden />
          </form>
        </div>
    );
  }
}

TaskCreate.propTypes = {
  saveTask: PropTypes.func.isRequired,
};
