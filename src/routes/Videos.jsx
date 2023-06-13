import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

import '../assets/css/Styles.css';
import '../assets/css/Colecciones.css';

const Videos = () => {
    return (
        <>
            <div className="header">
                <Link to="/actividades"><button className="btn-header">Actividades</button></Link>
                <Link to="/Links"><button className="btn-header">Links</button></Link>
                <Link to="/Videos"><button className="btn-header">Videos</button></Link>
            </div>
            <div className="mainCole">
                <h1>Videos</h1>
                <Link to="/NuevoContenido"><button className="btn-header">Subir Contenido</button></Link>
                <Grid container spacing={2} columns={2} style={{width: '100%'}} className="colecciones">
                </Grid>
                <div style={{height: '200px'}}></div>
            </div>
        </>
    )
}
export default Videos;