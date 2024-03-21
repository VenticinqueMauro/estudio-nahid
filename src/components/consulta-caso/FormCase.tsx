'use client';

import { useState, useEffect, FormEvent } from "react";
import { Input } from "../ui/input";
import Link from "next/link";
import { CaseType } from "@/types/case.type";
import { motion, AnimatePresence } from "framer-motion";
import { Scale } from "lucide-react";

export default function FormCase() {
    const [dni, setDni] = useState('');
    const [dataCase, setDataCase] = useState<CaseType | null>(null);
    const [showCaseData, setShowCaseData] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/case/${dni}`);

            if (response.ok) {
                const data = await response.json();
                setDataCase(data);
            } else {
                console.error('Error al realizar la consulta');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDni(e.target.value);
    }

    useEffect(() => {
        if (dataCase) {
            setTimeout(() => setShowCaseData(true), 400);
        }
    }, [dataCase]);

    return (
        <>
            <span className="">Ingresa tu <b>número de DNI</b> para conocer en qué etapa se encuentra tu proceso legal en solo unos segundos.</span>
            <form onSubmit={handleSubmit} className="flex gap-2 mt-4 mb-2">
                <Input
                    name='dni'
                    placeholder="Ej: 45637821"
                    className="w-fit placeholder:text-zinc-400 rounded border-zinc-500"
                    value={dni}
                    onChange={handleChange}
                />
                <button
                    className="w-full px-3 py-2 bg-cyan-800 hover:bg-cyan-700 text-white rounded z-10"
                    type='submit'
                >
                    Consultar
                </button>
            </form>
            <Link href='#' className="text-xs text-cyan-700 hover:text-cyan-800">¿Cuáles son los posibles estados de mi caso?</Link>
            <AnimatePresence>
                {showCaseData && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-3 shadow-md mt-5 py-3  px-3 rounded bg-white max-h-[400px] overflow-x-auto"
                    >
                        <h3 className="text-base text-center text-zinc-500">
                            <Scale />
                            Estado Actual del Caso
                        </h3>
                        <p className="font-bold text-lg text-cyan-800">{dataCase?.stageMessage?.title}</p>
                        <div>
                            <p><span className="text-cyan-800">Etapa:</span> <b>{dataCase?.stage}</b>/14</p>
                            <p><span className="text-cyan-800">Descripcion:</span> {dataCase?.stageMessage?.message}</p>
                            {dataCase?.observation && <p><b>Descripción:</b> {dataCase.observation}</p>}
                        </div>
                        <div className="text-zinc-400 text-xs float-end block  text-center">
                            <p>Alan Fernandez</p>
                            <p>Nahid&Asociados</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
