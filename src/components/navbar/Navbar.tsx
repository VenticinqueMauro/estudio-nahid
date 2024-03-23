'use client';

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ConsultaCaso from "../consulta-caso/ConsultCase";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const menuVariants: Variants = {
    hidden: {
        x: "-100%",
        transition: {
            duration: 0.3,
        },
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.3,
            staggerChildren: 0.3,
        },
    },
};

const menuItemVariants: Variants = {
    hidden: {
        x: -20,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    },
};

const menuItems = [
    {
        href: '/',
        name: 'inicio'
    },
    {
        href: '/nosotros',
        name: 'nosotros'
    },
    {
        href: '/casos-de-exito',
        name: 'casos de éxito'
    },
    {
        href: '#',
        name: 'contacto'
    }
];

export default function Navbar() {

    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className={`${pathname.includes('/dashboard')  && 'hidden'} absolute top-0 z-10 max-w-7xl mx-auto  flex items-center w-full justify-between px-3 pt-5 lg:pt-8 pb-2 lg:pb-5 backdrop-blur md:border-b md:border-b-cyan-800/50`}
        >
            <Link href='/' className="text-lg text-zinc-100 lg:text-zinc-300 tracking-tight uppercase z-50">
                Nahid & Asociados
            </Link>
            {/* DESKTOP  */}
            <div className="hidden md:flex items-center uppercase gap-10 md:text-xs lg:text-sm text-zinc-300">
                {
                    menuItems.map((item) => (
                        <Link key={item.name} href={item.href} className="cursor-pointer hover:text-white duration-200">{item.name}</Link>
                    ))
                }
                <ConsultaCaso />
            </div>

            {/* MOBILE  */}
            <div onClick={() => setIsOpen(!isOpen)} className="z-50 md:hidden">
                {isOpen ? <X size={29} /> : <Menu size={29} />}
            </div>
            <motion.div
                className="w-full md:hidden h-screen z-40 absolute top-0 left-0 backdrop-blur-md bg-black/90 pt-32  gap-5 font-bold text-lg flex-col flex items-center uppercase"
                variants={menuVariants}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
            >
                {
                    menuItems.map((item) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            className="cursor-pointer hover:text-white duration-200 "
                            variants={menuItemVariants}
                        >
                            {item.name}
                        </motion.a>
                    ))
                }
                <motion.div onClick={() => setIsOpen(false)} variants={menuItemVariants}>
                    <ConsultaCaso />
                </motion.div>
            </motion.div>
        </motion.nav>
    )
}

