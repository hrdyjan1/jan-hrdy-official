import { ModalState } from '@/context/modal/types';
import { LanguageStringsKey } from '@/features/language/types';

function getModalTitle(
  status: ModalState['status'],
  t: (key: LanguageStringsKey) => string
): string | null {
  switch (status) {
    case 'SETTINGS':
      return t('settings');
    default:
      return null;
  }
}


export {getModalTitle}