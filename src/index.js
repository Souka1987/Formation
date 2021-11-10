import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Import du style
import "./assets/scss/index.scss";

// Redux
// import { createStore } from "redux";
import { Provider } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'

import reportWebVitals from './tests/reportWebVitals';

import { store } from "./store";
// Actions du STORE
// import { getImages } from './store/actions/ImagesActions'
import { getPosts } from './store/actions/PostActions'

// Dès que le store est monté on envoie les actions
store.dispatch(getPosts());
// store.dispatch(getImages())

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
