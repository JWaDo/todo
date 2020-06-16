import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';

export const useTodo = () => {
    
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const methods = {
        addTodo: (todoName) => {
            const existingTodo = todos.todos.find((todo) => todo.name === todoName);
            if(!existingTodo) {
                return dispatch({ type: actions.ADD_TODO, payload: todoName})
            }
            return dispatch({ type: actions.EXISTING_TODO})
        },
        deleteTodo: (todoName) => dispatch({ type: actions.DELETE_TODO, payload: todoName})
    }

    return [todos, methods];
}
