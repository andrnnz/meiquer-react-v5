import React, {useState} from "react"; 
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import '../assets/css/Styles.css';
import '../assets/css/Colecciones.css';

import ActividadesCol from "../components/ActividadesCol";


function Cole() {
    const { coleccionId } = useParams();

  
    return (
      <>
      <div className="header">
          <Link to="/colecciones"><button className="btn-header">Colecciones</button></Link>   
          <h1 className="h1Contenido" style={{fontFamily: 'HelveticaNeue'}}>Conectando Hacia las Estrellas</h1>
        </div>
        <div className='main' style={{display:'flex'}}>
          <h1>{coleccionId}</h1>
          <div className="coleCont">
            <h4 className="h1Contenido">Actividades</h4>
            <Link to={'/'}><h4 className="h1Contenido">Nueva Actividad</h4></Link>
            <ActividadesCol/>
            </div>
            <div style={{width:'40%', marginLeft:'2%'}}>
            <div className="coleCont2">
              <h4 className="h1Contenido">Links</h4>
              <Link to={'/'}><h4 className="h1Contenido">Nuevo Link</h4></Link>
            </div>
            <div className="coleCont2">
              <h4 className="h1Contenido">Videos</h4>
              <Link to={'/'}><h4 className="h1Contenido">Nuevo Video</h4></Link>
            </div>
            </div>
            <div style={{height:'300px'}}></div>
        </div>
      </>
    )
  }
export default Cole;