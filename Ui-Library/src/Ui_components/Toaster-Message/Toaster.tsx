import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './toaster-styles.scss';

interface ToastProps {
  type: 'success' | 'warning' | 'danger';
  message: string;
}

const Toast: React.FC<ToastProps> = ({ type, message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className={`toast ${type}`}>
        <span className="message">{message}</span>
        {/* <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={handleClose} /> */}
      </div>
    )
  );
};

export default Toast;
