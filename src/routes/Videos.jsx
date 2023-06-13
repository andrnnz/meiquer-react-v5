import React from "react";
import { Link } from "react-router-dom";

import '../assets/css/Styles.css';

const Videos = () => {
    return (
        <>
            <div className="header">
                <Link to="/actividades"><button className="btn-header">Actividades</button></Link>
                <Link to="/Links"><button className="btn-header">Links</button></Link>
                <Link to="/Videos"><button className="btn-header">Videos</button></Link>
            </div>
            <div className="main">
                <p>videos</p>
                <Link to="/NuevoContenido"><button className="btn-header">Subir Contenido</button></Link>
            </div>
        </>
    )
}
export default Videos;