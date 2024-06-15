// src/Modal.js
import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ onClose }) => {
  return (
    <div className={styles.modal-backdrop}>
      <div className={styles.modal-content}>
        <h2>Time's Up!</h2>
        <p>You've been on this site for over 2 minutes.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
