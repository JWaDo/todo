import React from 'react';
import TodoForm from '../components/TodoList/TodoForm';
import TodoList from '../components/TodoList/TodoList';

const LandingPage = () => {

    return (
        <>
            <TodoList />
            <TodoForm />
        </>
    );
}
 
export default LandingPage;