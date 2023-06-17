import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/Contenido.css'

const ActividadesChiquito = (props) => {
    return (
        <div className="actChiquito" style={{backgroundImage: `url(${props.img})`}}>
            <div className="infoActChiquito">
                <Link to={`/actividades/${props.id}`} style={{textDecoration: 'none'}}>
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

export default ActividadesChiquito;