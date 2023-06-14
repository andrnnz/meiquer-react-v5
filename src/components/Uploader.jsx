import React, { useRef } from 'react';

const Uploader = () => {
  const fileInput = useRef(null);

  const handleFileUpload = async () => {
    const file = fileInput.current.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('http://localhost:3002/files', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          // File upload successful
          console.log('File uploaded successfully');
        } else {
          // File upload failed
          console.error('File upload failed');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <>
      <input
        type="file"
        ref={fileInput}
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />

      <button
        className="inputFile"
        onClick={() => fileInput.current.click()}
      >
        Subir Archivo
      </button>
    </>
  );
};

export default Uploader;