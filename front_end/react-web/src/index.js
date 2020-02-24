import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './styles/tailwind.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'; 

import Login from './pages/login';
import Admin from './pages/admins';
import AddBook from './pages/addBook';
import VirtualLibrary from './pages/virtualLibrary';
import Page404 from './pages/Page404';
import Reserve from './pages/reserve';
import AddStateBook from './pages/config/addStateBook';
import AddStatePeople from './pages/config/addStatePeople';
import AddStateReserve from './pages/config/addStateReserve';
import AddTypePeople from './pages/config/addTypePeople';
import ApprovedOrders from './pages/approved_orders';
import RejectedOrders from './pages/rejected_orders';
import UpdateBook from './pages/updateBook';

render(
  <Router>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/virtual_library" component={ VirtualLibrary } />
        <Route path="/admins" component={ Admin } />
        <Route path="/add_book" component={ AddBook } />
        <Route path="/reserve" component={ Reserve } />
        <Route path="/approved_orders" component={ ApprovedOrders } />
        <Route path="/rejected_orders" component={ RejectedOrders } />
        <Route path="/update_book" component={ UpdateBook } />
        <Route path="/config/state_books" component={ AddStateBook } />
        <Route path="/config/state_people" component={ AddStatePeople } />
        <Route path="/config/state_reserve" component={ AddStateReserve } />
        <Route path="/config/type_people" component={ AddTypePeople } />
        <Route component={ Page404 } />
      </Switch>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
