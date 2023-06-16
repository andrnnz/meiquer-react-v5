import React, {useState}from "react";
import '../assets/css/Styles.css';
import { Link } from "react-router-dom";

import Uploader from "../components/Uploader";
import infoLinks from "../files/infoLinks";


const NuevoContenido = () => {
    const [referencias, setReferencias] = useState(infoLinks);

    const [url, setUrl] = useState('');
    const [titulo, setTitulo] = useState('');
    const [etiqueta, setEtiqueta] = useState('');

    const handleOnClick = (event) => {
        const nuevoCont = {
            titulo: titulo,
            etiqueta: etiqueta,
            url: url,
        }
        setReferencias([...referencias, nuevoCont]);
        infoLinks.push(nuevoCont);
    }
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
                    value={titulo}
                    type="text" 
                    placeholder="Título" 
                    className="input-contenido" 
                    onChange={(event) => setTitulo(event.target.value)}
                    />

                    <input
                    value={etiqueta}
                    type="text" 
                    placeholder="Etiqueta" 
                    className="input-contenido" 
                    onChange={(event) => setEtiqueta(event.target.value)}
                    />

                    <input
                    value={url}
                    type="text" 
                    placeholder="Enlace" 
                    className="input-contenido"
                    onChange={(event) => setUrl(event.target.value)} 
                    />
                    <hr/>
                    <div style={{marginTop:'5%', display: 'flexbox'}}>
                        <Uploader style={{width: '40%'}}/>
                        <button onClick={handleOnClick} className="inputFile" style={{marginLeft:'25%',marginTop:'2%', width:'50%'}}>Guardar</button>   
                    </div>
                </div>         
                <div style={{minHeight: '200px', marginTop:'10%'}}></div>
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