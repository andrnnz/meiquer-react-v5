import React from "react";

import '../assets/css/Styles.css';
import '../assets/css/Colecciones.css';

import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

import Actividad from "../components/Actividad";

import infoActividades from "../files/infoActividades";

const Actividades = () => {

    const createActividad = (actividad) =>{
        return(
            <Actividad
                key={actividad.id}
                img={actividad.img}
                titulo={actividad.titulo}
                descripcion={actividad.descripcion}
                deadline={actividad.deadline}
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
            <div className="mainCole">
                <h1>Actividades</h1>
                <Grid container spacing={2} columns={2} style={{marginBottom: '5%', marginTop: '2%'}}>
                <Link to="/NuevoContenido"><button className="btn-header">Crear Actividad</button></Link>
                </Grid>
                <Grid container spacing={2} columns={2} style={{width: '100%', textAlign:'center'}} className="colecciones">
                    {infoActividades.map(createActividad)}
                </Grid>
                <div style={{height: '200px'}}></div>
            </div>
        </>
    )
}
export default Actividades;