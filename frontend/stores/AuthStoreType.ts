import { User } from "@/types/Users";

export type AuthStoreType = {
    user: User | null;
    token: string | null;

    setUser: (user: User) => void;
    setToken: (token: string, role: string) => void;
    logout: () => void;
}