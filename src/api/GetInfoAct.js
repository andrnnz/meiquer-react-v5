import {useEffect, useState} from "react";
import axios from "axios";

const GetInfoAct = (props) => {

    const [titulo, setTitulo] = useState([]);
    const [img, setImg] = useState([]);
    const [etiqueta, setEtiqueta] = useState([]);
    const [descripcion, setDescripcion] = useState([]);
    const [deadline, setDeadline] = useState([]);

    useEffect(() => {
        axios.get(props.source)
            .then(response => {
                setTitulo(response.data.titulo);
                setImg(response.data.img);
                setEtiqueta(response.data.etiqueta);
                setDescripcion(response.data.descripcion);
                setDeadline(response.data.deadline);
            })
            .catch(error => {
                console.log(error);
            });
    }
    );

    return (
        console.log(titulo, img, etiqueta));

}


export default GetInfoAct;