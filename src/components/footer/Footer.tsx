'use client';

import { motion } from "framer-motion";
import Link from "next/link";




export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-0 container text-center  px-3 pb-2 "
        >
            <div className="flex items-center w-full lg:justify-center lg:px-3 pb-5 "
            >
                <div className="flex flex-col lg:flex-row  lg:items-center uppercase gap-2 lg:gap-10 text-xs lg:text-sm list-none text-zinc-400">
                    <a
                        href={'https://www.google.com/maps/dir/-26.8410546,-65.2500889/nahid+y+asociados/@-26.8403288,-65.2699023,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94225da4ecdeb6e9:0x95e4e30fdfeb48b8!2m2!1d-65.2072852!2d-26.8367563?entry=ttu'}
                        target="_blank"
                        className="flex items-end  gap-1 hover:text-zinc-50 group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin  group-hover:text-cyan-500 "><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                        Gral. Paz 576, SM Tucumán, Tucumán
                    </a>
                    <a
                        href={'https://wa.me/5493816305738'}
                        target="_blank"
                        className="flex items-end  gap-1 group hover:text-zinc-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-outgoing group-hover:text-cyan-500"><polyline points="22 8 22 2 16 2" /><line x1="16" x2="22" y1="8" y2="2" /><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        381 630-5738
                    </a>
                    <a
                        href={'https://www.instagram.com/alan_nahid_asociados/'}
                        target="_blank"
                        className="flex items-end  gap-1 group hover:text-zinc-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram  group-hover:text-cyan-500"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                        /@alan_nahid_asociados
                    </a>
                </div>
            </div>
            <a className="text-xs text-zinc-500 " href='https://wa.me/+5493816160976?text=¡Hola!%20Estoy%20interesado/a%20en%20tus%20servicios.%20¿Podemos%20conversar%3F' target="_blank">
                    © 2024 <b className="hover:text-zinc-300">MVDev.</b> Todos los derechos reservados.
            </a>
        </motion.footer>
    )
}
