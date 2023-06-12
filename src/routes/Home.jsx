import React from "react";
import '../assets/Home.css';
import sample from '../assets/sample.png';
import space from '../assets/space.jpg';
import Images from '../components/Images'


const Home = () => {
    return (
        <>
            <div className="home">
                <div className="homeContent">
                    <h1 className="homeTitle">Bienvenido a la página de inicio</h1>
                    <Images image1={sample} image2={space}/>
                </div>
            </div>
        </>
    )
}
export default Home;