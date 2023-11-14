import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AulasComponent() {
  // Definimos un array de objetos que representan las aulas y las materias
  const aulas = [
    { nombreAula: '6to 3ra', materia: 'Tecnologia de Redes II' },
    { nombreAula: '5to 2da', materia: 'Tecnologia de Redes I' },
    { nombreAula: '4to 3ra', materia: 'Fisica' },
    { nombreAula: '6to 1ra', materia: 'Inglés' },
    { nombreAula: '5to 1ra', materia: 'Programacion Web Estatica' },
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


