import React from "react";
import '../assets/css/Colecciones.css';
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

import Referencia from "../components/Referencia";
import infoLinks from "../files/infoLinks";

const Links = () => {

    const createReferencia = (referencia) =>{
        return(
            <Referencia
                key={referencia.id}
                titulo={referencia.titulo}
                url={referencia.url}
                etiqueta={referencia.etiqueta}
            />
        );
    }

    return (
        <>
            <div className="header">
                <Link to="/actividades"><button className="btn-header">Actividades</button></Link>
                <Link to="/Links"><button className="btn-header">Links</button></Link>
                <Link to="/Videos"><button className="btn-header">Videos</button></Link>
            </div>
            <div className="main">
                <Link to="/NuevoContenido"><button className="btn-header" style={{marginLeft:'12%'}}>Agregar Contenido</button></Link>
                <h1 className="h1Contenido" style={{marginTop:'5%'}}> Links/Referencias </h1>
                <hr/>
                <Grid container spacing={2} columns={2} style={{marginBottom: '5%', marginTop: '2%'}}>
                    {infoLinks.map(createReferencia)}
                </Grid>
            </div>
        </>
    )
}

export default Links;