'use server'

import axiosInstance from '@/utils/axiosInstance';
import { FormStateLogin } from './../../types/zod.type';
import { LoginFormSchema } from "@/schemas/AuthSchemas"
import { convertZodErrors } from "@/utils/zod.errors";
import { redirect } from 'next/navigation';
import { toast } from 'sonner';
import { useAuthStore } from '@/stores/AuthStore';

export const loginAction = async (state: FormStateLogin, formData: FormData) => {

    const unvalidatedData = {
        email: formData.get('email') || '',
        mdp: formData.get('mdp') || ""
    }
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    const validated = LoginFormSchema.safeParse(unvalidatedData);

    if (!validated.success) {
        const errors = convertZodErrors(validated.error)
        return { errors }
    }

    const result = await axiosInstance.post('/login', unvalidatedData)
    
    console.log(result)

    return { successMessage: 'Login success' }
}