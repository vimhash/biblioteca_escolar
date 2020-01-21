import React from'react';
import Sidebar from './components/sidebar';
import Home from './pages/home';
import Header from './components/header';

const App = () => {
  return (
    <div>
      <Sidebar />,
      <Header />,
      <Home />
    </div>
  );
}

export default App;