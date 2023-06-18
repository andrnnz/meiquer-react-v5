import React from "react";

import '../assets/css/Colecciones.css';
import { Link } from "react-router-dom";

const VideoChiquito = (props) => {
    return (
        <div className="refContChiquito" style={{padding: '5%'}}>
            <Link to={props.url} ><button className="btn-header">{props.titulo}</button></Link>
        </div>
        
    );
}

export default VideoChiquito;