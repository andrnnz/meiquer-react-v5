import React from "react";
import '../assets/css/Colecciones.css';
import { Link } from "react-router-dom";

const Links = () => {
    return (
        <>
            <div className="header">
                <Link to="/actividades"><button className="btn-header">Actividades</button></Link>
                <Link to="/Links"><button className="btn-header">Links</button></Link>
                <Link to="/Videos"><button className="btn-header">Videos</button></Link>
            </div>
            <div className="main">
                <Link to="/NuevoContenido"><button className="btn-header">Agregar Contenido</button></Link>
            </div>
        </>
    )
}

export default Links;