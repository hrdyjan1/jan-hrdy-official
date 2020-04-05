import React from 'react';
import { modalVisibility, modalStatus, useModalState, useModalDispatch, modalType } from '../../../contexts/modalContext';
import Modal from './Modal';
import ModalSettings from './ModalSettings';

const getBonusRender = (status) => {
  switch (status) {
    case modalStatus.SETTINGS:
      return ModalSettings;
    default:
      return () => {};
  }
};

const ModalWrapper = () => {
  const { status, heading, visibility } = useModalState();
  const dispatchModal = useModalDispatch();
  const hideModal = () => dispatchModal({ type: modalType.HIDE });
  const renderBonus = getBonusRender(status);

  return (
    <Modal
      render={renderBonus}
      heading={heading}
      isVisible={visibility === modalVisibility.VISIBLE}
      close={hideModal}
    />
  );
};

export default ModalWrapper;
