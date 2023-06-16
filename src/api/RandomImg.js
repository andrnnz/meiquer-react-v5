import React, {useState, useEffect} from "react";
import axios from "axios";

const RandomImg = (props) => {
    const [title, setTitle] = useState([]);
    const [link, setLink] = useState([]);
    const [explanation, setExplanation] = useState([]);
    
    useEffect(() => {
        axios.get(props.url)
            .then(response => {
                setLink(response.data.url);
                setTitle(response.data.title);
                setExplanation(response.data.explanation);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return(
        <>
            <h2>{title}</h2>
            <iframe
                width="100%"
                height="100%"
                src={link}
                title="Youtube Player"
                frameborder="0"
                allowFullScreen
            />
            <p>{explanation}</p>
        </>
    );
}

export default RandomImg;