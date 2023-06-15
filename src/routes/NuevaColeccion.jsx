import React, { useState }from "react";
import '../assets/css/Styles.css';
import { Link } from "react-router-dom";

import infoColecciones from '../files/infoColecciones.js'


const NuevaColeccion = () => {
    const [colecciones, setColecciones] = useState(infoColecciones);
    const [nextId, setNextId] = useState(1);

    const [titulo, setTitulo] = useState('');
    const [etiqueta, setEtiqueta] = useState('');
    const [url, setUrl] = useState('');

    const handleOnClick = (event) => {
        const nuevaColeccion = {
            id: nextId,
            titulo: titulo,
            etiqueta: etiqueta,
            url: url,
        }
        setColecciones([...colecciones, nuevaColeccion]);
        infoColecciones.push(nuevaColeccion);
        setNextId(nextId + 1);
    }
    return (
        <>
            <div className="header" style={{display:'flex', fontFamily:'HelveticaNeueCyr'}}>
                <Link to="/Colecciones"><button className="btn-header">Colecciones</button></Link>
            </div>
            <div className="main">
            <h2 style={{marginRight:'5%'}}>Nueva Colección</h2>
                <div style={styles.container}>

                    <input value={titulo} 
                    type="text" 
                    placeholder="Título" 
                    className="input-nuevo" 
                    onChange={(event) => setTitulo(event.target.value)}
                    />
                    
                    <input 
                    value={etiqueta}
                    type="text" 
                    placeholder="Etiqueta" 
                    className="input-nuevo" 
                    onChange={(event) => setEtiqueta(event.target.value)}
                    />

                    <input 
                    value={url}
                    type="text" 
                    placeholder="Url de Imagen" 
                    className="input-nuevo" 
                    onChange={(event) => setUrl(event.target.value)}
                    />

                    <button onClick={handleOnClick} className="btn-nuevo" style={{marginLeft:'2%'}}>Guardar</button>
                </div>
            </div>
        </>
    )
}

const styles = {
    container: {
        width: '70%',
        backgroundColor: '#fff',
        TextAlign: 'center',
        position: 'absolute',
        justifyContent: 'center',
        display: 'flexbox',
        flexDirection: 'column',
        padding: '5%',
        borderRadius: '10px',
    },
}

export default NuevaColeccion;