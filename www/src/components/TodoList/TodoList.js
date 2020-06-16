import React, { useState } from 'react'
import TodoForm from './TodoForm';
import { useTodo } from './useTodo';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

const Todolist = () => {

    const [todos, { deleteTodo }] = useTodo();


    return (
        <>
        <Typography variant="h3">Votre todo list comprend {todos.length} {todos.length > 1 ? 'todos' : 'todo'} </Typography>
        <List>
           { todos && todos.todos.map(todo => (
                <ListItem>
                    {/* <ListItemAvatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                    </ListItemAvatar> */}
                    <ListItemText
                        primary={todo.name}
                    />
                    <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon onClick={() => deleteTodo(todo.name)} />
                    </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}

        </List>
        </>
    );
}
 
export default Todolist;