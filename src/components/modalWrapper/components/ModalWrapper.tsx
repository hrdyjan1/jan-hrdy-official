import { ModalState } from '@/context/modal/types';
import { useLanguageTranslation } from '@/features/language/useLanguageTranslation';
import React from 'react';
import { getModalTitle } from '../utils/getModalTitle';
import { ModalButton } from './ModalButton';
import { getModalContent } from '../utils/getModalContent';

interface Props {
  status: ModalState['status'];
  isVisible: boolean;
  close: () => void;
}

function ModalWrapper({ status, isVisible, close }: Props) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { t } = useLanguageTranslation();
  const title = getModalTitle(status, t);
  const ContentComponent = getModalContent(status);

  React.useEffect(() => {
    const ref = containerRef.current;

    if (ref) {
      if (isVisible) {
        ref.removeAttribute('class');
        ref.classList.add('basic');
      } else {
        containerRef.current.classList.add('out');
      }
    }
  }, [isVisible]);

  React.useEffect(() => {
    const currentContainer = containerRef.current;
    const callback = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.className === 'modal-background') {
        close();
      }
    };

    currentContainer?.addEventListener('click', callback);
    return () => currentContainer?.removeEventListener('click', callback);
  }, [close]);

  return (
    <div id='modal-container' ref={containerRef}>
      <div className='modal-background'>
        <div className='modal'>
          <h2>{title}</h2>
          <ContentComponent />
          <ModalButton label={t('close')} onClick={close} className='primary' />
        </div>
      </div>
    </div>
  );
}

export { ModalWrapper };
