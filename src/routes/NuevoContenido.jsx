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
                    <Uploader />
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
        justifyContent: 'center',
        display: 'flexbox',
        flexDirection: 'column',
        padding: '5%',
        borderRadius: '10px',
    },
}

export default NuevoContenido;