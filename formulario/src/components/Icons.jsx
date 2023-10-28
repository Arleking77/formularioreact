import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Icons({ showFacebook, showGithub, showLinkedin }) {
  return (
    <div className="rounded-circle bg-primary p-3">
      {showFacebook && <FontAwesomeIcon icon={faFacebook} size="2x" className="mx-2" />}
      {showGithub && <FontAwesomeIcon icon={faGithub} size="2x" className="mx-2" />}
      {showLinkedin && <FontAwesomeIcon icon={faLinkedin} size="2x" className="mx-2" />}
    </div>
  );
}

export default Icons;
