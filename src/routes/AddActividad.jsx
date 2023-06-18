import React from "react";

import '../assets/css/Styles.css';
import '../assets/css/Colecciones.css';

import { Link } from "react-router-dom";
import { Grid } from "@mui/material";


import ActNew from "../components/ActNew";

import infoActividades from "../files/infoActividades";

const AddActividad = () => {

    const createActividad = (actividad) =>{
        return(
            <ActNew
                key={actividad.id}
                img={actividad.img}
                titulo={actividad.titulo}
                descripcion={actividad.descripcion}
                deadline={actividad.deadline}
                etiqueta={actividad.etiqueta}
                id={actividad.id}
            />
        );
    }
    return (
        <>
            <div className="header">
                <Link to=".." relative="path"><button className="btn-header">Regresar</button></Link>      
            </div>
            <div className="mainCole">
                <h1>Actividades</h1>
                <Grid container spacing={2} columns={1} style={{width: '100%', textAlign:'center', display:'-webkit-inline-flex'}} className="colecciones">
                    {infoActividades.map(createActividad)}
                </Grid>
                <div style={{height: '300px'}}></div>
            </div>
        </>
    )
}
export default AddActividad;