import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

import '../assets/css/Styles.css';
import '../assets/css/Colecciones.css';

import infoVideos from "../files/infoVideos";

import VidNew from "../components/VidNew";

const AddVideos = () => {

    const createVideo = (video) =>{
        return(
            <VidNew
                key={video.id}
                url={video.url}
                titulo={video.titulo}
                etiqueta={video.etiqueta}
                descripcion={video.descripcion}
            />
        );
    }
    return (
        <>
            <div className="header">
                <Link to=".." relative="path"><button className="btn-header">Regresar</button></Link>      
            </div>
            <div className="mainCole">
                <h1>Videos</h1>
                <Grid container spacing={2} columns={2} style={{width: '100%', textAlign:'center',}} className="colecciones">
                    {infoVideos.map(createVideo)}
                </Grid>
                <div style={{height: '200px'}}></div>
            </div>
        </>
    )
}
export default AddVideos;