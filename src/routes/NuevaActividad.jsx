import React, { useState }from "react";
import { Link } from "react-router-dom";

import '../assets/css/Styles.css';
import infoActividades from "../files/infoActividades";

const NuevaActividad = () => {
    const [actividades, setActividades] = useState(infoActividades.infoActividades);
    const [nextId, setNextId] = useState(1);

    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [img, setImg] = useState('');
    const [deadline, setDeadline] = useState('');
    const [etiqueta, setEtiqueta] = useState('');

    const handleOnClick = (event) => {
        const nuevaAct = {
            id: nextId,
            titulo: titulo,
            etiqueta: etiqueta,
            img: img,
            deadline: deadline,
            descripcion: descripcion,
        }
        setActividades([...actividades, nuevaAct]);
        infoActividades.infoActividades.push(nuevaAct);
        setNextId(nextId + 1);
    }
    return (
        <>
            <div className="header" style={{display:'flex', fontFamily:'HelveticaNeueCyr'}}>
                <Link to="/Actividades"><button className="btn-header">Actividades</button></Link>
            </div>
            <div className="main">
            <h2 style={{marginRight:'5%', overflowY: 'scroll'}}>Nueva Actividad</h2>
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
                    value={deadline}
                    type="date"
                    placeholder="Fecha límite"
                    className="input-nuevo"
                    onChange={(event) => setDeadline(event.target.value)}/>

                    <input value={descripcion}
                    type="text"
                    placeholder="Descripción"
                    className="input-nuevo"
                    style={{height:'100px'}}
                    onChange={(event) => setDescripcion(event.target.value)}/>
                    
                    <input 
                    value={img}
                    type="text" 
                    placeholder="Url de Imagen" 
                    className="input-nuevo" 
                    onChange={(event) => setImg(event.target.value)}
                    />
                    <button onClick={handleOnClick} className="btn-nuevo" style={{marginLeft:'2%'}}>Guardar</button>
                </div>
                <div style={{height: '300px'}}></div>
            </div>
        </>
    )
}

const styles = {
    container: {
        width: '80%',
        backgroundColor: '#fff',
        TextAlign: 'center',
        justifyContent: 'center',
        display: 'flexbox',
        flexDirection: 'column',
        padding: '5%',
        borderRadius: '10px',
    },
}

export default NuevaActividad;