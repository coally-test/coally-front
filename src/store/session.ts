import { IUser } from '@/interfaces/IUser';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface IUserSession {
    /** Stores partial user data */
    user: Partial<IUser>;

    /** Authentication token for the session */
    token: string;

    /** Sets the user data in the store */
    setUser: (user: Partial<IUser>) => void;

    /** Sets the authentication token in the store */
    setToken: (token: string) => void;

    /** Clears the user and token data from storage */
    clearStorage: () => void;
}

/**
 * Zustand store to manage user session state with persistence
 * 
 * @type {IUserSession} - Interface defining the session store structure.
 */
export const useSessionStore = create(
    persist<IUserSession>(
        (set) => ({
            user: {},
            token: '',
            setUser: (user: Partial<IUser>) => set({ user }),
            setToken: (token: string) => set({ token }),
            clearStorage: () => set({ token: '', user: {} }),
        }),
        {
            name: 'user-auth', // Unique name for the persisted storage
            storage: createJSONStorage(() => localStorage), // Locale storage for temporary persistence
        }
    )
);
