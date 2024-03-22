import { Metadata } from "next"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { ReactNode } from "react"
import { Toaster } from "sonner"

export const metadata: Metadata = {
    title: 'Login',
    description: 'Login',
}


export default function LoginLayout({ children }: { children: ReactNode }) {

    const cookieStore = cookies()
    const token = cookieStore.get('nahid_app')?.value

    if (token) {
        redirect('/dashboard')
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {children}
            <Toaster />
        </div>
    )
}