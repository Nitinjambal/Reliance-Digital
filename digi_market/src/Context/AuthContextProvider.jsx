import React, { useState, createContext } from "react";

export const AuthContext = createContext();

//have to use this context will do in the night

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");

  const login = (token) => {
    setIsAuth(true);
    setToken(token);
  };

  const logout = () => {
    setIsAuth(false);
    setToken("");
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

//demo

export default AuthContextProvider;
