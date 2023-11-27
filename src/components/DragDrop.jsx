import React, { useState } from 'react';
import { post } from '../utils/http';
import './DragDrop.scss';

const DragDrop = ({ setFoto, setSrcImagen, srcImagen }) => {
  const [isDragging, setIsDragging] = useState(false);

  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    preventDefaults(e);
    const dataTransf = e.dataTransfer;
    const files = dataTransf.files;
    handleFiles(files);
    setIsDragging(false);
  };

  const handleChange = (e) => {
    preventDefaults(e);
    const files = e.target.files;
    handleFiles(files);
    setIsDragging(false);
  };

  const handleFiles = async (files) => {
    try {
      const file = files[0];
      await uploadFile(file);
      previewFile(file);
    } catch (error) {
      console.error('[handleFiles]:', error);
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.addEventListener('loadend', () => {
      setSrcImagen(reader.result);
    });
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
  
    try {
      formData.append('foto', file);
      const imagenUp = await post('https://etapa-3-ymva.onrender.com/api/productos/upload/', formData);
      console.log('Respuesta del servidor:', imagenUp);
      setFoto(imagenUp);
    } catch (error) {
      console.error('[uploadFile]:', error);
    }
  };

  const handleDragEnter = (e) => {
    preventDefaults(e);
    const dropArea = document.querySelector('.drop-area');
    const isDraggingOver = e.target === dropArea || dropArea.contains(e.target);
    if (isDraggingOver) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e) => {
    preventDefaults(e);
    const dropArea = document.querySelector('.drop-area');
    const rect = dropArea.getBoundingClientRect();
    const isInsideDropArea =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;

    if (!isInsideDropArea) {
      setIsDragging(false);
    }
  };

  return (
    <div
      className={`drop-area ${isDragging ? 'dragging' : ''}`}
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={preventDefaults}
    >
      <p>
        Subir imagen al servidor <b>file dialog</b> o con <b>drag and drop</b> dentro del área punteada
      </p>

      <input type="file" id="lbl-foto" accept="image/*" onChange={handleChange} />
      <label htmlFor="lbl-foto" className="drop-area-button">
        File Dialog
      </label>

      <div className="drop-area-image">
        <img src={srcImagen} alt="" />
      </div>
    </div>
  );
};

export default DragDrop;