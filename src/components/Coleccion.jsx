import React from "react";
import {Link} from 'react-router-dom';

import '../assets/css/Colecciones.css';

const Coleccion = (props) => {
    return (
        <div className="coleDiv" style={{backgroundImage: `url(${props.img})`}}>
            <Link to={props.path} style={{width:'100'}}><button className="btn-coleccion" style={{width:'100'}}>{props.titulo}</button></Link>
            <button className="btn-coleccionDelete" style={{width:'100'}}>Eliminar</button>
        </div>
        
    );
}

export default Coleccion;