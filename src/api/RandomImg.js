import React, {useState, useEffect} from "react";
import axios from "axios";

const RandomImg = (props) => {
    const [img, setImg] = useState([]);
    useEffect(() => {
        axios.get(props.url)
            .then(response => {
                setImg(response.data.url);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return(
        <>
            <video>
                <source src={img} type="video/mp4" controls width={500} />
            </video>
        </>
    );
}

export default RandomImg;