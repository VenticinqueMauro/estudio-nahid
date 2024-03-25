'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CountUp() {

    const [progress, setProgress] = useState(0);

    const clientesFinal = 1400;
    const juiciosFinal = 500;
    const profesionalesFinal = 10;

    const animateNumber = (value: number) => ({
        scale: [0, 1],
        opacity: [0, 1],
        transition: { duration: 0.5, ease: "easeInOut" },
        delay: 0.2,
        type: "spring",
        stiffness: 100,
        damping: 10,
        value,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => Math.min(prev + 1, 100));
        }, 20);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col md:flex-row gap-5 md:items-center md:justify-between py-6 md:gap-10 w-full">
            <div className=" flex-col flex items-center justify-center">
                <motion.span
                    className="text-6xl md:text-7xl xl:text-8xl font-bold"
                    animate={animateNumber((clientesFinal / 100) * progress)}
                >
                    +{Math.floor((clientesFinal / 100) * progress)}
                </motion.span>
                <span className="text-xl lg:text-3xl font-medium">Clientes</span>
            </div>
            <div className=" flex-col flex items-center justify-center">
                <motion.span
                    className="text-6xl md:text-7xl xl:text-8xl font-bold"
                    animate={animateNumber((juiciosFinal / 100) * progress)}
                >
                    +{Math.floor((juiciosFinal / 100) * progress)}
                </motion.span>
                <span className="text-xl lg:text-3xl font-medium">Juicios</span>
            </div>
            <div className=" flex-col flex items-center justify-center">
                <motion.span
                    className="text-6xl md:text-7xl xl:text-8xl font-bold"
                    animate={animateNumber((profesionalesFinal / 100) * progress)}
                >
                    +{Math.floor((profesionalesFinal / 100) * progress)}
                </motion.span>
                <span className="text-xl lg:text-3xl font-medium">Profesionales</span>
            </div>
        </div>
    )
}
