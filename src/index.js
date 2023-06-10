import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import {BrowserRouter as Router}  from "react-router-dom";


import Roots from './routes/Roots'
import ErrorPage from "./error-page";


import Home from "./routes/Home";
import Contenido from "./routes/Contenido";
import Colecciones from "./routes/Colecciones";
import Actividades from "./routes/Actividades";
import Links from "./routes/Links";
import Videos from "./routes/Videos";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Roots />}>
          <Route index element={<Home/>}/>
          <Route path="/contenido" element={<Contenido/>}/>
          <Route path="/colecciones" element={<Colecciones/>}/>
          <Route path="/actividades" element={<Actividades/>}/>
          <Route path="/links" element={<Links/>}/>
          <Route path="/videos" element={<Videos/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
