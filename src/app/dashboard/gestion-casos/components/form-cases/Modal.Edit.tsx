import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Edit } from "lucide-react";
import { CaseTable } from "../table/Columns";
import FormEditCase from "./Form.EditCase";


export default function ModalEdit({ caseRow }: { caseRow: CaseTable }) {

    return (
        <Dialog>
            <DialogTrigger>
                <Edit
                    size={18} className="text-green-600 hover:text-green-700"
                />
            </DialogTrigger>
            <DialogContent className="bg-zinc-100 text-zinc-950">
                <DialogHeader className="pt-5">
                    <DialogTitle className="text-center text-lg lg:text-xl text-green-700">
                        <span className="flex items-center gap-2 justify-center font-medium">
                            Modificar DNI: {caseRow.dni}
                        </span>
                    </DialogTitle>
                    <div className="text-sm mt-10">
                        <FormEditCase caseRow={caseRow} />
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog >
    )
}
