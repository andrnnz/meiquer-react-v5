import React, {useEffect, useState} from "react"; 
import ListPage from "../features/search/ListPage";   
import SearchBar from "../features/search/SearchBar";

import { getPosts } from "../api/axios";
import { Link } from "react-router-dom";
import '../assets/css/Styles.css';

import ActividadesCard from "../components/ActividadesCard";

function Contenido() {
    const [posts, setPosts] = useState([])
    const [searchResults, setSearchResults] = useState([])
  
    useEffect(() => {
      getPosts().then(json => {
        setPosts(json)
        setSearchResults(json)
      })
    }, [])
  
  
    return (
      <>

      <div>
        <div className="header">
          <Link to="/actividades"><button className="btn-header">Actividades</button></Link>
          <Link to="/Links"><button className="btn-header">Links</button></Link>
          <Link to="/Videos"><button className="btn-header">Videos</button></Link>
          <SearchBar posts={posts} setSearchResults={setSearchResults} />
        </div>
        <div className='main'>
          <h1>Contenido</h1>
          <ActividadesCard />
        </div>
      </div>
      </>
    )
  }
export default Contenido;