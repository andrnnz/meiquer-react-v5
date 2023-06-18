import React from "react";
import '../assets/css/Colecciones.css';
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

import ReferenciaNew from "../components/ReferenciaNew";
import infoLinks from "../files/infoLinks";

const AddLink = () => {

    const createReferencia = (referencia) =>{
        return(
            <ReferenciaNew
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
                <Link to=".." relative="path"><button className="btn-header">Regresar</button></Link>    
            </div>
            <div className="main" style={{overflowY:'scroll'}}>
                <h1 style={{marginTop:'5%'}}> Links/Referencias </h1>
                <Grid container spacing={2} columns={2} style={{marginBottom: '5%', marginTop: '2%'}}>
                    {infoLinks.map(createReferencia)}
                </Grid>
                <div style={{minHeight: '300px', marginTop:'20%'}}> </div>
            </div>
        </>
    )
}

export default AddLink;