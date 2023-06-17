import React from "react";
import {Link} from 'react-router-dom';

import '../assets/css/Colecciones.css';

const ProfileCard = (props) => {
    return (
        <div style={cardStyles.container}>
            <img src={props.img} alt="sample" style={cardStyles.pp}/>
            <h1>{props.name}</h1>
            <p>{props.email}</p>
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