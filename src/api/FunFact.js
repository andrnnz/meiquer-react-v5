import React, { useEffect, useState} from "react";
import axios from "axios";


const FunFact = (props) => {
    const [facts, setFacts] = useState([]);
    useEffect(() => {
        axios.get(props.url)
            .then(response => {
                setFacts(response.data.text);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <p>{facts}</p>
        </>
    );
}

export default FunFact;