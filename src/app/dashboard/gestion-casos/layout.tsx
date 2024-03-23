import { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
    title: 'Gestion de casos',
    description: 'Admin Panel',
}


export default function GestionCasosLayout({ children }: { children: ReactNode }) {

    return (
        <div className="w-full">
            {children}
        </div>
    )
}