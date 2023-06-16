import React from "react";
import '../assets/css/Styles.css';
import { Link } from "react-router-dom";

import Uploader from "../components/Uploader";


const NuevoContenido = () => {
    return (
        <>
            <div className="header">
                <Link to="/actividades"><button className="btn-header">Actividades</button></Link>
                <Link to="/Links"><button className="btn-header">Links</button></Link>
                <Link to="/Videos"><button className="btn-header">Videos</button></Link>
            </div>
            <div className="main">
                <div style={styles.container}>
                <h1 className="h1Contenido" style={{marginBottom:'5%'}}> Agregar Contenido </h1>
                    <input
                    type="text" 
                    placeholder="Título" 
                    className="input-contenido" 
                    />
                    <input
                    type="text" 
                    placeholder="Etiqueta" 
                    className="input-contenido" 
                    />
                    <input
                    type="text" 
                    placeholder="Enlace" 
                    className="input-contenido" 
                    />
                    <div style={{marginTop:'5%'}}>
                        <Uploader/>
                    </div>
                </div>             
            </div>
        </>
    )
}

const styles = {
    container: {
        width: '70%',
        backgroundColor: '#fff',
        padding: '7%',
        borderRadius: '10px',
    },
}

export default NuevoContenido;