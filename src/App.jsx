import React from 'react'
import Header from './Commponent/util/Header'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/* header component does not change while rendering every other components so header is given in app.jsx */}
      <Header />
      {/* Renders the child route's element, if there is one. */}
      <Outlet />
    </div>
  );
};

export default App
