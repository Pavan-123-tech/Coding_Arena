import React from 'react';
import SignupLogin from '../signuplogin/SignupLogin'; // Import the SignupLogin component
import './loginmodal.css'

function LoginModal({ isOpen, onClose }) {
  return (
    <div className={`modal ${isOpen ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Login</h2>
        <SignupLogin /> {/* Render the SignupLogin component */}
      </div>
    </div>
  );
}

export default LoginModal;
