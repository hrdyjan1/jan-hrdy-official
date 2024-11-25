import { ModalState } from '@/context/modal/types';
import { ModalContentSettings } from '../components/ModalContentSettings';

const getModalContent = (status: ModalState['status']): (() => React.ReactNode) => {
  switch (status) {
    case 'SETTINGS':
      return ModalContentSettings;
    default:
      return () => null;
  }
};

export { getModalContent };
