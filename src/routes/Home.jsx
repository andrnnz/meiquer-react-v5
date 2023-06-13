import React from "react";
import '../assets/css/Home.css';

import sample from '../assets/sample.png';
import space from '../assets/space.jpg';
import Images from '../components/Images'

import ProfileCard from "../components/ProfileCard";
import FunFact from "../api/FunFact";

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
                <div style={{display: '-ms-flexbox'}}>
                    <div className="homeFun">
                        <h2>Random Fact:</h2>
                        <FunFact
                            url="https://uselessfacts.jsph.pl/random.json?language=en"
                        />
                    </div>
                    <div className="homeFun">
                        <h1>idk</h1>
                    </div>
                </div>
                <div className="homePerfil">
                    {infoPerfil.map(createPerfil)}
                </div>
            </div>
        </>
    )
}

export default Home;