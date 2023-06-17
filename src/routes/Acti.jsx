import React, {useState} from "react"; 
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import '../assets/css/Styles.css';
import '../assets/css/Colecciones.css';


function Acti() {
    const { actId } = useParams();

    return (
      <>

      <div>
        <div className="header">
          <Link to="/colecciones"><button className="btn-header">Colecciones</button></Link>   
          <h1 className="h1Contenido" style={{fontFamily: 'HelveticaNeue'}}>Desarrollo Web</h1>
        </div>
        <div className='main' style={{display:'flex'}}>
            <div className="actiCont">
              <div className="actiCont" style={{backgroundColor: 'white'}}>
                <p> Crea un desarrollo </p>
                <p> 2021-10-10 </p>
              </div>
            </div>
        <div style={{height:'300px'}}></div>
        </div>
      </div>
      </>
    )
  }
export default Acti;