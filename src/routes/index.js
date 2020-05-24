import React from 'react';
import budget from './budget';
import conseils from './conseils';
import marketing from './marketing';
import quiSommesNous from './quiSommeNous';
import transformation from './transformation';
import { Route } from 'react-router-dom';


const combineRoutes = (routes) => {
    return routes.reduce((accumulator, route) => [...accumulator, ...route]);
};

const routes = combineRoutes([
    quiSommesNous,
    transformation,
    conseils,
    marketing,
    budget,
]);

export const getRoutePathByName = (routeName) => {
    const route = routes.find((route) => route.name === routeName)
    return route.path;
}

export const generateRoutes = (routes) => {
    return routes.map(route => <Route {...route} /> );
}

export default routes;