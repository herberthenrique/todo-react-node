import React, { PropTypes } from 'react';
import moment from 'moment';


export default class TaskLine extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    const taskId = e.target.value;
    const task = this.props.tasks.find(t => t._id === taskId);
    const newTask = Object.assign({}, task, { completed: !task.completed });
    this.props.updateTask(newTask);
  }

  handleClick(e) {
    const taskId = e.target.getAttribute('data-task');
    this.props.deleteTask(taskId);
  }

  taskLine(task, i) {
    const taskClass = task.completed ? 'task-completed' : 'task-todo';
    return (
      <li className={taskClass} key={i}>
            <label>
                <input type="checkbox" value={task._id} checked={task.completed} onChange={this.handleChange} />
                {task.name}
            </label>
            <button className="btn-delete" data-task={task._id} onClick={this.handleClick}> x </button>
            <span className="task-datetime"> {moment(task.created).format('DD/MM/YYYY')} </span>
        </li>);
  }
  sortTasks(tasks) {
    return tasks.sort((a, b) => new Date(a.created) - new Date(b.created));
  }

  renderCompletedTasks(tasks) {
    if (tasks.length) {
      return (
        <div>
            <h3 className="completed-title"> Completed </h3>
            <ul className="task-list" >
                {
                tasks
                .map((task, i) => this.taskLine(task, i))
                }
            </ul>
            </div>);
    }
    return (<div></div>);
  }

  render() {
    const tasks = this.sortTasks(this.props.tasks);
    const tasksCompleted = tasks
      .filter(task => task.completed);

    const completedList = this.renderCompletedTasks(tasksCompleted);
    return (
      <div>
          <ul className="task-list">
            {tasks
                .filter(task => !task.completed)
                .map((task, i) => this.taskLine(task, i))}
          </ul>
         {completedList}
        </div>
    );
  }
}

TaskLine.propTypes = {
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
