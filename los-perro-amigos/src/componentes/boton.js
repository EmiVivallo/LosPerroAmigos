import React, { useState, useRef } from 'react';
import '../boton.css';
import { Link } from 'react-router-dom';



function CustomButton() {
    const videoRef = useRef(null);
  
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };
  const [isCameraActive, setCameraActive] = useState(false);

  const horario = [
    { TurnoAula: 'Teoria ' },
    { TurnoAula: 'Taller ' },
  ];

  const toggleCamera = () => {
    setCameraActive(!isCameraActive);
    // Puedes realizar más acciones aquí al activar/desactivar la cámara
  };

  return (
    <div className="TTComponent">
      <h2 className="TTComponent-title">¿Qué desea visualizar?</h2>
      <div className='cam'>
      <div>
    </div>
        <div
          className={`camera ${isCameraActive ? 'active' : ''}`}
          onClick={toggleCamera}
        >
      <video className='camara' ref={videoRef} autoPlay playsInline />
        </div>
        <button className={"btncam"} onClick={startCamera}>Activar cámara</button>
      </div>
     |<div className='divbotones'>
      <Link to="/teoria" className='link' >
      <button className='btn-item'> Teoria </button>
      </Link>
      <Link to="/taller" className='link' >
      <button className='btn-item'> Taller </button>
      </Link>
      </div>
    </div>
  );
}

export default CustomButton;
