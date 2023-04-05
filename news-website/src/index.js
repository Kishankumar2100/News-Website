import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import News from "./news";
import Nav from "./nav";
import {BrowserRouter,Switch,Route,Link} from "react-router-dom"
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
  <>
  <Nav />
    <Route exact path="/Apple"><News newsName="iphone" /></Route>
    <Route path="/Tesla"><News newsName="tesla" /></Route>
    <Route path="/Bitcoin"><News newsName="bitcoin" /></Route>
    <Route path="/nasa"><News newsName="nasa" /></Route>
    <Route path="/upsc"><News newsName="upsc" /></Route>
  </>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
