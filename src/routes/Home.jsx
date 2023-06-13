import React from "react";
import '../assets/css/Home.css';

import sample from '../assets/sample.png';
import space from '../assets/space.jpg';
import Images from '../components/Images'

import ProfileCard from "../components/ProfileCard";

import infoPerfil from "../files/infoPerfil";


const Home = () => {

    const createPerfil = (perf) => {
        return (
            <ProfileCard
                key={perf.id}
                name={perf.name}
                email={perf.email}
                url={perf.url}
                path={perf.path}
            />
        );
    }

    return (
        <>
            <div className="home">
                <h1>Inicio</h1>
                <div style={cardStyles.container}>
                    <img className="homeImg" src={space} alt="space"/>
                </div>
                <div className="homePerfil">
                    {infoPerfil.map(createPerfil)}
                </div>
            </div>
        </>
    )
}


const cardStyles = {
    container: {
        width: '20%',
        backgroundColor: '#fff',
    },
    };

export default Home;