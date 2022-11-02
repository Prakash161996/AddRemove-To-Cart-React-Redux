import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// 
//import { configureStore } from "@reduxjs/toolkit"
import {Provider}  from  "react-redux";
import {createStore} from "redux"
import rootReducer from "./services/Reducers/RootReducer";
const store = createStore(rootReducer);

// console.warn("store data",store)
// 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
    <App />
    </Provider>
  
);

