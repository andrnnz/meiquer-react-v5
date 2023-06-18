import React, {useState} from "react"; 
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import '../assets/css/Styles.css';
import '../assets/css/Colecciones.css';

import ActividadesCol from "../components/ActividadesCol";
import LinksCol from "../components/LinksCol";
import VideosCol from "../components/VideosCol";



function Cole() {
    const { coleccionId } = useParams();

  
    return (
      <>
      <div className="header">
        <Link to="/colecciones"><button className="btn-header">Colecciones</button></Link>   
        <h1 className="h1Contenido" style={{fontFamily: 'HelveticaNeue'}}>titulo</h1>
      </div>
      <div className='main'>
        <div style={{display:'flex', overflowX:'scroll', width:'100%'}}>
        <div className="coleCont">
          <h4 className="h1Contenido">Actividades</h4>
          <Link to={`/colecciones/${coleccionId}/AddActividad`}><h4 className="h1Contenido">Nueva Actividad</h4></Link>
          <ActividadesCol />
        </div>
        <div style={{width:'40%', marginLeft:'2%'}}>
          <div className="coleCont2">
            <h4 className="h1Contenido">Links</h4>
            <Link to={`/colecciones/${coleccionId}/AddLink`}><h4 className="h1Contenido">Nuevo Link</h4></Link>
            <LinksCol />
          </div>
          <div className="coleCont2">
            <h4 className="h1Contenido">Videos</h4>
            <Link to={`/colecciones/${coleccionId}/AddVideos`}><h4 className="h1Contenido">Nuevo Video</h4></Link>
            <VideosCol />
          </div>
        </div>
        </div>
      <div style={{height:'300px'}}></div>
      </div>
      </>
    )
  }
export default Cole;