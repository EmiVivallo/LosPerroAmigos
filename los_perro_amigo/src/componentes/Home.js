import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { getAuth, signOut } from "firebase/auth";
import { appFirebase } from "../firebaseConfig";
import { FaExclamationTriangle } from 'react-icons/fa'; // Importa el ícono de advertencia

function Home() {
  const videoRef = useRef(null);
  const [isCameraActive, setCameraActive] = useState(false);
  const [error, setError] = useState(null);
  const [isTheoryButtonDisabled, setTheoryButtonDisabled] = useState(true);
  const auth = getAuth(appFirebase);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
        setTheoryButtonDisabled(false);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      setError('Error accessing camera. Please check camera permissions.');
      setCameraActive(false);
    }
  };

  const toggleCamera = () => {
    setCameraActive(!isCameraActive);
    setError(null);
    setTheoryButtonDisabled(isCameraActive);
  };

  useEffect(() => {
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
    <div className='main-container'>
      <div className="TTComponent">
        <h2 className="TTComponent-title">BIENVENID@</h2>
        {isCameraActive ? null : (
          <h3 className="tit-h3">
            <FaExclamationTriangle className="icon-warning" />
            Prenda la cámara para continuar
            <FaExclamationTriangle className="icon-warning" />
          </h3>
        )}
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
          {error && <div className="error-message">{error}</div>}
        </div>
        <Link to="/show">
          <button
            className='btn-item'
            disabled={isTheoryButtonDisabled}
            style={{ opacity: isTheoryButtonDisabled ? 0.5 : 1 }}
          >
            Teoria
          </button>
        </Link>
        <button className="btn btn-danger" onClick={() => signOut(auth)}>
          Cerrar Sesion
        </button>
      </div>
    </div>
  );
}

export default Home;
