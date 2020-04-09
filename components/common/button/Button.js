import React from 'react';

const Button = ({ type = 'button', className, onClick, label }) => (
  <button type={type} onClick={onClick} className={`${className} close-button`}>
    {label}
  </button>
);

export default Button;
