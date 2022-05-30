import { atom } from 'recoil';

export interface Sidebar {
  active: boolean,
  type?: string,
  current: object,
}

export const sidebarState = atom<Sidebar>({
  key: 'sidebar-state',
  default: {
    active: false,
    type: '',
    current: {},
  },
});
