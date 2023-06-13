import React from "react";
import {Link} from 'react-router-dom';
import sample from '../assets/sample.png';

import '../assets/css/Colecciones.css';

const ProfileCard = (props) => {
    return (
        <div style={cardStyles.container}>
            <img src={props.url} alt="sample" style={cardStyles.pp}/>
            <h1>{props.name}</h1>
            <p>{props.email}</p>
            <Link to={props.path}>
                <button style={{marginTop: '1%'}} className="btn-coleccion">Perfil</button>
            </Link>
        </div>

    );
}

const cardStyles = {
    container: {
        width: '100%',
        backgroundColor: '#fff',
        TextAlign: 'center',
        justifyContent: 'center',
        display: 'flexbox',
        flexDirection: 'column',
        padding: '10px',
    },
    pp: {
        width: '50%',
        height: '50%',
        borderRadius: '50%',
        margin: 'auto',
    },
    };

export default ProfileCard;