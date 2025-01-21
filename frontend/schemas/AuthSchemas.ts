import { z } from 'zod';

export const LoginFormSchema = z.object({
    email: z.string({message: 'Email est obligatoire'}).email({message: 'Veuillez entrer une adresse e-mail valide."'}),
    mdp: z.string({required_error: 'mot de passe est obligatoire'}).min(6, {message: 'Votre mot de passe doit contenir au moins 6 caractères, dont des lettres et des chiffres pour plus de sécurité.'})
})