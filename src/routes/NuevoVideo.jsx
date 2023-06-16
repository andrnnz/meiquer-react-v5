import React, { useState }from "react";
import '../assets/css/Styles.css';
import { Link } from "react-router-dom";

import infoVideos from "../files/infoVideos";

const NuevoVideo = () => {
    const [videos, setVideos] = useState(infoVideos);
    const [nextId, setNextId] = useState(1);
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [etiqueta, setEtiqueta] = useState('');
    const [link, setLink] = useState('');

    const handleOnClick = (event) => {
        const nuevoVideo = {
            id: nextId,
            titulo: titulo,
            etiqueta: etiqueta,
            link: link,
            descripcion: descripcion,
        }
        setVideos([...videos, nuevoVideo]);
        infoVideos.push(nuevoVideo);
        setNextId(nextId + 1);
    }

    return (
        <>
            <div className="header" style={{display:'flex', fontFamily:'HelveticaNeueCyr'}}>
                <Link to="/Videos"><button className="btn-header">Videos</button></Link>
            </div>
            <div className="main">
            <h2 style={{marginRight:'5%'}}>Nuevo Video</h2>
                <div style={{width: '90%', textAlign: 'left',}}>


                    <input
                    value={titulo}
                    type="text" 
                    placeholder="Titulo" 
                    className="input-nuevo"
                    onChange={(event) => setTitulo(event.target.value)}
                    />

                    <input
                    value={descripcion} 
                    type="text" 
                    placeholder="Descripción" 
                    className="input-nuevo" 
                    onChange={(event) => setDescripcion(event.target.value)}
                    />

                    <input 
                    value={etiqueta}
                    type="text" 
                    placeholder="Etiqueta" 
                    className="input-nuevo"
                    onChange={(event) => setEtiqueta(event.target.value)}
                    />

                    <input
                    value={link}
                    type="text" 
                    placeholder="Link" 
                    className="input-nuevo"
                    onChange={(event) => setLink(event.target.value)}
                    />

                    <button
                    onClick={handleOnClick} 
                    className="btn-nuevo" 
                    style={{marginLeft:'2%'}}>Guardar</button>
                </div>
            
            </div>
        </>
    )
}

export default NuevoVideo;