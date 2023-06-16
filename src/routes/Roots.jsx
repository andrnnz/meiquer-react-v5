import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';


import logo from '../assets/logo.svg';
import '../assets/css/Styles.css';



export default function Root() {
    return (
      <Fragment>
        <div className="App">
            <div className="sidebar">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="width100">
                    <Link to="/"><button className="btn-blanco">Inicio</button></Link>
                    <Link to="/colecciones"><button className="btn-blanco">Colecciones</button></Link>
                    <Link to="/contenido"><button className="btn-blanco">Contenido</button></Link>
                </div>
            </div>
            <div id="detail">
            <Outlet/>
            </div>
        </div>
      </Fragment>
    );
  }