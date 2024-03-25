'use client';

import { Calculator, Folders, HomeIcon, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {

    const pathname = usePathname();
    const router = useRouter();

    const handleLogOut = async () => {
        await fetch(`${process.env.NEXT_PUBLIC_URL}/api/auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        router.push('/')
    }

    return (
        <section className="border-r border-zinc-200 flex-shrink-0 min-h-screen">
            <div className="sticky top-0 left-0 py-6">
                <Link href='/dashboard' className="font-medium text-gray-600 flex justify-center text-lg">Admin Panel</Link>
                <ul className="flex justify-center px-6 gap-5 lg:gap-0 lg:flex lg:flex-col overflow-x-auto flex-shrink-0 lg:space-y-6 mt-5 pb-3 lg:mt-10 text-zinc-500">
                    <Link href='/dashboard/gestion-casos' className={`${pathname.endsWith('/gestion-casos') && 'text-cyan-700'} hover:text-cyan-700 flex items-center gap-1 flex-shrink-0`}>
                        <Folders size={20} />
                        Gestion de casos
                    </Link>
                    <Link href='#' className={`${pathname.endsWith('/calculadora') && 'text-cyan-700'} hover:text-cyan-700 flex items-center gap-1 flex-shrink-0`}>
                        <Calculator size={20} />
                        Calculadoras
                    </Link>
                </ul>
            </div>
            <div className="absolute bottom-0 py-10 px-6 space-y-3">
                <Link href='/' className="text-zinc-500 hover:text-cyan-700 flex items-center gap-1 flex-shrink-0 ">
                    <HomeIcon size={20} />
                    Ir al inicio
                </Link>
                <button
                    className="text-zinc-500 hover:text-cyan-700 flex items-center gap-1 flex-shrink-0 "
                    onClick={handleLogOut}
                >
                    <LogOut size={20} />
                    Logout
                </button>
            </div>
        </section>
    )
}
