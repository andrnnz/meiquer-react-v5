import React from "react";

import '../assets/css/Colecciones.css';

const Video = (props) => {
    return (
        <div className="vidDiv" style={{backgroundImage: `url(${props.img})`}}>
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
        </div>
        
    );
}

export default Video;