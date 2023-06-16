import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/Contenido.css'

const ActividadChica = (props) => {
    return (
        <div className="actChica" style={{backgroundImage: `url(${props.img})`}}>
            <div className="infoActChica">
                <Link to={props.path} style={{textDecoration: 'none'}}>
                <div>
                    <h3>{props.titulo}</h3>
                    <p>{props.deadline}</p>
                    <p>{props.etiqueta}</p>
                </div>
                </Link>
            </div>
        </div>
        
    );
}

export default ActividadChica;