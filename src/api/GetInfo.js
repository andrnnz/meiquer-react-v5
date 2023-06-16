import {useEffect, useState} from "react";
import axios from "axios";

import '../files/infoColecciones'

const GetInfo = (props) => {
    const [titulo, setTitulo] = useState([]);
    const [img, setImg] = useState([]);
    const [etiqueta, setEtiqueta] = useState([]);

    useEffect(() => {
        axios.get(props.source)
            .then(response => {
                setTitulo(response.data.titulo);
                setImg(response.data.img);
                setEtiqueta(response.data.etiqueta);
            })
            .catch(error => {
                console.log(error);
            });
    }
    );

    return (
        console.log(titulo, img, etiqueta));

}


export default GetInfo;