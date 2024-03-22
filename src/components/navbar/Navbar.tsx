'use client';

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ConsultaCaso from "../consulta-caso/ConsultCase";
import { Menu } from "lucide-react";

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

const menuItems = ['inicio', 'nosotros', 'casos de éxito', 'contacto'];

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute top-0 z-10 max-w-7xl mx-auto  flex items-center w-full justify-between px-3 pt-5 lg:pt-8 pb-2 lg:pb-5 backdrop-blur md:border-b md:border-b-cyan-800/50"
        >
            <Link href='/' className="lg:text-lg text-zinc-500 tracking-tight uppercase z-50">
                Nahid & Asociados
            </Link>
            {/* DESKTOP  */}
            <ul className="hidden md:flex items-center uppercase gap-10 md:text-xs lg:text-sm text-zinc-300">
                {
                    menuItems.map((item) => (
                        <li key={item} className="cursor-pointer hover:text-white duration-200">{item}</li>
                    ))
                }
                <ConsultaCaso />
            </ul>

            {/* MOBILE  */}
            <div onClick={() => setIsOpen(!isOpen)} className="z-50 md:hidden">
                <Menu size={29}/>
            </div>
            <motion.ul
                className="w-full md:hidden h-screen z-40 absolute top-0 left-0 backdrop-blur-md bg-black/90 pt-32  gap-5 font-bold text-lg flex-col flex items-center uppercase"
                variants={menuVariants}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
            >
                {
                    menuItems.map((item) => (
                        <motion.li
                            key={item}
                            className="cursor-pointer hover:text-white duration-200 "
                            variants={menuItemVariants}
                        >
                            {item}
                        </motion.li>
                    ))
                }
                <motion.li onClick={() => setIsOpen(false)} variants={menuItemVariants}>
                    <ConsultaCaso />
                </motion.li>
            </motion.ul>
        </motion.nav>
    )
}

