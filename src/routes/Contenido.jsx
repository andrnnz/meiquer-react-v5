import React, {useEffect, useState} from "react";
import SearchBar from "../features/search/SearchBar";
import ListPage from "../features/search/ListPage";
import { getPosts } from "../api/axios";
import '../assets/Styles.css';

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
        <div className='header'> 
          <SearchBar posts={posts} setSearchResults={setSearchResults} />
        </div>
        <div className='main'>
          <ListPage searchResults={searchResults} />
        </div>
      </div>
      </>
    )
  }
export default Contenido;