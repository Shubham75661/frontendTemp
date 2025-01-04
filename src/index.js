import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router';
import ApiGetCall from './components/ApiGetCall';
import ApiPostCall from './components/ApiPostCall';
import {Provider} from 'react-redux';
import {store} from './State/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = {store}>
        <Routes>
          <Route path = '/' element = {<App/>}>
            <Route path='/get' element = {<ApiGetCall/>}></Route>
            <Route path='/post' element = {<ApiPostCall/>}></Route> 
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
