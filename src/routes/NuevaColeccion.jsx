import React from "react";
import '../assets/css/Styles.css';
import { Link } from "react-router-dom";


const NuevaColeccion = () => {
    return (
        <>
            <div className="header" style={{display:'flex', fontFamily:'HelveticaNeueCyr'}}>
                <Link to="/Colecciones"><button className="btn-header">Colecciones</button></Link>
            </div>
            <div className="main">
            <h2 style={{marginRight:'5%'}}>Nueva Colección</h2>
                <div style={{width: '90%', textAlign: 'left',}}>
                    <input type="text" placeholder="Titulo" className="input-nuevo" />
                    <input type="text" placeholder="Etiqueta" className="input-nuevo" />
                    <input type="text" placeholder="Url de Imagen" className="input-nuevo" />
                    <button className="btn-nuevo" style={{marginLeft:'2%'}}>Guardar</button>
                </div>
            
            </div>
        </>
    )
}

export default NuevaColeccion;