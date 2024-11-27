export type ModalState = {
  status: 'SETTINGS' | null;
  visibility: 'VISIBLE' | 'HIDDEN';
};

export type ModalAction = {
  show: (status: ModalState['status']) => void;
  hide: () => void;
};
