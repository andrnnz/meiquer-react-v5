import {useEffect, useState} from "react";
import axios from "axios";


const GetInfo = (props) => {
    const [titulo, setTitulo] = useState([]);
    const [descripcion, setDescripcion] = useState([]);
    const [img, setImg] = useState([]);
    const [deadline, setDeadline] = useState([]);
    const [path, setPath] = useState([]);
    const [etiqueta, setEtiqueta] = useState([]);
    const [enlace, setEnlace] = useState([]);

    const myObjStr = JSON.stringify(props.arraySou);
    console.log(myObjStr);

    useEffect(() => {
        axios.get(myObjStr)
            .then(response => {
                setTitulo(response.data.titulo);
                setDescripcion(response.data.descripcion);
                setImg(response.data.img);
                setDeadline(response.data.deadline);
                setPath(response.data.path);
                setEtiqueta(response.data.etiqueta);
                setEnlace(response.data.url);
            })
            .catch(error => {
                console.log(error);
            });
    }
    );

    return (
        console.log(titulo, descripcion, img, deadline, path, etiqueta, enlace));

}


export default GetInfo;