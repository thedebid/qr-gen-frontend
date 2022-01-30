import React, { useReducer, useState, createContext } from "react";
import contextReducer from "./contextReducer";
// const initailState = [];

export const QRGENContext = createContext();

export const QRGENProvider = ({ children }) => {
  // const [transactions, dispatch] = useReducer(contextReducer, initailState);

  // const [isLoggedIn, setIsLoggedIn] = useState(
  //   localStorage.getItem("isLoggedIn") || false
  // );

  //Action Creators
  const getIsLoggedIn = () => {
    return localStorage.getItem("isLoggedIn") || false;
  };
  const setLoginData = (res) => {
    localStorage.setItem("token", res.data.jwtToken);
    localStorage.setItem("user", JSON.stringify(res.data));
  };
  const getUserData = () => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    return {
      token,
      user,
    };
  };
  const setIsLoggedIn = () => {
    localStorage.setItem("isLoggedIn", true);
  };
  //   const deleteTransaction = (id) =>
  //     dispatch({ type: "DELETE_TRANSACTION", payload: id });
  //   const addTransaction = (transaction) =>
  //     dispatch({ type: "ADD_TRANSACTION", payload: transaction });

  return (
    <QRGENContext.Provider
      value={{
        auth: {
          isLoggedIn: getIsLoggedIn,
          setLoginData,
          setIsLoggedIn,
        },
        user: {
          getUserData,
        },
        //   deleteTransaction, addTransaction, transactions
      }}
    >
      {children}
    </QRGENContext.Provider>
  );
};
