import { Outlet } from "react-router-dom";
import logo from '../assets/logo.svg';
import '../assets/Styles.css';


export default function Root() {
    return (
      <>
        <div className="sidebar">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="width100">
                <button className="btn-blanco">Colecciones</button>
                <button className="btn-blanco">Contenido</button>
                <button className="btn-negro">Perfil</button>
            </div>
        </div>
        <div id="detail">
          <Outlet/>
        </div>
      </>
    );
  }