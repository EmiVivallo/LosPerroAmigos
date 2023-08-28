import React, { useState } from 'react';

function AulasComponent() {
  // Definimos un array de objetos que representan las aulas y las materias
  const aulas = [
    { nombreAula: 'Aula 101', materia: 'Matemáticas' },
    { nombreAula: 'Aula 102', materia: 'Historia' },
    { nombreAula: 'Aula 103', materia: 'Ciencias' },
    { nombreAula: 'Aula 104', materia: 'Inglés' },
    { nombreAula: 'Aula 105', materia: 'Arte' },
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

      {/* Mostrar el aula ampliada */}
      {aulaAmpliada && (
        <div className="AulaAmpliada">
          
        </div>
      )}
    </div>
  );
}

export default AulasComponent;


