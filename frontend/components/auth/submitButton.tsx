"use client"

import { Button, ButtonProps } from "@heroui/button"
import { useFormStatus } from "react-dom"

export const SubmitButton = (props: ButtonProps) => {
    const {pending } = useFormStatus();
    console.log(pending)
    return <Button {...props} isLoading={pending || props.isDisabled} />
}