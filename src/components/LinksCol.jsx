import React from "react";
import '../assets/css/Contenido.css'
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

import infoLinks from "../files/infoLinks";
import ReferenciaChiquito from "./ReferenciaChiquito";

const LinksCol = (props) => {
    
    const createReferencia = (referencia) =>{
        return(
            <ReferenciaChiquito
                key={referencia.id}
                url={referencia.url}
                titulo={referencia.titulo}
                etiqueta={referencia.etiqueta}
                id={referencia.id}
            />
        );
    }

    return (
        <div className="linksChiquito">
            <Grid container spacing={2} columns={1} style={{width: '100%', textAlign:'center', display:'-webkit-inline-flex'}} className="colecciones">
                    {infoLinks.map(createReferencia)}
            </Grid>
        </div>
    );
}

export default LinksCol;