'use client';

import { handleEditCase } from "@/app/actions/editCase";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Edit } from "lucide-react";
import { toast } from "sonner";
import { CaseTable } from "../table/Columns";
import { stages } from "./Form.CreateCases";
import { Textarea } from "@/components/ui/textarea";


export default function FormEditCase({ caseRow }: { caseRow: CaseTable }) {

    async function ClientAction(formData: FormData) {

        const stage = Number(formData.get('stage') || '');
        const observation = formData.get('observation')?.toString() || '';

        if (stage === null) {
            toast.error('Por favor seleccione una etapa.');
            return;
        }

        const dni = caseRow.dni;
        const result = await handleEditCase({ dni, stage: stage, observation: observation });

        if (result.error) {
            toast.error(result.error);
        } else if (result.message) {
            toast.success(result.message);
        } else {
            toast.warning(result);
        }
    }

    return (
        <form
            className="max-w-sm space-y-4 mx-auto mt-5"
            action={ClientAction}
        >
            <Select name="stage">
                <SelectTrigger className="w-full  rounded border-zinc-200 border-2">
                    <SelectValue placeholder={`Etapa actual: ${caseRow.stage}`} />
                </SelectTrigger>
                <SelectContent className="bg-white border-zinc-200 border-2 text-zinc-950 rounded">
                    {
                        stages.map((stage) => (
                            <SelectItem
                                key={stage.stage}
                                value={stage.stage.toString()}
                            >
                                {stage.stage} - {stage.title}
                            </SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>
            <Textarea
                name='observation'
                className="w-full  rounded border-zinc-200 border-2"
                placeholder="Observaciones (opcional)"
            />
            <button
                className="w-full flex justify-center items-center gap-1 text-center py-2 shadow-zinc-400 shadow text-white bg-green-700 rounded hover:bg-green-800"
            >
                <Edit size={20} />
                Editar
            </button>
        </form>
    )
}
