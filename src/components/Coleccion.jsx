import React from "react";
import {Link} from 'react-router-dom';

import '../assets/css/Colecciones.css';

const Coleccion = (props) => {
    return (
        <div className="coleDiv" style={{backgroundImage: `url(${props.img})`}}>
            <Link to={props.coleLink}>
                <button className="btn-coleccion">{props.title}</button>
                <button className="btn-coleccionDelete">Eliminar</button>
            </Link>
        </div>
        
    );
}

export default Coleccion;