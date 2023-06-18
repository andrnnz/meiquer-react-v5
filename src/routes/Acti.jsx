import React, {useState} from "react"; 
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import '../assets/css/Styles.css';
import '../assets/css/Colecciones.css';

import actividades from '../files/infoActividades.json';


function Acti(props) {
  const { actId } = useParams();

    return (
      <>
        <div className="header">
        <Link to=".." relative="path"><button className="btn-header">Regresar</button></Link>      
        <h1 className="h1Contenido" style={{fontFamily: 'HelveticaNeue'}}>{props.titulo}</h1>
      </div>
      <div className='main' style={{display:'flex'}}>
        <div className="actiCont">
          <div className="actiCont" style={{backgroundColor: 'white'}}>
            <h1>{actId}</h1>
            <h2>{props.descripción}</h2>
            
          </div>
        </div>
      <div style={{height:'300px'}}></div>
      </div>
      </>
    );
  }
export default Acti;