import React from "react";
import '../assets/css/Contenido.css'

const ActividadChica = (props) => {
    return (
        <div className="actChica" style={{backgroundImage: `url(${props.img})`}}>
            <div className="infoActChica">
                <div>
                    <h3>{props.titulo}</h3>
                    <p>{props.deadline}</p>
                    <p>{props.etiqueta}</p>
                </div>
            </div>
        </div>
        
    );
}

export default ActividadChica;