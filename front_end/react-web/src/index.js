import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './styles/tailwind.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/login';
import Home from './pages/home';
import Admin from './pages/admins';
import AddBook from './pages/addBook';
import VirtualLibrary from './pages/virtualLibrary';
import Page404 from './pages/Page404';
import Reserve from './pages/reserve';

render(
  <Router>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/home" component={ Home } />
        <Route path="/admins" component={ Admin } />
        <Route path="/add_book" component={ AddBook } />
        <Route path="/virtual_library" component={ VirtualLibrary } />
        <Route path="/reserve" component={ Reserve } />
        <Route component={ Page404 } />
      </Switch>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
