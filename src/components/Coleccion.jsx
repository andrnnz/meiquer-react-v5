import React from "react";

import '../assets/css/Colecciones.css';

const Coleccion = (props) => {
    return (
        <div className="coleDiv" style={{
            backgroundImage: `url(${props.img})`
          }}>
            
        </div>
    );
}

export default Coleccion;