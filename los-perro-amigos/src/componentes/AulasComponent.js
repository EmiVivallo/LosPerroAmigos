import React, { useState } from 'react';

function AulasComponent() {
  const aulas = [
    { nombreAula: 'Aula 101', materia: 'Matemáticas' },
    { nombreAula: 'Aula 102', materia: 'Historia' },
    { nombreAula: 'Aula 103', materia: 'Ciencias' },
    { nombreAula: 'Aula 104', materia: 'Inglés' },
    { nombreAula: 'Aula 105', materia: 'Arte' },
  ];

  const [aulaAmpliada, setAulaAmpliada] = useState(null);

  const handleAulaClick = (aula) => {
    setAulaAmpliada(aula);
  };

  const handleCloseClick = () => {
    setAulaAmpliada(null);
  };

  return (
    <div className="AulasComponent"> {}
      <h2 className="AulasComponent-title">Lista de Aulas y Materias</h2> {}
      <ul className="AulasComponent-list"> {}
        {aulas.map((aula, index) => (
          
        ))}
      </ul>

    
    </div>
  );
}

export default AulasComponent;


