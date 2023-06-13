import React from "react";
import {Link} from 'react-router-dom';

import '../assets/css/Colecciones.css';

const Actividad = (props) => {
    return (
        <div className="actDiv" style={{backgroundImage: `url(${props.img})`}}>
            <div className="infoAct">
                <h1>{props.titulo}</h1>
                <p>{props.descripcion}</p>
                <p>{props.deadline}</p>
            </div>
        </div>
        
    );
}

export default Actividad;