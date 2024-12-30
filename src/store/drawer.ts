import { create } from "zustand";

interface DrawerState {
    isOpen: boolean;
    action?: 'create' | 'edit';
    toggleDrawer: (action?: 'create' | 'edit') => void;
}

export const useDrawerStore = create<DrawerState>((set) => ({
    isOpen: false,
    action: 'create',
    toggleDrawer: (action?: 'create' | 'edit') =>
        set((state) => ({
            isOpen: !state.isOpen,
            action: action ?? state.action,
        })),
}));
