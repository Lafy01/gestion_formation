import { cn } from "@/lib/utils";
import { Card, CardBody, CardHeader } from "@heroui/card";
import React from "react";
import { LoginForm } from "./LoginForm";

export function Login({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="w-full text-center">
                    <h2 className="text-xl w-full">Bienvenu SPRAY Info</h2>
                </CardHeader>
                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                    <span className="relative z-10 bg-background px-2 text-muted-foreground">
                        Connectez-vous avec
                    </span>
                </div>
                <CardBody>
                    <LoginForm />
                </CardBody>
            </Card>
        </div>
    )
}