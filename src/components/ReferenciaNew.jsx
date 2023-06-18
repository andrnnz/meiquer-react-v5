import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/Contenido.css'

const ReferenciaNew = (props) => {
    return (
        <>
            <div className="refCont">
                <h1 className="h1Contenido">{props.titulo}</h1>
                <p className="pContenido">{props.etiqueta}</p>
                <Link to={props.url}><button className="btn-header">Ver</button></Link>
                <button className="btn-header" style={{margin:'5%'}}>Agregar</button>
            </div>
        </>
    )
}

export default ReferenciaNew;