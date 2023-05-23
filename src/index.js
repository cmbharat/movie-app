import React from "react";
import ReactDOM from "react-dom/client";
// import { createSlice, configureStore } from "@reduxjs/toolkit";
import { legacy_createStore } from "redux";
import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";

const store = legacy_createStore(rootReducer);

console.log("store", store);

// console.log("before state", store.getState());

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "superman" }],
// });

// console.log("after state", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
