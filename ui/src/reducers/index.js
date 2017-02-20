import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tasks from './task.reducer';


const rootReducer = combineReducers({
  routing: routerReducer,
  tasks,
});

export default rootReducer;
