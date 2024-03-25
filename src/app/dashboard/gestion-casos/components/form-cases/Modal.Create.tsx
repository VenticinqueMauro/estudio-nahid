import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { FolderPlus } from "lucide-react";
import FormCreateCases from "./Form.CreateCases";


export default function ModalCreate() {

    return (
        <Dialog>
            <DialogTrigger>
                <p className="bg-green-300/50 shadow text-green-700 px-3 py-1 rounded hover:bg-green-400/50 flex items-center gap-1">
                    <FolderPlus size={20} />
                    Nuevo caso
                </p>
            </DialogTrigger>
            <DialogContent className="bg-zinc-100 text-zinc-950">
                <DialogHeader className="pt-5">
                    <DialogTitle className="text-center text-lg lg:text-xl text-cyan-700">
                        <span className="flex items-center gap-2 justify-center">
                            <FolderPlus size={20} />
                            Crear nuevo caso
                        </span>
                    </DialogTitle>
                    <div className="text-sm mt-10">
                        <FormCreateCases />
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog >
    )
}
