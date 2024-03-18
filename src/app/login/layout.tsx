import { Metadata } from "next"
import { ReactNode } from "react"
import { Toaster } from "sonner"

export const metadata: Metadata = {
    title: 'Login',
    description: 'Login',
}

export default function LoginLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {children}
            <Toaster />
        </div>
    )
}