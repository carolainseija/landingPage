import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Welcom from './pages/welcome/welcom';
import "bootstrap/dist/css/bootstrap.min.css";
import Server from './pages/servers/server';
//import Card from './components/Cards/Card';



ReactDOM.render(
  <React.StrictMode>
    <App />
  <Welcom/>
  <Server/>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
