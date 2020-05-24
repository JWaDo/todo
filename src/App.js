import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import NavBar from './components/Global/NavBar/NavBar';

import history from './configs/history';
import routes from './routes/index';
import { generateRoutes } from './routes/index';

import './index.css'

function App() {

  return (
    <div className="main">
      <Router history={history}>
        <NavBar />
        
        <Switch>
          
          {/* Routes */}
          {generateRoutes(routes)}
          
          {/* Not Found */}
          {/* <Route exact path={"/404.html"} component={NotFound} />
          <Route render={() => <Redirect to={"404.html"} />} /> */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
