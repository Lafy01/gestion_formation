// 
// export interface DealFormState<T> {
//     errors?: StringMap;
//     successMessage?: string;
//     data?: T;
//     blurs?: StringToBooleanMap;
// }

// export interface StringMap {
//     [key: string]: string;
// }

// export interface StringToBooleanMap {
//     [key: string]: boolean;
// }
// 
export type FormStateLogin =
    | {
        errors?: {
            email?: string[]
            mdp?: string[]
        }
        message?: string
    }
    | undefined
// 