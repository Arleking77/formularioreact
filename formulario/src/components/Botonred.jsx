import React from 'react';

function Botonred({ icon }) {
  return (
    <button className="btn btn-primary mx-2">
      <i className={`fab fa-${icon}`} /> {icon} Login
    </button>
  );
}

export default Botonred;
