import { atom } from 'recoil';

export const loadingState = atom({
  key: 'loading-state',
  default: false,
});
