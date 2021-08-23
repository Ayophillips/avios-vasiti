import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  products: [],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeProduct = (id) => {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: id,
    });
  };

  const addProduct = (product) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: product,
    });
  };

  const editProduct = (product) => {
    dispatch({
      type: "EDIT_USER",
      payload: product,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        removeProduct,
        addProduct,
        editProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
