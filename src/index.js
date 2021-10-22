import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './CSS/index.css';
import Home from './home';
import Login from './Login/login';
import Portfolio from './Portfolio/portfolio'
import Contact from './Contact/contact'
import reportWebVitals from './reportWebVitals';
import useActiveUser from './Custom Hooks/useActiveUser';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/home" exact component={() => <Home />} />
        <Route path="/login" exact component={() => <Login />} />
        <Route path="/portfolio" exact component={() => <Portfolio />} />
        <Route path="/contact" exact component={() => <Contact />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
