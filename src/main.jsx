import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes } from 'react-router-dom'

import AllRoutes from './Commponent/Routes/AllRoutes'
import AuthProvider from './Commponent/Context/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider child={<AllRoutes/>} />     
    </BrowserRouter>
  </React.StrictMode>,
);
