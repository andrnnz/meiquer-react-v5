import React, {useEffect, useState}from "react";
import { Link } from 'react-router-dom';
import { getPosts } from "../api/axios"; //GetPosts necesita ser adecuado a colecciones y a contenido

import '../assets/css/Styles.css';
import infoColecciones from '../files/infoColecciones';

import SearchBar from "../features/search/SearchBar";

import Coleccion from '../components/Coleccion';
import { Grid } from "@mui/material";




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
                key={cole.id}
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
                <Grid container spacing={2} columns={2} style={{width: '100%'}} className="colecciones">
                    {infoColecciones.map(createColeccion)}
                </Grid>
                <div style={{height: '200px'}}></div>
            </div>
        </>
    )
}
export default Colecciones;