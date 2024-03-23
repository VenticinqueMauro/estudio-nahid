'use client';

import { Calculator, Folders } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {

    const pathname = usePathname();

    return (
        <section className="py-6  lg:min-h-screen border-r border-zinc-200 flex-shrink-0">
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
        </section>
    )
}
