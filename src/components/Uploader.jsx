import React, { useState, useRef } from 'react'

const Uploader = (props) => {
    const fileInput = useRef(null)
    return (
        <>
            <input type="file" 
            ref={fileInput}
            style={{ display: 'none' }} 
            />

            <button
            className='inputFile'
            onClick={() => fileInput.current.click()}
            >Subir Archivo </button>
        </>
    )
}

export default Uploader;