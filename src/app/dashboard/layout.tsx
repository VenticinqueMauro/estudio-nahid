import { Metadata } from "next"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { ReactNode } from "react"
import { Toaster } from "sonner"
import Sidebar from "./components/Sidebar"

export const metadata: Metadata = {
    title: 'Panel Administrador',
    description: 'Admin Panel',
}


export default function DashboardLayout({ children }: { children: ReactNode }) {


    return (
        <div className="bg-zinc-50 text-zinc-950 w-full absolute top-0 left-0">
            <main className="flex flex-col lg:flex-row lg:flex-grow">
                <Sidebar />
                {children}
            </main>
        </div>
    )
}