import React, { useState } from 'react';
import '../TallerComponent.css';
import { Link } from 'react-router-dom';

function CursosComponent() {
  const horario = [
    { TurnoAula: 'Turno ', hs: 'Mañana' },
    { TurnoAula: 'Turno ', hs: 'Tarde' },
  ];

  const [horarioAmpliada, setHorarioAmpliada] = useState(null);

  const handleHorarioClick = (horario) => {
    setHorarioAmpliada(horario);
  };

  const handleCloseClick = () => {
    setHorarioAmpliada(null);
  };

  return (
    <div className="tallerComponent"> {}
      <h2 className="tallerComponent-title">Lista de Talleres y Turnos</h2> {}
      <ul className="tallerComponent-list"> {}
        {horario.map((Curso, Horario, hs) => (
        <Link to="/talleres" className='link'>
          <li
            className="tallerComponent-item"
            onClick={() => handleHorarioClick(Horario)}
          >
              <strong>Cursada:</strong> {Curso.TurnoAula}, <strong>Horario:</strong> {Curso.hs}
          </li>
          </Link>
        ))}
      </ul>
      <Link to="/" className='link'>
      <button className='volverbtn'>Volver</button>
      </Link>    
      {horarioAmpliada && (
        <div className="tallerAmpliada">
          <div className="tallerAmpliada-content">
            <h2>{horarioAmpliada.nombreHorario}</h2>
            <p>Turno: {horarioAmpliada.hs}</p>
            <button onClick={handleCloseClick}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CursosComponent;


