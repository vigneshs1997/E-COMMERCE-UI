import React, { createContext, useContext, useEffect, useState } from 'react'
import DoLoginRefresh from '../Auth/DoLoginRefresh';

const authContext = createContext({});//createContext creates container

const AuthProvider = ({ child }) => {//Authentication Provider accepts objects and given reference to the variable as child.
  let refreshRequired = false;
    const { validateAndRefresh } = DoLoginRefresh();
    const [auth, setAuth] = useState({ //object given in useState is stored in auth
        userId: "",
        username: "",
        role: "ALL",
        isAuthenticated: false,
        accessExpiration: "",
        refreshExpiration: ""
    });
    const refreshLogin = async () => {
      const user = await validateAndRefresh();
      //console.log("user" + user);
        if (user) {
          setAuth({
                    userId: user.userId,
                    username: user.userName,
                    role: user.role,
                    isAuthenticated: user.authenticated,
                    accessExpiration: user.accessExpiration,
                    refreshExpiration: user.refreshExpiration
          });
      }
    }
  useEffect(() => {
    if (!refreshRequired)
      refreshRequired = true;
        refreshLogin();
    }, []);
  return (
      <authContext.Provider value={{auth,setAuth}}>
          {child}
  </authContext.Provider>
  )
}

export default AuthProvider
export const useAuth = () => useContext(authContext);//useContext uses that container