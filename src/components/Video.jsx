import React from "react";

import '../assets/css/Colecciones.css';

const Video = (props) => {
    return (
        <div className="vidDiv" style={{backgroundImage: `url(${props.img})`}}>
            <h2>{props.title}</h2>
            <iframe
                width="100%"
                height="100%"
                src={props.url}
                title="Youtube Player"
                frameborder="0"
                allowFullScreen
            />
        </div>
        
    );
}

export default Video;