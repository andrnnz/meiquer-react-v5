import React from "react";
import { Link } from 'react-router-dom';

import '../assets/css/Styles.css';
import infoColecciones from '../files/infoColecciones';

import Coleccion from '../components/Coleccion';
import { Grid } from "@mui/material";

const Colecciones = () => {
    const createColeccion = (cole) =>{
        return(
            <Coleccion
                key={cole.id}
                img={cole.img}
                titulo={cole.titulo}
                id={cole.id}
            />
        );
    }

    return (
        <>
            <div className="header">
                <Link to="/NuevaColeccion"><button className="btn-header">Nueva Colección</button></Link>
            </div>
            <div className="mainCole">
                <h1>Colecciones</h1>
                <Grid container spacing={2} columns={2} style={{width: '100%'}} className="colecciones">
                    {infoColecciones.map(createColeccion)}
                </Grid>
                <div style={{height: '200px'}}></div>
            </div>
        </>
    )
}
export default Colecciones;