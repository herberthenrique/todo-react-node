import * as types from './action.types';
import * as taskService from '../services/task.service';

export function loadTasksSuccess(tasks) {
  return { type: types.LOAD_TASK_SUCCESS, tasks };
}

export function createTaskSuccess(task) {
  return { type: types.TASK_CREATE, task };
}

export function updateTaskSuccess(task) {
  return { type: types.TASK_UPDATED, task };
}


export function deleteTaskSuccess(id) {
  return { type: types.TASK_DELETED, id };
}

export function loadTasks() {
  return function dispatchFunction(dispatch) {
    return taskService.getAll()
      .then(response => response.json())
      .then(tasks => {
        dispatch(loadTasksSuccess(tasks));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function deleteTask(id) {
  return function dispatchFunction(dispatch) {
    return taskService.destroy(id).then(() => {
      dispatch(deleteTaskSuccess(id));
    })
    .catch(error => {
      throw (error);
    });
  };
}

export function updateTask(task) {
  return function dispatchFunction(dispatch) {
    return taskService.update(task).then(newTask => {
      dispatch(updateTaskSuccess(newTask));
    })
    .catch(error => {
      throw (error);
    });
  };
}


export function saveTask(task) {
  return function dispatchFunction(dispatch) {
    return taskService.save(task).then(newTask => {
      dispatch(createTaskSuccess(newTask));
    })
    .catch(error => {
      throw (error);
    });
  };
}
