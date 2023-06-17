import React from "react";
import {Link} from 'react-router-dom';

import '../assets/css/Colecciones.css';

const Coleccion = (props) => {
    return (
        <div className="coleDiv" style={{backgroundImage: `url(${props.img})`}}>
            <Link to={`/colecciones/${props.id}`} style={{width:'60%'}}><button className="btn-coleccion" style={{width:'100'}}>{props.titulo}</button></Link>
        </div>
        
    );
}

export default Coleccion;