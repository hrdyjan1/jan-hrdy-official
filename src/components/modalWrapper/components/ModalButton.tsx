import React from 'react';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  label: string;
}

function ModalButton({ type = 'button', className, onClick, label }: Props) {
  return (
    <button type={type} onClick={onClick} className={`${className} close-button`}>
      {label}
    </button>
  );
}

export { ModalButton };
