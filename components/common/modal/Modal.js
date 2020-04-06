import React from 'react';
import Button from '../button/Button';

const Modal = ({ render, heading, isVisible, close }) => {
  const modalContainerRef = React.useRef(null);

  React.useEffect(() => {
    if (isVisible) {
      modalContainerRef.current.removeAttribute('class');
      modalContainerRef.current.classList.add('basic');
    } else {
      modalContainerRef.current.classList.add('out');
    }
  }, [isVisible]);

  React.useEffect(() => {
    modalContainerRef.current.addEventListener('click', (e) => {
      // Click outside the modal
      if (e.target.className === 'modal-background') {
        close();
      }
    });

    return () => modalContainerRef.current.removeEventListener('click', () => {});
  }, []);

  return (
    <div id='modal-container' ref={modalContainerRef}>
      <div className='modal-background'>
        <div className='modal'>
          <h2>{heading}</h2>
          {render()}
          <Button label="Close" onClick={close} className="primary" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
