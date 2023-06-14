import React from "react";

import '../assets/css/Colecciones.css';

import RandomImg from "../api/RandomImg";

const Video = (props) => {
    return (
        <div className="vidDiv" style={{backgroundImage: `url(${props.img})`}}>
            <RandomImg url="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"/>
        </div>
        
    );
}

export default Video;