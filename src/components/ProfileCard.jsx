import React from "react";
import {Link} from 'react-router-dom';
import sample from '../assets/sample.png';

import '../assets/css/Colecciones.css';

const ProfileCard = (perfil) => {
    return (
        <div style={cardStyles.container}>
            <img src={"https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg"} alt="sample" style={cardStyles.pp}/>
            <h1>Juan</h1>
            <Link to={"/colecciones"}>
                <button className="btn-coleccion">Perfil</button>
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