import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import LayoutOne from './pages/LayoutOne';
import LayoutTwo from './pages/LayoutTwo';
import SelectCheckboxes from './pages/SelectCheckboxes';
import ApiDescription from './pages/ApiDescription';
import 'normalize.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/css">
          <LayoutOne />
        </Route>
        <Route path="/css2">
          <LayoutTwo />
        </Route>
        <Route path="/hook">
          <SelectCheckboxes />
        </Route>
        <Route path="/hook">
          <SelectCheckboxes />
        </Route>
        <Route path="/crud">
          <ApiDescription />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
