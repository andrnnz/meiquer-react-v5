import React from "react"; 
import { Link } from "react-router-dom";
import '../assets/css/Styles.css';


import ActividadesCard from "../components/ActividadesCard";

function Contenido() {
  
    return (
      <>
       <div className="contenidoMain">
        <h1>Contenido</h1>
          <Link to="/actividades"><button className="btn-header">Actividades</button></Link>
          <Link to="/Links"><button className="btn-header">Links</button></Link>
          <Link to="/Videos"><button className="btn-header">Videos</button></Link>
        </div>
      </>
    )
  }
export default Contenido;