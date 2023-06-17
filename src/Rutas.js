import * as React from "react";
import { Routes, Route } from "react-router-dom";
import {BrowserRouter as Router}  from "react-router-dom";


import Roots from './routes/Roots'
import ErrorPage from "./error-page";


import Home from "./routes/Home";
import Contenido from "./routes/Contenido";
import Colecciones from "./routes/Colecciones";
import Actividades from "./routes/Actividades";
import Links from "./routes/Links";
import Videos from "./routes/Videos";

import NuevaColeccion from "./routes/NuevaColeccion";
import NuevoContenido from "./routes/NuevoContenido";
import NuevoVideo from "./routes/NuevoVideo";
import NuevaActividad from "./routes/NuevaActividad";

import Cole from "./routes/Cole";
import Acti from "./routes/Acti";

const Rutas = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Roots />}>
                    <Route index element={<Home/>}/>
                    <Route path="/contenido" element={<Contenido/>}/>
                    <Route path="/actividades" element={<Actividades/>}/>
                    <Route path="/links" element={<Links/>}/>
                    <Route path="/videos" element={<Videos/>}/>
                    <Route path="/NuevoContenido" element={<NuevoContenido/>}/>
                    <Route path="/NuevoVideo" element={<NuevoVideo/>}/>


                    <Route path="/colecciones" element={<Colecciones/>}/>
                    <Route path="/NuevaColeccion" element={<NuevaColeccion/>}/>
                    <Route path="colecciones/:coleccionId" element={<Cole/>}/>

                    <Route path="/NuevaActividad" element={<NuevaActividad/>}/>
                    <Route path="actividades/:actId" element={<Acti/>}/>
                    
                    <Route path="*" element={<ErrorPage />} />
                    </Route>
                </Routes>
            </Router>
        </>
    ); 
}

export default Rutas;