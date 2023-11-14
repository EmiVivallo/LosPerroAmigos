import React, { useState } from 'react';
import '../TalleresComponent.css';
import { Link } from 'react-router-dom';

function AulasComponent() {
  // Definimos un array de objetos que representan las aulas y las materias
  const aulas = [
    { nombreAula: 'G603', materia: 'Progrmacion Web dinamica' },
    { nombreAula: 'G506', materia: 'Sistemas Operativos' },
    { nombreAula: 'G605', materia: 'Construccion de software' },
    { nombreAula: 'G509', materia: 'Programacion web estatica' },
    { nombreAula: 'G604', materia: 'Redes II' },
  ];

  // Estado para controlar la aula ampliada
  const [aulaAmpliada, setAulaAmpliada] = useState(null);

  // Manejador de clic para mostrar el aula ampliada
  const handleAulaClick = (aula) => {
    setAulaAmpliada(aula);
  };

  // Manejador de clic para cerrar el aula ampliada
  const handleCloseClick = () => {
    setAulaAmpliada(null);
  };

  return (
    <div className="AulasComponent"> {/* Asigna la clase al contenedor principal */}
      <h2 className="AulasComponent-title">Lista de Aulas y Materias</h2> {/* Asigna la clase al título */}
      <ul className="AulasComponent-list"> {/* Asigna la clase a la lista */}
        {aulas.map((aula, index) => (
          <li
            className="AulasComponent-item"
            key={index}
            onClick={() => handleAulaClick(aula)}
          >
            <strong>Aula:</strong> {aula.nombreAula}, <strong>Materia:</strong> {aula.materia}
          </li>
        ))}
      </ul>
      <Link to="/teoria" className='link'>
      <button className='volverbtn'>Volver</button>
      </Link> 

      {/* Mostrar el aula ampliada */}
      {aulaAmpliada && (
        <div className="AulaAmpliada">
          <div className="AulaAmpliada-content">
            <h2>{aulaAmpliada.nombreAula}</h2>
            <p>Materia: {aulaAmpliada.materia}</p>
            <button onClick={handleCloseClick}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AulasComponent;


