import * as React from "react";
import * as ReactDOM from "react-dom/client";

import Rutas from "./Rutas";
import Login from "./Login";

var logged = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {logged === true ? <Rutas/> : <Login/>}
  </React.StrictMode>
);
