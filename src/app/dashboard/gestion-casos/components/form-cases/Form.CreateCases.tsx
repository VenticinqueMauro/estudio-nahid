'use client';

import { handleCreateCase } from "@/app/actions/createCase";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const stages = [
    { stage: 1, title: 'DEMANDA - Inicio del Juicio' },
    { stage: 2, title: 'AMPLIACIÓN DE DEMANDA' },
    { stage: 3, title: 'CUMPLIMIENTO DE RECAUDOS' },
    { stage: 4, title: 'TRASLADO DE DEMANDA' },
    { stage: 5, title: 'DOCUMENTACIÓN DE LA EMPRESA' },
    { stage: 6, title: 'APERTURA A PRUEBAS' },
    { stage: 7, title: 'AUDIENCIA DE CONCILIACIÓN' },
    { stage: 8, title: 'INICIAN LAS PRUEBAS' },
    { stage: 9, title: 'ALEGATOS Y PRIMERA SENTENCIA' },
    { stage: 10, title: 'APELACIÓN' },
    { stage: 11, title: 'RECURSO DE CASACIÓN LOCAL' },
    { stage: 12, title: 'RECURSO DE CASACIÓN NACIONAL' },
    { stage: 13, title: 'SENTENCIA FIRME - CUMPLIMIENTO' },
    { stage: 14, title: 'INTERESES' }
]


export default function FormCreateCases() {

    async function ClientAction(formData: FormData) {
        const result = await handleCreateCase(formData);

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
            <Input
                name='dni'
                placeholder="Numero de DNI"
                className="w-full placeholder:text-zinc-900 rounded border-zinc-200 border-2"
                pattern="[0-9]+"
            />
            <Select name="stage">
                <SelectTrigger className="w-full  rounded border-zinc-200 border-2">
                    <SelectValue placeholder="Etapa del caso" />
                </SelectTrigger>
                <SelectContent className="bg-white border-zinc-200 border-2 text-zinc-950 rounded">
                    {
                        stages.map((stage) => (
                            <SelectItem key={stage.stage} className="" value={stage.stage.toString()}>{stage.stage} - {stage.title}</SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>
            <button className="w-full text-center py-2 shadow-zinc-400 shadow text-white bg-cyan-700 rounded hover:bg-cyan-800">Crear</button>
        </form>
    )
}
