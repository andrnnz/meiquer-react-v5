import React from "react";
import '../assets/css/Contenido.css'
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

import ActividadChica from "./ActividadChica";
import infoActividades from "../files/infoActividades";

const ActividadesCard = () => {
    const createActividad = (actividad) =>{
        return(
            <ActividadChica
                key={actividad.id}
                img={actividad.img}
                titulo={actividad.titulo}
                deadline={actividad.deadline}
                etiqueta={actividad.etiqueta}
            />
        );
    }

    return (
        <div className="card">
            <Link to="/actividades"><h1 className="h1Contenido">Actividades</h1></Link>
            <Grid container spacing={2} columns={3} style={{width: '100%', textAlign:'center', display:'-webkit-inline-flex'}} className="colecciones">
                    {infoActividades.map(createActividad)}
            </Grid>
        </div>
    );
}

export default ActividadesCard;