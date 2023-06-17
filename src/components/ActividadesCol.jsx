import React from "react";
import '../assets/css/Contenido.css'
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

import ActividadesChiquito from "./ActividadesChiquito";
import infoActividades from "../files/infoActividades";

const ActividadesCol = () => {
    const createActividad = (actividad) =>{
        return(
            <ActividadesChiquito
                key={actividad.id}
                img={actividad.img}
                titulo={actividad.titulo}
                deadline={actividad.deadline}
                etiqueta={actividad.etiqueta}
                id={actividad.id}
            />
        );
    }

    return (
        <div className="cardChiquito">
            <Grid container spacing={2} columns={3} style={{width: '100%', textAlign:'center', display:'-webkit-inline-flex'}} className="colecciones">
                    {infoActividades.map(createActividad)}
            </Grid>
        </div>
    );
}

export default ActividadesCol;