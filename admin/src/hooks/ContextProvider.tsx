import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// Define types for context value and functions
type User = {
  first_name: string;
  last_name: string;

  email: string; 
  image : string ;
};

type StateContextType = {
  user: User | null;
  token: string | null;
  API: string;
  setUser: Dispatch<SetStateAction<User | null>>;
  setToken: Dispatch<SetStateAction<string | null>>;
};

const StateContext = createContext<StateContextType>({
  user: null,
  token: null,
  API: "http://localhost:8000",
  setUser: () => {},
  setToken: () => {},
});

type ContextProviderProps = {
  children: ReactNode;
};

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const userinlocal = localStorage.getItem("Admin");
  const [API, setAPi] = useState<string>("http://localhost:8000");
  const [user, _setUser] = useState<User | null>(userinlocal ? JSON.parse(userinlocal) : { name: "username" });
  const [token, _setToken] = useState<string | null>(localStorage.getItem("Admin_TOKEN"));

  function setToken (token: string | null):void  {
    _setToken(token);
    if (token) {
      localStorage.setItem("Admin_TOKEN", token);
    } else {
      localStorage.removeItem("Admin_TOKEN");
    }
  };
  function setUser(user: User | null): void {
    _setUser(user);
    if (user) {
      localStorage.setItem("Admin", JSON.stringify(user));
    } else {
      localStorage.removeItem("Admin");
    }
  }
  return (
    <StateContext.Provider value={{ user, token, API, setUser , setToken } }>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
