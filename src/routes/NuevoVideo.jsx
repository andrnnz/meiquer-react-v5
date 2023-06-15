import React from "react";
import '../assets/css/Styles.css';
import { Link } from "react-router-dom";


const NuevoVideo = () => {
    return (
        <>
            <div className="header" style={{display:'flex', fontFamily:'HelveticaNeueCyr'}}>
                <Link to="/Videos"><button className="btn-header">Videos</button></Link>
            </div>
            <div className="main">
            <h2 style={{marginRight:'5%'}}>Nuevo Video</h2>
                <div style={{width: '90%', textAlign: 'left',}}>
                    <input type="text" placeholder="Titulo" className="input-nuevo" />
                    <input type="text" placeholder="Descripción" className="input-nuevo" />
                    <input type="text" placeholder="Etiqueta" className="input-nuevo" />
                    <input type="text" placeholder="Link" className="input-nuevo" />
                    <button className="btn-nuevo" style={{marginLeft:'2%'}}>Guardar</button>
                </div>
            
            </div>
        </>
    )
}

export default NuevoVideo;