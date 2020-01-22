import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './styles/tailwind.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/login';
import App from './App';

render(
  <Router>
      <Route exact path="/" component={ Login } />
      <Route path="/home" component={ App } />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
