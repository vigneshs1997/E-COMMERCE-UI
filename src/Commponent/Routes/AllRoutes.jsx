import React from 'react'
import navs from './Navigation';
import { Route, Routes } from 'react-router-dom';
import App from '../../App';
import { useAuth } from '../Context/AuthProvider';


// const user = {//key and value pairs is called object
//   username: "",
//   role: "SELLER",
//   isAuthenticated:false //false = before login , true = after login
// }
// const { role, isAuthenticated } = user;//Restructuring(needed credentials only)

const AllRoutes = () => { 
      const { auth } = useAuth();
      const { role, isAuthenticated } = auth;
      return (
        <Routes>//every component should be put in one routes
          <Route path={"/"} element={<App auth={isAuthenticated} />}> //
            {navs.map((nav, i) => {//element and index position
              if (isAuthenticated) {
                if (nav.isVisibleAfterAuth) {
                  if (nav.role == role || nav.role == "ALL") {
                    console.log(nav);
                    return <Route key={i} path={nav.path} element={nav.element} />
                  }
             
                }
              } else {
                if (!nav.isVisibleAfterAuth && nav.role == 'ALL') {
                  console.log(nav);
                  return <Route key={i} path={nav.path} element={nav.element} />
                }
              }
            })}
          </Route>
        </Routes>

      );
    
}

export default AllRoutes