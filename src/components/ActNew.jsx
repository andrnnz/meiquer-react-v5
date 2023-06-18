import React from "react";
import { Link } from "react-router-dom";

import '../assets/css/Colecciones.css';

const ActNew = (props) => {
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
                    <Link to={`/actividades/${props.id}`}>
                    <button className="btn-header" style={{width: '80%', marginTop:'5%'}}>Ver Actividad</button>
                    </Link>
                    <button className="btn-header" style={{width: '80%', marginTop:'2%'}}>Agregar</button>
                </div>
            </div>
        </div>
        
    );
}

export default ActNew;