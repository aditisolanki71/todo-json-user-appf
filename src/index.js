// pkg.json
// "start": "react-scripts start",
// "json-server": "json-server --watch db.json --port 3003",
//npm strat
//npm run json-server

//pkg.json
// "start": "react-scripts start",
// "json-server": "json-server --watch db.json --port 3003",
// "start:dev": "concurrently \"npm start\" \"npm run json-server\"",
//npm run start:dev

//link
//https://www.youtube.com/watch?v=eJyZ7k6lWfE&t=5280s
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
