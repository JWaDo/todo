import { combineReducers } from 'redux';
import todosReducer from '../components/TodoList/reducer';

export default combineReducers({
    todos: todosReducer,
})