export type UserRole = 'admin' | 'user' | 'formateur';

export type User = {
    id_user: number;
    firstname: string;
    lastname: string;
    email: string;
    role: UserRole;
    tel: string;
    adresse: string;
}
