import React from "react";
import '../assets/Styles.css';
import { Link } from "react-router-dom";

const Videos = () => {
    return (
        <>
            <div className="header">
                <Link to="/actividades"><button className="btn-header">Actividades</button></Link>
                <Link to="/Links"><button className="btn-header">Links</button></Link>
                <Link to="/Videos"><button className="btn-header">Videos</button></Link>
            </div>
            <div className="main">
                <p>videos</p>
            </div>
        </>
    )
}
export default Videos;