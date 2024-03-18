'use client';

import { motion, Variants } from "framer-motion";
import { useState } from "react";

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

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute top-0 z-10 max-w-7xl mx-auto  flex items-center w-full justify-between px-3 pt-8 pb-5 backdrop-blur md:border-b md:border-b-[#0B6C71]/50"
        >
            <p className="font-bold  lg:text-xl tracking-tight uppercase z-50">
                Nahid & Asociados
            </p>
            {/* DESKTOP  */}
            <ul className="hidden md:flex items-center uppercase gap-10 md:text-xs lg:text-sm text-zinc-300">
                <li className="cursor-pointer hover:text-white duration-200" >Inicio</li>
                <li className="cursor-pointer hover:text-white duration-200" >Nosotros</li>
                <li className="cursor-pointer hover:text-white duration-200" >Casos de éxito</li>
                <li className="cursor-pointer hover:text-white duration-200" >Consulta tu caso</li>
                <li className="cursor-pointer hover:text-white duration-200" >Contacto</li>
            </ul>

            {/* MOBILE  */}
            <div onClick={() => setIsOpen(!isOpen)} className="z-50 md:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-align-justify mb-3"
                >
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
            </div>
            <motion.ul
                className="w-full md:hidden h-screen z-40 absolute top-0 left-0 backdrop-blur-md bg-black/90 pt-32  gap-5 font-bold text-xl flex-col flex items-center"
                variants={menuVariants}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
            >
                <motion.li
                    className="cursor-pointer hover:text-white duration-200"
                    variants={menuItemVariants}
                >
                    Inicio
                </motion.li>
                <motion.li
                    className="cursor-pointer hover:text-white duration-200"
                    variants={menuItemVariants}
                >
                    Nosotros
                </motion.li>
                <motion.li
                    className="cursor-pointer hover:text-white duration-200"
                    variants={menuItemVariants}
                >
                    Casos de éxito
                </motion.li>
                <motion.li
                    className="cursor-pointer hover:text-white duration-200"
                    variants={menuItemVariants}
                >
                    Consulta tu caso
                </motion.li>
                <motion.li
                    className="cursor-pointer hover:text-white duration-200"
                    variants={menuItemVariants}
                >
                    Contacto
                </motion.li>
            </motion.ul>
        </motion.nav>
    )
}

