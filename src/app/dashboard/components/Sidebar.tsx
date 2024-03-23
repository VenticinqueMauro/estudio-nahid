import { Calculator, Folders } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
    return (
        <section className="py-6 px-6 lg:min-h-screen border-r border-zinc-200 flex-shrink-0">
            <span className="font-medium text-gray-600 flex justify-center text-lg">Admin Panel</span>
            <ul className="flex justify-center gap-5 lg:gap-0 lg:flex lg:flex-col overflow-x-auto flex-shrink-0 lg:space-y-6 mt-5 pb-3 lg:mt-10 text-zinc-500">
                <Link href='/dashboard/gestion-casos' className="hover:text-cyan-700 flex items-center gap-1 flex-shrink-0">
                    <Folders size={20} />
                    Gestion de casos
                </Link>
                <Link href='#' className="hover:text-cyan-700 flex items-center gap-1 flex-shrink-0">
                    <Calculator size={20} />
                    Calculadoras
                </Link>
            </ul>
        </section>
    )
}
