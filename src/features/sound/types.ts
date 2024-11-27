import { EmptyFunction } from '@/types/EmptyFunction';

export type SoundState = {
  status: 'ON' | 'OFF';
};

export type SoundAction = {
  toggle: EmptyFunction;
};
