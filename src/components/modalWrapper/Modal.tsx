// Add this at the top of your file to mark it as a client component
'use client';

import { useModalAction, useModalState } from '@/context/modal/helpers';
import React from 'react';
import { ModalWrapper } from './components/ModalWrapper';

function Modal() {
  const { status, visibility } = useModalState();
  const { hide } = useModalAction();

  return <ModalWrapper close={hide} status={status} isVisible={visibility === 'VISIBLE'} />;
}

export { Modal };
