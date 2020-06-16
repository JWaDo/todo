import React from 'react';
import TodoListRoute from './TodoListRoute';
import { Route } from 'react-router-dom';


const combineRoutes = (routes) => {
    return routes.reduce((accumulator, route) => [...accumulator, ...route]);
};

const routes = combineRoutes([
    TodoListRoute,
]);

export const getRoutePathByName = (routeName) => {
    const route = routes.find((route) => route.name === routeName)
    return route.path;
}

export const generateRoutes = (routes) => {
    return routes.map(route => <Route {...route} /> );
}

export default routes;