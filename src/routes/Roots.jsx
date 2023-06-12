import React from 'react';
import logo from '../assets/logo.svg';
import '../assets/Styles.css';
import { Outlet, Link } from 'react-router-dom';


export default function Root() {
    return (
      <>
        <div className="App">
            <div className="sidebar">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="width100">
                    <Link to="/"><button className="btn-blanco">Inicio</button></Link>
                    <Link to="/colecciones"><button className="btn-blanco">Colecciones</button></Link>
                    <Link to="/contenido"><button className="btn-blanco">Contenido</button></Link>
                    <button className="btn-negro">Perfil</button>
                </div>
            </div>
            <div id="detail">
            <Outlet/>
            </div>
        </div>
      </>
    );
  }