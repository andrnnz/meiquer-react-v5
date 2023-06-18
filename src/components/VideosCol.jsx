import React from "react";
import '../assets/css/Contenido.css'
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

import infoVideos from "../files/infoVideos";
import VideoChiquito from "./VideoChiquito";

const VideosCol = (props) => {
    
    const createVideo = (video) =>{
        return(
            <VideoChiquito
                key={video.id}
                url={video.url}
                titulo={video.titulo}
                etiqueta={video.etiqueta}
                descripcion={video.descripcion}
            />
        );
    }

    return (
        <div className="linksChiquito">
            <Grid container spacing={2} columns={1} style={{width: '100%', textAlign:'center', display:'-webkit-inline-flex'}} className="colecciones">
                    {infoVideos.map(createVideo)}
            </Grid>
        </div>
    );
}

export default VideosCol;