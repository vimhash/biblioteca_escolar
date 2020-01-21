import React from'react';
import Sidebar from './components/sidebar';
import Home from './pages/home';
import Header from './components/header';
import Login from './pages/login';

const Ingreso = () => {
  return (
    <div>
      <Login />
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Sidebar />,
      <Header />,
      <Home />
    </div>
  );
}

export default Ingreso;