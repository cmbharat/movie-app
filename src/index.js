import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
// import { createSlice, configureStore } from "@reduxjs/toolkit";
import { legacy_createStore, applyMiddleware } from "redux";
import "./index.css";
import App from "./components/App";
import x from "./reducers";
import thunk from "redux-thunk";

//function logger(obj,next,action)
//logger(obj)(next)(action)
// const logger = function ({ dispatch, getState } ) {
//   return function (next) {
//     return function (action) {
//       console.log("Action_Type = ", action.type);
//       next(action);
//     };
//   };
// };

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action !== "function")
      console.log("Action_Type = ", action.type);
    next(action);
  };

// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     // console.log("Action_Type = ", action.type);
//     if (typeof action === "function") {
//       action(dispatch);
//       return;
//     }
//     next(action);
//   };
const store = legacy_createStore(x, applyMiddleware(logger, thunk));

export const StoreContext = createContext();

class Provider extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

// console.log("store", store);

// console.log("before state", store.getState());

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "superman" }],
// });

// console.log("after state", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
