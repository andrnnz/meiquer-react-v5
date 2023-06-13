import React from "react";
import '../assets/css/Styles.css';
import { Link } from "react-router-dom";


import UploaderButton from "../features/Uploader";



const NuevoContenido = () => {
    return (
        <>
            <div className="header">
                <Link to="/actividades"><button className="btn-header">Actividades</button></Link>
                <Link to="/Links"><button className="btn-header">Links</button></Link>
                <Link to="/Videos"><button className="btn-header">Videos</button></Link>
            </div>
            <div className="main">
                <p>Subir Contenido</p>
                <UploaderButton/>

            </div>
        </>
    )
}

export default NuevoContenido;