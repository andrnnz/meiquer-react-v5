import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/Contenido.css'

const ReferenciaChiquito = (props) => {
    return (
        <>
            <div className="refContChiquito">
                <p>{props.titulo}</p>
                <Link to={props.url} style={{width:'60%'}}><button className="btn-chiquito">Ver</button></Link>
            </div>
        </>
    )
}

export default ReferenciaChiquito;