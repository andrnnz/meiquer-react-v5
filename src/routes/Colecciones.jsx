import React, {useEffect, useState}from "react";

import '../assets/Styles.css';

import ListPage from "../features/search/ListPage";
import SearchBar from "../features/search/SearchBar";
import { getPosts } from "../api/axios"; //GetPosts necesita ser adecuado a colecciones y a contenido


const Colecciones = () => {


    const [colecciones, setColecciones] = useState([])
    const [coleccionesResults, setColeccionesResults] = useState([])
  
    useEffect(() => {
      getPosts().then(json => {
        setColecciones(json)
        setColeccionesResults(json)
      })
    }, [])

    return (
        <>
            <div className="header">
                <button className="btn-header">Nueva Colección</button>
                <SearchBar posts={colecciones} setColeccionesResults={setColeccionesResults} />
            </div>
            <div className="main">
                <p>jaj</p>
            </div>
        </>
    )
}
export default Colecciones;