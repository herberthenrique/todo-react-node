 /* eslint-disable react/prop-types */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from '../actions/task.actions';

import TaskCreate from '../components/task/task.create';
import TaskList from '../components/task/task.list';

class TaskContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.props.actions.loadTasks();
  }

  render() {
    const { tasks } = this.props;
    return (
      <div className="tasks-container">
        <h1> Your to do List </h1>
        <TaskCreate saveTask={this.props.actions.saveTask} />
        <TaskList
            tasks={tasks}
            updateTask={this.props.actions.updateTask}
            deleteTask={this.props.actions.deleteTask}
        />
      </div>
    );
  }
}

TaskContainer.propTypess = {
  actions: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
};


function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(taskActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);
