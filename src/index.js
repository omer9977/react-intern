import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { configureStore } from './store/configureStore';
import "react-toastify/dist/ReactToastify.min.css"

ReactDOM.render(
  <><link
  async
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css" />
  <Provider store={configureStore()}>
  <BrowserRouter>
    <App />
  </BrowserRouter></Provider></>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
