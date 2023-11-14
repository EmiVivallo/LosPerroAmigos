import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { getAuth, signOut } from "firebase/auth";
import { appFirebase } from "../firebaseConfig";



function Home() {
  const videoRef = useRef(null);
  const [isCameraActive, setCameraActive] = useState(false);
  const [error, setError] = useState(null); // Nuevo estado para manejar errores
  const auth = getAuth(appFirebase)

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      setError('Error accessing camera. Please check camera permissions.');
    }
  };

  const toggleCamera = () => {
    setCameraActive(!isCameraActive);
    setError(null); // Limpiar cualquier mensaje de error al cambiar el estado de la cámara
  };

  useEffect(() => {
    // Desactivar la cámara al salir de la página
    return () => {
      if (isCameraActive && videoRef.current) {
        const stream = videoRef.current.srcObject;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach((track) => track.stop());
        }
      }
    };
  }, [isCameraActive]);

  return (
    <div className="TTComponent">
      <h2 className="TTComponent-title">BIENVENID@</h2>
      <div className='cam'>
        <div
          className={`camera ${isCameraActive ? 'active' : ''}`}
          onClick={toggleCamera}
        >
          <video className='camara' ref={videoRef} autoPlay playsInline />
        </div>
        <button className={"btncam"} onClick={startCamera}>
          Activar cámara
        </button>
        {error && <div className="error-message">{error}</div>} {/* Mostrar mensaje de error */}
      </div>
        <Link to="/show">
          <button className='btn-item'> Teoria </button>
        </Link>
        <button className="btn btn-danger" onClick={()=>signOut(auth)}>Cerrar Sesion</button>
    </div>
  );
}

export default Home;
