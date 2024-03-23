'use client';

import { useState } from 'react';
import { handleDeleteAllcases } from "@/app/actions/deleteAllCases";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { FolderPlus, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function ModalDeleteAllCases() {
    const [verificationText, setVerificationText] = useState('');

    async function handleDelete() {
        if (verificationText.trim() === 'eliminartodos') {
            const result = await handleDeleteAllcases();

            if (result.error) {
                toast.error(result.error);
            } else if (result.message) {
                toast.success(result.message);
            } else {
                toast.warning(result);
            }
        } else {
            toast.error('La frase de verificación es incorrecta.');
        }
        setVerificationText('')
    }

    return (
        <Dialog>
            <DialogTrigger>
                <p className="bg-red-300/50 shadow text-red-700 px-3 py-1 rounded hover:bg-red-400/50 flex items-center gap-1">
                    <Trash2 size={20} />
                    Eliminar todos
                </p>
            </DialogTrigger>
            <DialogContent className="bg-zinc-100 text-zinc-950">
                <DialogHeader className="pt-5">
                    <DialogTitle className="text-center text-lg lg:text-xl text-red-700 mb-5">
                        <span className="flex items-center gap-2 justify-center ">
                            <Trash2 size={20} />
                            Borrar todos los casos
                        </span>
                        <span className='text-base text-zinc-700'>⚠️ Esta accion es permanente y no se puede deshacer</span>
                    </DialogTitle>
                    <div className="text-sm mt-10 space-y-3">
                        <p>Ingrese <b>eliminartodos</b> para confirmar</p>
                        <Input
                            type="text"
                            value={verificationText}
                            onChange={(e) => setVerificationText(e.target.value)}
                            placeholder="eliminartodos"
                            className="w-full placeholder:text-zinc-500 rounded border-zinc-200 border-2"
                        />
                        <button
                            onClick={handleDelete}
                            className="w-full text-center py-2 shadow-zinc-400 shadow text-white bg-red-700 rounded hover:bg-red-800"                        >
                            Confirmar eliminación
                        </button>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
