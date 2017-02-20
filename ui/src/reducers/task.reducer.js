import * as types from '../actions/action.types';
import initialState from './initialState';

export default function taskReducer(state = initialState.tasks, action) {
  switch (action.type) {
    case types.LOAD_TASK_SUCCESS:
      return action.tasks;

    case types.TASK_CREATE:
      return [
        ...state,
        Object.assign({}, action.task),
      ];

    case types.TASK_UPDATED:
      return [
        ...state.filter(task => task._id !== action.task._id),
        Object.assign({}, action.task),
      ];
    case types.TASK_DELETED:
      return state.filter(task => task._id !== action.id);
    default:
      return state;
  }
}
