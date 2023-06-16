import React from "react";
import { Link } from "react-router-dom";

import '../assets/css/Colecciones.css';

const Actividad = (props) => {
    return (
        <div className="actDiv" style={{backgroundImage: `url(${props.img})`}}>
            <div className="infoAct" style={{display:'flex'}}>
                <div style={{width: '40%'}}>
                    <h3>{props.titulo}</h3>
                    <p>{props.descripcion}</p>
                    <p>{props.deadline}</p>
                    <p>{props.etiqueta}</p>
                </div>
                <div style={{width: '40%'}}>
                    <Link to={props.path}>
                    <button className="btn-header" style={{width: '80%', marginTop:'20%'}}>Ver Actividad</button>
                    </Link>
                </div>
            </div>
        </div>
        
    );
}

export default Actividad;