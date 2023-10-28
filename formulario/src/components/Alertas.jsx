import React from 'react';


function Alertas({ message, type }) {
  // Agrega clases personalizadas para controlar el color de las alertas
  const alertClasses = `alert alert-${type} custom-alert-${type}`;

  return (
    <div className={alertClasses}>
      {message}
    </div>
  );
}
export default Alertas; // Asegúrate de que haya una exportación predeterminada (default)
