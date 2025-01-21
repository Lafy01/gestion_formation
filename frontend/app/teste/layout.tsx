export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted px-6 pb-6  md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                {children}
            </div>
        </section>
    );
}
