import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.svg';
import Contenido from "./Contenido";
import Colecciones from "./Colecciones";
import '../assets/Styles.css';


export default function Root() {
    return (
      <>
        <div className="App">
            <div className="sidebar">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="width100">
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