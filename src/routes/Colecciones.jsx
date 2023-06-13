import React, {useEffect, useState}from "react";
import { Link } from 'react-router-dom';

import { getPosts } from "../api/axios"; //GetPosts necesita ser adecuado a colecciones y a contenido

import '../assets/css/Styles.css';
import infoColecciones from '../files/infoColecciones';
import space from '../assets/space.jpg'
import sample from '../assets/sample.png'

import ListPage from "../features/search/ListPage";
import SearchBar from "../features/search/SearchBar";

import Coleccion from '../components/Coleccion';




const Colecciones = () => {


    const [colecciones, setColecciones] = useState([])
    const [coleccionesResults, setColeccionesResults] = useState([])
  
    useEffect(() => {
      getPosts().then(json => {
        setColecciones(json)
        setColeccionesResults(json)
      })
    }, [])

    const createColeccion = (cole) =>{
        return(
            <Coleccion
                img={cole.img}
                title={cole.title}
                coleLink={cole.coleLink}
            />
        );
    }

    return (
        <>
            <div className="header">
                <Link to="/NuevaColeccion"><button className="btn-header">Nueva Colección</button></Link>
                <SearchBar posts={colecciones} setColeccionesResults={setColeccionesResults} />
            </div>
            <div className="mainCole">
                <h1>Colecciones</h1>
                <div className="colecciones">
                    {infoColecciones.map(createColeccion)}
                </div>
            </div>
        </>
    )
}
export default Colecciones;