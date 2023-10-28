import React, { useState } from 'react';
import Icons from './Icons'; // Asegúrate de importar el componente Icons
import Alertas from './Alertas'; // Asegúrate de importar el componente Alertas

function Formulario({ onSubmit }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validarFormulario();

    if (isValid) {
      setAlertMessage('Registro exitoso');
      setAlertType('success');

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  const validarFormulario = () => {
    if (nombre === '' || email === '' || password === '' || confirmPassword === '') {
      setAlertMessage('Por favor, complete todos los campos correctamente.');
      setAlertType('danger');
      return false;
    }

    const emailRegex = /@/;
    if (!emailRegex.test(email)) {
      setAlertMessage('El correo electrónico debe contener al menos un símbolo "@".');
      setAlertType('danger');
      return false;
    }

    if (password !== confirmPassword) {
      setAlertMessage('Las contraseñas no coinciden.');
      setAlertType('danger');
      return false;
    }

    return true;
  };

  return (
    <div className="container">
      {alertMessage && <Alertas message={alertMessage} type={alertType} />}

 

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            id="nombre"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Registrarse</button>
      </form>
    </div>
  );
}

export default Formulario;
