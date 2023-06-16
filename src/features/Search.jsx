import React from 'react'
import infoActividades from '../files/infoActividades.js'

function List(props) {
    
    const filteredData = infoActividades.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.etiqueta.toLowerCase().includes(props.input.toLowerCase());
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.etiqueta}</li>
            ))}
        </ul>
    )
}

export default List