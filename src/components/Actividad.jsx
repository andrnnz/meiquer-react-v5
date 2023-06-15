import React from "react";

import '../assets/css/Colecciones.css';

const Actividad = (props) => {
    return (
        <div className="actDiv" style={{backgroundImage: `url(${props.img})`}}>
            <div className="infoAct">
                <div>
                    <h3>{props.titulo}</h3>
                    <p>{props.descripcion}</p>
                    <p>{props.deadline}</p>
                    <p>{props.etiqueta}</p>
                </div>
            </div>
        </div>
        
    );
}

export default Actividad;