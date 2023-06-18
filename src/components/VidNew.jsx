import React from "react";

import '../assets/css/Colecciones.css';

const VidNew = (props) => {
    return (
        <div className="vidDiv">
            <h2>{props.titulo}</h2>
            <div className="vidCont">
                <iframe 
                    className="vid"
                    src={props.url} 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </div>
            <h3 style={{color: '#446276'}}>{props.etiqueta}</h3>
            <p>{props.descripcion}</p>
            <button className="btn-header" style={{width: '80%', marginTop:'2%'}}>Agregar</button>
        </div>
        
    );
}

export default VidNew;