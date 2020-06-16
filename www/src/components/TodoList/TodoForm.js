import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as actions from './actions';
import { useTodo } from './useTodo';
import Typography from '@material-ui/core/Typography';

const TodoForm = () => {

    const [todos, { addTodo }] = useTodo();
    const [todoName, setTodoName] = useState("");

    const handleConfirm = (todoName) => {
        if(!!todoName) addTodo(todoName);
        setTodoName("");
    }

    const handleEnter = (e) => {
        if(e.key === 'Enter') {
            handleConfirm(todoName);
        }
    }

    return (
        <form
            autoComplete="off"
            onSubmit={(e) => e.preventDefault()}
        >
            <TextField 
                id="standard-basic" 
                label="Todo name"
                value={todoName} 
                onChange={(e) => setTodoName(e.target.value)}
                onKeyPress={(e) => handleEnter(e)}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={() => handleConfirm(todoName)}
            >
                Envoyer        
            </Button>
            {todos.existing && <Typography variant="body">Ce todo existe déjà !</Typography>}
        </form>
    );
}
 
export default TodoForm;