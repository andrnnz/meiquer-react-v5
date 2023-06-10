import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import {BrowserRouter as Router}  from "react-router-dom";


import Roots from './routes/Roots'
import ErrorPage from "./error-page";
import Contenido from "./routes/Contenido";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Roots />}>
          <Route index element={<Contenido/>}/>
        </Route>/
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
