import React from 'react';
import budget from './budget';
import conseils from './conseils';
import marketing from './marketing';
import quiSommesNous from './quiSommeNous';
import transformation from './transformation';
import landing from './landing';
import { Route } from 'react-router-dom';


const combineRoutes = (routes) => {
    return routes.reduce((accumulator, route) => [...accumulator, ...route]);
};

export const navRoutes = combineRoutes([
    quiSommesNous,
    budget,
    landing,
]);

export const otherRoutes = combineRoutes([
    transformation,
    conseils,
    marketing,
])

const routes = [...navRoutes, ...otherRoutes];

export const getRoutePathByName = (routeName) => {
    const route = routes.find((route) => route.name === routeName)
    return route.path;
}

export const generateRoutes = (routes) => {
    return routes.map(route => <Route {...route} /> );
}

export default routes;