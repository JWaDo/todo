import * as actions from './actions';

const initialState = {
    todos: [],
    existing: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case actions.ADD_TODO: 
            return {
                ...state,
                todos: [...state.todos, {
                    name: action.payload,
                    status: 'todo'
                }],
                existing: false,
            }
        case actions.DELETE_TODO: 
            return {
                ...state,
                todos: state.todos.filter(todo => todo.name != action.payload)   
            }
        case actions.EXISTING_TODO:
            return {
                ...state,
                existing: true
            }
        default: return state;
    }
}