import React from "react";
import { StoreReducer } from "./StoreReducer";

const initVal = {
  isAdd: false, // store boolean to show modal message
  isError: false, // store boolean to show modal message
  isSuccess: false, // store boolean value to show success msg
  isArchive: false, // store boolean value to show archive modal
  isRestore: false, // store boolean value to show restore modal
  isDelete: false, // store boolean value to show delete modal
  message: false, // store boolean value to show message modal
};

const StoreContext = React.createContext();

const StoreProvider = (props) => {
  const [store, dispatch] = React.useReducer(StoreReducer, initVal);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
