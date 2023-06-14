import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

import '../assets/css/Styles.css';
import '../assets/css/Colecciones.css';

import infoVideos from "../files/infoVideos";

import Video from "../components/Video";

const Videos = () => {

    const createVideo = (video) =>{
        return(
            <Video
                key={video.id}
                url={video.url}
                title={video.title}
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
                <h1>Videos</h1>
                <Grid container spacing={2} columns={2} style={{marginBottom: '5%', marginTop: '2%'}}>
                    <Link to="/NuevoContenido"><button className="btn-header">Nuevo Video</button></Link>
                </Grid>
                <Grid container spacing={2} columns={1} style={{width: '100%', textAlign:'center',}} className="colecciones">
                    {infoVideos.map(createVideo)}
                </Grid>
                <div style={{height: '200px'}}></div>
            </div>
        </>
    )
}
export default Videos;