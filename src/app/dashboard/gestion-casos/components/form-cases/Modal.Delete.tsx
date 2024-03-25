import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Edit, Trash2 } from "lucide-react";
import { CaseTable } from "../table/Columns";
import FormEditCase from "./Form.EditCase";
import { handleDeleteCase } from "@/app/actions/deleteCase";


export default function ModalDelete({ caseRow }: { caseRow: CaseTable }) {

    return (
        <Dialog>
            <DialogTrigger>
                <Trash2
                    size={18} className="text-red-600 hover:text-red-700"
                />
            </DialogTrigger>
            <DialogContent className="bg-zinc-100 text-zinc-950">
                <DialogHeader className="pt-5">
                    <DialogTitle className="text-center text-lg lg:text-xl text-red-700">
                        <span className="flex items-center gap-2 justify-center">

                            Eliminar DNI: {caseRow.dni}
                        </span>
                    </DialogTitle>
                    <p className="py-2 text-center">
                        ⚠️ Esta acción es irreversible y no se puede deshacer.<br /> ¿Está seguro de continuar?
                    </p>
                    <div className="text-sm mt-10">
                        <button
                            className="w-full flex items-center gap-1 justify-center text-center py-2 shadow-zinc-400 shadow text-white bg-red-700 rounded hover:bg-red-800"
                            onClick={() => {
                                handleDeleteCase(caseRow.dni);
                            }}
                        >
                            <Trash2 size={20} />
                            Eliminar
                        </button>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog >
    )
}
