'use client'
import { create } from "zustand";
import { AuthStoreType } from "./AuthStoreType";
import { User, UserRole } from "@/types/Users";


export const useAuthStore = create<AuthStoreType>()(
    (set) => ({
        user: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user') || '{}') : null,
        token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,

        setUser: (user: User) => {
            localStorage.setItem('user', JSON.stringify(user));
            set({ user });
        },
        setToken: (token: string, role: string) => {
            localStorage.setItem('token', token);
            localStorage.setItem('role', role);
            set({ token });
        },
        logout: () => {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            set({ user: null, token: null })
        },
        getState: () => useAuthStore.getState()
        
    })
)