import React, { useState } from 'react';
import '../CursosComponent.css';
import { Link } from 'react-router-dom';

function CursosComponent() {
  const horario = [
    { TurnoAula: 'Turno ', hs: 'Mañana' },
    { TurnoAula: 'Turno ', hs: 'Tarde' },
    { TurnoAula: 'Turno ', hs: 'Vespertino' },
  ];

  const [horarioAmpliada, setHorarioAmpliada] = useState(null);

  const handleHorarioClick = (horario) => {
    setHorarioAmpliada(horario);
  };

  const handleCloseClick = () => {
    setHorarioAmpliada(null);
  };

  return (
    <div className="HorarioComponent"> {}
      <h2 className="HorarioComponent-title">Lista de Cursos y Turnos</h2> {}
      <ul className="HorarioComponent-list"> {}
        {horario.map((Curso, Horario, hs) => (
          <li
            className="HorarioComponent-item"
            onClick={() => handleHorarioClick(Horario)}
          >
            <Link to="/aulas" className='link'>
              <strong>Cursada:</strong> {Curso.TurnoAula}, <strong>Horario:</strong> {Curso.hs}
            </Link>
          </li>
        ))}
      </ul>

      {horarioAmpliada && (
        <div className="HorarioAmpliada">
          <div className="HorarioAmpliada-content">
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


