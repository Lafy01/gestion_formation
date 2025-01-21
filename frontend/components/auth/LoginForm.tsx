'use client'

import { Input } from "@heroui/input"
import { SubmitButton } from "./submitButton"
import { loginAction } from "./login.action"
import { FormEventHandler, useActionState, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { EyeFilledIcon, EyeSlashFilledIcon } from "../icon/iconApp"
import { Form } from "@heroui/form"
import { Button } from "@heroui/button"
import { useAuthStore } from "@/stores/AuthStore"

export type LoginFormProps = {}

export const LoginForm = (props: LoginFormProps) => {
    const router = useRouter()
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const [ state, action, pending ] = useActionState(loginAction, undefined)

    console.log(`pending: `, pending)
    console.log(`token: `, useAuthStore.getState().token)
    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    useEffect(() => {
        if (state?.successMessage) {
            router.push('/')
            toast.success(state.successMessage)
        }
    }, [state, router])

    // const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    //     event.preventDefault()

    //     const form = event.currentTarget
    //     const formData = new FormData(form);
    //     const { errors, successMessage } = await loginAction(formData);

    //     if (errors) {
    //         Object.entries(errors).map(([key, value]) => {
    //             toast.error(value);
    //         });
    //         return;
    //     }
    //     router.refresh();

    //     console.log(errors)
    //     form.reset()

    //     toast.success(successMessage)
    // }


    return (
        <Form action={action}
            // onSubmit={onSubmit}
        >
            <div className="grid gap-6 w-full">
                <div className="grid gap-2">
                    <Input name="email"
                        label="E-mail"
                        type="email"
                        placeholder="Entrez votre email"
                        labelPlacement="outside"
                        variant="bordered"
                        isInvalid={!!state?.errors?.email}
                        errorMessage={state?.errors?.email}
                    />
                </div>
                <div className="grid gap-2">
                    <Input name="mdp"
                        label="Mot de passe"
                        type={isVisible ? "text" : "password"}
                        placeholder="Entrez votre mot de passe"
                        labelPlacement="outside"
                        variant="bordered"
                        isInvalid={!!state?.errors?.mdp}
                        errorMessage={state?.errors?.mdp}
                        endContent={
                            <button
                                aria-label="toggle password visibility"
                                className="focus:outline-none"
                                type="button"
                                onClick={toggleVisibility}
                            >
                                {isVisible ? (
                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                )}
                            </button>
                        }
                    />
                </div>
                <Button isLoading={pending} onSubmit={()=>console.log(useAuthStore.getState().token)} color="primary" type="submit" className="w-full">
                    Se connecter
                </Button>
            </div>
        </Form>
    )
}