import React, { useState } from 'react';
import Botonred from './Botonred';
import Formulario from './Formulario';
import Alertas from './Alertas';
import Icons from './Icons';

const emailRegex = /@/;

function Registro() {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleFormSubmit = (isValid, email) => {
    if (nombre === '' || email === '' || password === '' || confirmPassword === '') {
      setMessage('Por favor, complete todos los campos correctamente.');
    } else if (!emailRegex.test(email)) {
      setMessage('El correo electrónico debe contener al menos un símbolo "@".');
    } else if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden.');
    } else if (isValid) {
      setMessage('Registro exitoso');
      setMessageType('success');
    }
  };

  return (
    <div className="container text-center vh-100">
      <h1 className="mb-4">Registro</h1>
      <div className="d-flex justify-content-center">
        <Icons showFacebook showGithub showLinkedin />
      </div>
      <Formulario onSubmit={handleFormSubmit} />
      {message && <Alertas message={message} type={messageType} />}
    </div>
  );
}

export default Registro;
